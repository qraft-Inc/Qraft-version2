import { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Qraft Academy",
  description:
    "Contact Qraft Academy for course development, learning infrastructure, and workforce transformation support.",
};

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/256767769569?text=" + encodeURIComponent("Hi, I’d like to get in touch with Qraft Academy.");

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container-custom text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Contact Qraft Academy</h1>
          <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-95">
            Let’s discuss how we can support your learning systems, course production, and workforce growth strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg font-bold">
              Chat on WhatsApp
            </a>
            <a href="mailto:drew@qraftacademy.com" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-10 text-center">
              Get in Touch
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
