import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Qraft Academy | Our Mission, Vision & Story",
  description: "Qraft Academy builds digital learning infrastructure for development partners and retained L&D departments for growing enterprises. Based in Kampala, Uganda.",
  openGraph: {
    title: "About Qraft Academy | Our Mission, Vision & Story",
    description: "Qraft Academy: CourseMasters™ digital learning infrastructure and TalentMasters™ retained L&D-as-a-Service.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="container-custom text-white text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">About Qraft Academy</h1>
          <p className="text-lg sm:text-xl leading-relaxed opacity-95">
            We engineer production-grade e-learning systems for development partners and provide turnkey, retained
            Learning &amp; Development departments for growing enterprises across East Africa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">What We Do</h2>
          <p className="text-neutral-700 mb-6">
            We work exclusively with institutions and enterprises through two offers: digital learning infrastructure and
            retained, outsourced L&amp;D.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">CourseMasters™</h3>
              <p className="text-neutral-600 mb-4">Digital learning infrastructure: curriculum digitization, SCORM/xAPI production, and institutional LMS deployment for INGOs, donors, and enterprises.</p>
              <Link href="/coursemasters" className="text-primary-600 font-semibold hover:text-primary-700">
                Explore CourseMasters™ →
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">TalentMasters™</h3>
              <p className="text-neutral-600 mb-4">Retained L&amp;D-as-a-Service: a turnkey outsourced training department with ready-made clinics and needs-based programs for mid-market companies.</p>
              <Link href="/solutions/talentmasters" className="text-primary-600 font-semibold hover:text-primary-700">
                Explore TalentMasters™ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
