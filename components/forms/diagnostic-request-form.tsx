'use client';

import { useState } from 'react';
import { EMPLOYEE_COUNT_OPTIONS, INTEREST_AREA_OPTIONS } from '@/lib/proposal';

interface DiagnosticFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  employeeCount: string;
  interestArea: string;
}

const emptyForm: DiagnosticFormData = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  employeeCount: '',
  interestArea: ''
};

const inputClass =
  'w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white';
const labelClass = 'block text-sm font-semibold text-neutral-800 mb-2';

export default function DiagnosticRequestForm() {
  const [formData, setFormData] = useState<DiagnosticFormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/talentmasters-diagnostic', {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-name" className={labelClass}>
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="diag-name"
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
          <label htmlFor="diag-email" className={labelClass}>
            Work Email <span className="text-red-600">*</span>
          </label>
          <input
            id="diag-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-phone" className={labelClass}>
            Phone Number / WhatsApp <span className="text-red-600">*</span>
          </label>
          <input
            id="diag-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="+256 700 000 000"
          />
        </div>
        <div>
          <label htmlFor="diag-company" className={labelClass}>
            Organization Name <span className="text-red-600">*</span>
          </label>
          <input
            id="diag-company"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={formData.companyName}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Organization name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="diag-employees" className={labelClass}>
            Staff Count <span className="text-red-600">*</span>
          </label>
          <select
            id="diag-employees"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select range
            </option>
            {EMPLOYEE_COUNT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="diag-focus" className={labelClass}>
            Primary Area of Interest <span className="text-red-600">*</span>
          </label>
          <select
            id="diag-focus"
            name="interestArea"
            value={formData.interestArea}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select area of interest
            </option>
            {INTEREST_AREA_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Schedule a 30-Minute Capability Diagnostic'}
      </button>

      {status === 'success' && (
        <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-700" role="status">
          Thank you. We will contact you to schedule your 30-minute capability diagnostic.
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
