'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface AssessmentFormData {
  name: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  needs: string[];
  content: string[];
  hasLms: string;
  learnerCount: string;
  timeline: string;
  message: string;
}

const NEEDS_OPTIONS = [
  'Build a digital course',
  'Set up a Moodle LMS',
  'Train myself to build courses',
  "Train my organization's team",
  'Improve an existing course/LMS',
  'Ongoing support',
  'Not sure yet'
];

const CONTENT_OPTIONS = [
  'Training manuals',
  'Curriculum',
  'Policies/guidelines',
  'PowerPoint presentations',
  'Facilitator guides',
  'Videos',
  'Existing online course',
  'Other'
];

const LEARNER_COUNT_OPTIONS = ['1–50', '51–200', '201–500', '501–1,000', '1,000+'];

const TIMELINE_OPTIONS = ['Immediately', '1–3 months', '3–6 months', '6+ months', 'Exploring'];

const INTEREST_TO_NEED: Record<string, string[]> = {
  'flagship-course': ['Build a digital course'],
  'moodle-lms': ['Set up a Moodle LMS'],
  'individual-training': ['Train myself to build courses'],
  'team-bootcamp': ["Train my organization's team"],
  'ongoing-support': ['Ongoing support'],
  'complete-system': ['Build a digital course', 'Set up a Moodle LMS', "Train my organization's team", 'Ongoing support']
};

const EMPTY_FORM: AssessmentFormData = {
  name: '',
  organization: '',
  role: '',
  email: '',
  phone: '',
  needs: [],
  content: [],
  hasLms: '',
  learnerCount: '',
  timeline: '',
  message: ''
};

export default function CourseMastersAssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AssessmentFormData>(EMPTY_FORM);
  const [interest, setInterest] = useState<string | null>(null);
  const [stepError, setStepError] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const hasTrackedStart = useRef(false);

  useEffect(() => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    const params = new URLSearchParams(window.location.search);
    const interestParam = params.get('interest');
    trackEvent('coursemasters_assessment_start', interestParam ? { interest: interestParam } : undefined);
    if (interestParam) {
      setInterest(interestParam);
      const preselected = INTEREST_TO_NEED[interestParam];
      if (preselected) {
        setFormData((prev) => ({ ...prev, needs: preselected }));
      }
    }
  }, []);

  const toggleArrayValue = (field: 'needs' | 'content', value: string) => {
    setFormData((prev) => {
      const current = prev[field];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [field]: next };
    });
    setStepError('');
  };

  const updateField = (field: keyof AssessmentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setStepError('');
  };

  const goNext = () => {
    if (step === 1) {
      if (!formData.name.trim() || !formData.organization.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setStepError('Please fill in your name, organization, work email and phone/WhatsApp.');
        return;
      }
    }
    if (step === 2 && formData.needs.length === 0) {
      setStepError('Please select at least one option.');
      return;
    }
    setStepError('');
    setStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => {
    setStepError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.message.trim()) {
      setStepError('Please briefly describe what you want to achieve.');
      return;
    }
    setStepError('');
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/coursemasters/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, interest })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.message || 'Failed to send your request.');
      }

      trackEvent('coursemasters_assessment_submit', { interest: interest || undefined, needs: formData.needs });
      router.push('/coursemasters/assessment/thank-you');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  const stepTitles = ['About You', 'Your Learning Need', 'Your Current Situation', 'Tell Us More'];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-3">
              CourseMasters™ Assessment
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Book Your Complimentary Digital Learning Opportunity Assessment
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Tell us about your organization and learning needs — it takes about two minutes.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-2">
              <span>
                Step {step} of 4 — {stepTitles[step - 1]}
              </span>
              <span>{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-glass p-6 sm:p-8 md:p-10 space-y-6">
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-slate-800 mb-2">Organization</label>
                  <input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => updateField('organization', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Organization name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-slate-800 mb-2">Role/Title</label>
                  <input
                    id="role"
                    type="text"
                    value={formData.role}
                    onChange={(e) => updateField('role', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Head of Learning & Development"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@organization.org"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-2">Phone/WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+256 700 000 000"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-4">What do you want help with?</p>
                <div className="space-y-2.5">
                  {NEEDS_OPTIONS.map((option) => (
                    <label key={option} className="flex items-start gap-3 rounded-xl border border-slate-200 px-4 py-3 cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={formData.needs.includes(option)}
                        onChange={() => toggleArrayValue('needs', option)}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm sm:text-base text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-4">What content do you currently have?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CONTENT_OPTIONS.map((option) => (
                      <label key={option} className="flex items-start gap-3 rounded-xl border border-slate-200 px-4 py-3 cursor-pointer hover:bg-slate-50">
                        <input
                          type="checkbox"
                          checked={formData.content.includes(option)}
                          onChange={() => toggleArrayValue('content', option)}
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-4">Do you currently have an LMS?</p>
                  <div className="flex flex-wrap gap-2.5">
                    {['Yes', 'No', 'Not sure'].map((option) => (
                      <label
                        key={option}
                        className={`px-4 py-2 rounded-full border cursor-pointer text-sm font-medium ${
                          formData.hasLms === option ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="hasLms"
                          value={option}
                          checked={formData.hasLms === option}
                          onChange={(e) => updateField('hasLms', e.target.value)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-4">Approximate number of learners</p>
                  <div className="flex flex-wrap gap-2.5">
                    {LEARNER_COUNT_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`px-4 py-2 rounded-full border cursor-pointer text-sm font-medium ${
                          formData.learnerCount === option ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="learnerCount"
                          value={option}
                          checked={formData.learnerCount === option}
                          onChange={(e) => updateField('learnerCount', e.target.value)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-4">When would you like to launch?</p>
                  <div className="flex flex-wrap gap-2.5">
                    {TIMELINE_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`px-4 py-2 rounded-full border cursor-pointer text-sm font-medium ${
                          formData.timeline === option ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={option}
                          checked={formData.timeline === option}
                          onChange={(e) => updateField('timeline', e.target.value)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                  Briefly describe what you want to achieve.
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about the knowledge you want to digitize, your learners, and your goals."
                />
              </div>
            )}

            {stepError && (
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">{stepError}</div>
            )}

            {status === 'error' && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">{errorMessage}</div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
              <div>
                {step === 1 ? (
                  <Link href="/coursemasters" className="text-sm sm:text-base font-semibold text-slate-500 hover:text-slate-800">
                    ← Back to CourseMasters
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={goBack}
                    className="text-sm sm:text-base font-semibold text-slate-500 hover:text-slate-800"
                  >
                    ← Back
                  </button>
                )}
              </div>
              {step < 4 ? (
                <button type="button" onClick={goNext} className="btn-primary px-6 py-3 text-sm sm:text-base">
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary px-6 py-3 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Get My Digital Learning Assessment'}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
