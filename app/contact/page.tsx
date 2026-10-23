import { Metadata } from "next";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import ProposalRequestForm from "@/components/forms/proposal-request-form";

export const metadata: Metadata = {
  title: "Request an Institutional Proposal | Qraft Academy",
  description: "Contact Qraft Academy for governance systems, course development, learning infrastructure, and workforce transformation support. Based in Bukoto, Kampala, Uganda.",
  openGraph: {
    title: "Request an Institutional Proposal | Qraft Academy",
    description: "Request an institutional proposal or book a capability consultation. Qraft Academy is based in Bukoto, Kampala, Uganda.",
  },
};

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/256767769569?text=" + encodeURIComponent("Hi, I’d like to discuss an institutional engagement with Qraft Academy.");

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container-custom text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Partner With Qraft Academy</h1>
          <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-95">
            Request an institutional proposal or book a capability consultation. Tell us about your organization, solution of interest, and project scope — we respond with a structured proposal aligned to your procurement requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rfp" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-bold">
              Request Institutional Proposal
            </a>
            <a href="mailto:drew@qraftacademy.com?subject=Capability%20Consultation%20Request" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Book Capability Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Proposal Request Form */}
      <section id="rfp" className="section-padding bg-neutral-50 scroll-mt-24">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                Request an Institutional Proposal
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg">
                For INGOs and development partners, corporate and financial institutions, and mid-market enterprises.
              </p>
            </div>
            <div className="card p-6 sm:p-8 md:p-10">
              <ProposalRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-10 text-center">
              Institutional Inquiries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Address */}
              <div className="card p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">Our Address</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Bukoto, Church Street<br />
                  Plot 4–10 Kiwana Road<br />
                  Kampala, Uganda
                </p>
              </div>

              {/* Phone / WhatsApp */}
              <div className="card p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">Phone & WhatsApp</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 font-semibold text-sm hover:text-green-800 transition-colors"
                >
                  +256 767 769 569
                </a>
                <p className="text-neutral-400 text-xs mt-2">Available on WhatsApp</p>
              </div>

              {/* Email */}
              <div className="card p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-accent-100 text-accent-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">Email</h3>
                <a
                  href="mailto:drew@qraftacademy.com"
                  className="text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors break-all"
                >
                  drew@qraftacademy.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
