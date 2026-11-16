'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import {
  CMS_ADD_ONS,
  CMS_BUDGET_OPTIONS,
  CMS_CONTENT_VOLUME_OPTIONS,
  CMS_PACKAGES,
  CMS_PROJECT_TYPES,
  type CmsPackage,
} from '@/lib/cms';

interface CmsFormData {
  name: string;
  organization: string;
  email: string;
  country: string;
  projectType: string;
  existingWebsite: string;
  contentVolume: string;
  languages: string;
  budget: string;
  launchDate: string;
  description: string;
  selectedPackage: string;
  addOns: string[];
  company_website: string; // honeypot
}

const emptyForm: CmsFormData = {
  name: '',
  organization: '',
  email: '',
  country: '',
  projectType: '',
  existingWebsite: '',
  contentVolume: '',
  languages: '',
  budget: '',
  launchDate: '',
  description: '',
  selectedPackage: '',
  addOns: [],
  company_website: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white';
const labelClass = 'block text-sm font-semibold text-slate-800 mb-2';
const Required = () => (
  <span className="text-red-600" aria-hidden="true">
    {' '}*
  </span>
);

// Reads `?package=` so pricing CTAs can prefill the form
function PackagePrefill({ onPackage, onCombined }: { onPackage: (pkg: CmsPackage) => void; onCombined: () => void }) {
  const searchParams = useSearchParams();
  const packageId = searchParams?.get('package')?.toLowerCase();

  useEffect(() => {
    if (!packageId) return;
    if (packageId === 'combined') {
      onCombined();
      return;
    }
    const pkg = CMS_PACKAGES.find((p) => p.id === packageId);
    if (pkg) onPackage(pkg);
  }, [packageId, onPackage, onCombined]);

  return null;
}

export default function CmsEnquiryForm() {
  const [formData, setFormData] = useState<CmsFormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  const applyPackage = useCallback((pkg: CmsPackage) => {
    setFormData((prev) => ({
      ...prev,
      selectedPackage: pkg.name,
      projectType: pkg.projectType,
      budget: pkg.budget ?? prev.budget,
    }));
  }, []);

  const applyCombined = useCallback(() => {
    setFormData((prev) => ({ ...prev, budget: prev.budget || 'Need guidance' }));
  }, []);

  const markStarted = () => {
    if (hasStarted) return;
    setHasStarted(true);
    trackEvent('coursemasters_cms_enquiry_start');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    markStarted();
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleAddOn = (addOn: string) => {
    markStarted();
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOn) ? prev.addOns.filter((a) => a !== addOn) : [...prev.addOns, addOn],
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/coursemasters/cms-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.message || 'Failed to send your enquiry.');
      }

      trackEvent('coursemasters_cms_enquiry_submit', {
        project_type: formData.projectType,
        budget: formData.budget,
        package: formData.selectedPackage || 'none',
        add_ons: formData.addOns.length,
      });
      setStatus('success');
      setFormData(emptyForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-6 sm:p-8 text-center" role="status">
        <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Thank you — your enquiry has been received.</h3>
        <p className="text-slate-600 mb-5">
          Our team will review your requirements and respond with next steps, usually within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-semibold hover:text-blue-700"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Suspense fallback={null}>
        <PackagePrefill onPackage={applyPackage} onCombined={applyCombined} />
      </Suspense>

      {/* Honeypot: hidden from people and assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company_website}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="cms-package" className={labelClass}>
          Package of interest
        </label>
        <select
          id="cms-package"
          name="selectedPackage"
          value={formData.selectedPackage}
          onChange={(e) => {
            const pkg = CMS_PACKAGES.find((p) => p.name === e.target.value);
            markStarted();
            if (pkg) applyPackage(pkg);
            else setFormData((prev) => ({ ...prev, selectedPackage: '' }));
          }}
          className={inputClass}
        >
          <option value="">Not sure yet / custom project</option>
          {CMS_PACKAGES.map((pkg) => (
            <option key={pkg.id} value={pkg.name}>
              {pkg.name} — from {pkg.price}
              {pkg.priceSuffix ?? ''}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cms-name" className={labelClass}>
            Full name<Required />
          </label>
          <input id="cms-name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cms-organization" className={labelClass}>
            Organisation<Required />
          </label>
          <input
            id="cms-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cms-email" className={labelClass}>
            Work email<Required />
          </label>
          <input
            id="cms-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@organisation.org"
          />
        </div>
        <div>
          <label htmlFor="cms-country" className={labelClass}>
            Country<Required />
          </label>
          <input
            id="cms-country"
            name="country"
            type="text"
            autoComplete="country-name"
            required
            value={formData.country}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cms-project-type" className={labelClass}>
            Project type<Required />
          </label>
          <select id="cms-project-type" name="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
            <option value="" disabled>
              Select project type
            </option>
            {CMS_PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cms-website" className={labelClass}>
            Existing website <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="cms-website"
            name="existingWebsite"
            type="url"
            autoComplete="url"
            value={formData.existingWebsite}
            onChange={handleChange}
            className={inputClass}
            placeholder="https://"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cms-volume" className={labelClass}>
            Approximate content volume<Required />
          </label>
          <select id="cms-volume" name="contentVolume" required value={formData.contentVolume} onChange={handleChange} className={inputClass}>
            <option value="" disabled>
              Articles, issues, reports or resources
            </option>
            {CMS_CONTENT_VOLUME_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cms-languages" className={labelClass}>
            Required languages<Required />
          </label>
          <input
            id="cms-languages"
            name="languages"
            type="text"
            required
            value={formData.languages}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. English, Kiswahili"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cms-budget" className={labelClass}>
            Estimated budget<Required />
          </label>
          <select id="cms-budget" name="budget" required value={formData.budget} onChange={handleChange} className={inputClass}>
            <option value="" disabled>
              Select budget range
            </option>
            {CMS_BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cms-launch" className={labelClass}>
            Desired launch date<Required />
          </label>
          <input
            id="cms-launch"
            name="launchDate"
            type="text"
            required
            value={formData.launchDate}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. March 2027 or 'flexible'"
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>
          Combine with other services <span className="font-normal text-slate-500">(optional)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
          {CMS_ADD_ONS.map((addOn) => (
            <label key={addOn} className="flex items-start gap-2 text-sm text-slate-700 cursor-pointer py-1">
              <input
                type="checkbox"
                checked={formData.addOns.includes(addOn)}
                onChange={() => toggleAddOn(addOn)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              {addOn}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cms-description" className={labelClass}>
          Project description<Required />
        </label>
        <textarea
          id="cms-description"
          name="description"
          rows={5}
          required
          value={formData.description}
          onChange={handleChange}
          className={inputClass}
          placeholder="What content do you publish today, who reads it, and what should the new platform make possible?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Get My CMS Proposal'}
      </button>

      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700" role="alert">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
