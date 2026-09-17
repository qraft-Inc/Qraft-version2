'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '256755017384';

export default function AssessmentThankYouPage() {
  const handleBooking = () => {
    trackEvent('coursemasters_discovery_booking', { method: 'whatsapp' });
    const message = 'Hello! I just submitted a CourseMasters Digital Learning Assessment request and would like to book my discovery session.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBookingEmail = () => {
    trackEvent('coursemasters_discovery_booking', { method: 'email' });
  };

  const handleCaseStudyView = () => {
    trackEvent('coursemasters_case_study_view', { study: 'D4GW — Understanding Digital Rights', source: 'thank_you' });
    window.open('https://ulearn.enabel.be/', '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="section-padding">
        <div className="container-custom max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">Thank You</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Your CourseMasters™ Assessment Has Started.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mb-10">
            We&apos;ve received your information. The next step is a short discovery conversation to understand your learning requirements and recommend the most suitable approach.
          </p>

          <div className="card-glass p-6 sm:p-8 mb-12 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 mb-2">Step 2</p>
            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-4">Book Your Discovery Session</h2>
            <p className="text-sm text-slate-600 mb-6">
              We don&apos;t yet have an automated calendar — message us on WhatsApp or email and we&apos;ll find a time that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleBooking}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl flex-1 text-center"
              >
                Choose a Time on WhatsApp →
              </button>
              <a
                href="mailto:drew@qraftacademy.com?subject=CourseMasters%20Discovery%20Session"
                onClick={handleBookingEmail}
                className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl flex-1 text-center"
              >
                Email Us Instead
              </a>
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-800 mb-5">While you wait, see how CourseMasters works.</p>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left max-w-md mx-auto">
            <div className="relative h-40">
              <Image
                src="/images/Understanding Digital Rights D4GW.png"
                alt="D4GW — Understanding Digital Rights"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 mb-1">D4GW — Understanding Digital Rights</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">Client: Enabel / Belgian Development Agency</p>
              <button onClick={handleCaseStudyView} className="text-blue-600 font-semibold hover:text-blue-700">
                View Case Study →
              </button>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/coursemasters" className="text-sm font-semibold text-slate-500 hover:text-slate-800">
              ← Back to CourseMasters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
