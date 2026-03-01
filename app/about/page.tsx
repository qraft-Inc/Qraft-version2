import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Qraft Academy",
  description:
    "Learn about Qraft Academy and our mission to shape the future of work through education, technology, and finance.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom text-white text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">About Qraft Academy</h1>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95">
            We design workforce infrastructure for the modern economy by combining structured learning systems,
            digital platforms, and institutional capability development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">What We Do</h2>
          <p className="text-neutral-700 mb-6">
            Through our services and programs, we support organizations and individuals to build practical skills,
            launch scalable learning ecosystems, and create long-term workforce impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">Services</h3>
              <p className="text-neutral-600 mb-4">Course development, learning infrastructure, and consulting support.</p>
              <Link href="/coursemasters" className="text-primary-600 font-semibold hover:text-primary-700">
                Explore Services →
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">Programs</h3>
              <p className="text-neutral-600 mb-4">Online and on-site learning experiences aligned to future-of-work needs.</p>
              <Link href="/on-site-classes" className="text-primary-600 font-semibold hover:text-primary-700">
                Explore Programs →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
