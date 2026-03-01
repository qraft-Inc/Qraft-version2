import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Qraft Academy",
  description:
    "Contact Qraft Academy for course development, learning infrastructure, and workforce transformation support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container-custom text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">Contact Qraft Academy</h1>
          <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-95">
            Let’s discuss how we can support your learning systems, course production, and workforce growth strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@qraftacademy.com" className="btn-primary bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg">
              Book a Consultation
            </a>
            <a href="mailto:drew@qraftacademy.com" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30">
              Email Drew
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
