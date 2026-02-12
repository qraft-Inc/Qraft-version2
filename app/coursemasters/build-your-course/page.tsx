'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BuildCourseFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function BuildYourCoursePage() {
  const [formData, setFormData] = useState<BuildCourseFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/coursemasters/build-your-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.message || 'Failed to send your request.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                ✍️ Build Your Course
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
                Tell Us About Your Course Idea
              </h1>
              <p className="text-base sm:text-lg text-neutral-600">
                Share your vision and we will help you design, build, and launch a world-class learning experience.
              </p>
            </div>

            <div className="card-glass p-6 sm:p-8 md:p-10">
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
                <p className="text-sm sm:text-base text-neutral-600">
                  Need a quick response? Reach us instantly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+256755017384"
                    className="px-5 py-2.5 text-sm sm:text-base text-center bg-white border border-neutral-200 rounded-xl font-semibold text-neutral-700 hover:bg-neutral-50 transition"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/256755017384?text=Hello!%20I%20would%20like%20to%20build%20a%20course%20with%20CourseMasters."
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 text-sm sm:text-base text-center bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-2">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-800 mb-2">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="+256 700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-800 mb-2">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Organization name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-2">
                    Course goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your audience, outcomes, and timeline."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <Link href="/coursemasters" className="text-sm sm:text-base font-semibold text-neutral-600 hover:text-neutral-900">
                    ← Back to CourseMasters
                  </Link>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary px-6 py-3 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit request'}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                    Thanks! Your request has been sent. We will reach out shortly.
                  </div>
                )}

                {status === 'error' && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
