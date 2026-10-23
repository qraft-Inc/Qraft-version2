'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { INTEREST_PARAM_TO_SOLUTION, ORGANIZATION_TYPES, SOLUTIONS_OF_INTEREST } from '@/lib/proposal';

interface ProposalFormData {
  name: string;
  email: string;
  organizationName: string;
  organizationType: string;
  solution: string;
  projectScope: string;
}

const emptyForm: ProposalFormData = {
  name: '',
  email: '',
  organizationName: '',
  organizationType: '',
  solution: '',
  projectScope: ''
};

const inputClass =
  'w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white';
const labelClass = 'block text-sm font-semibold text-neutral-800 mb-2';

// Reads `?interest=` from the URL so CTAs can pre-select a solution
function InterestPrefill({ onInterest }: { onInterest: (solution: string) => void }) {
  const searchParams = useSearchParams();
  const interest = searchParams?.get('interest')?.toLowerCase();

  useEffect(() => {
    const solution = interest ? INTEREST_PARAM_TO_SOLUTION[interest] : undefined;
    if (solution) {
      onInterest(solution);
    }
  }, [interest, onInterest]);

  return null;
}

export default function ProposalRequestForm() {
  const [formData, setFormData] = useState<ProposalFormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const setSolution = useCallback(
    (solution: string) => setFormData((prev) => ({ ...prev, solution })),
    []
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/proposal-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.message || 'Failed to send your request.');
      }

      setStatus('success');
      setFormData(emptyForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Suspense fallback={null}>
        <InterestPrefill onInterest={setSolution} />
      </Suspense>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Full name & title"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="you@organization.org"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organizationName" className={labelClass}>
          Organization / Institution Name <span className="text-red-600">*</span>
        </label>
        <input
          id="organizationName"
          name="organizationName"
          type="text"
          autoComplete="organization"
          value={formData.organizationName}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Organization or institution name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="organizationType" className={labelClass}>
            Organization Type <span className="text-red-600">*</span>
          </label>
          <select
            id="organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select organization type
            </option>
            {ORGANIZATION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="solution" className={labelClass}>
            Solution of Interest <span className="text-red-600">*</span>
          </label>
          <select
            id="solution"
            name="solution"
            value={formData.solution}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select a solution
            </option>
            {SOLUTIONS_OF_INTEREST.map((solution) => (
              <option key={solution} value={solution}>
                {solution}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectScope" className={labelClass}>
          Project Scope / Overview <span className="text-red-600">*</span>
        </label>
        <textarea
          id="projectScope"
          name="projectScope"
          rows={6}
          value={formData.projectScope}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Objectives, target workforce or audience, timeline, and any RFP / tender reference."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full sm:w-auto px-8 py-3 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Submit Institutional RFP / Diagnostic Request'}
      </button>

      {status === 'success' && (
        <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-700" role="status">
          Thank you. Your request has been received — our partnerships team will respond with next steps.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700" role="alert">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
