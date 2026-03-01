import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting | Qraft Academy",
  description: "Qraft Academy consulting services for workforce learning systems and digital capability transformation.",
};

export default function ConsultingPage() {
  return (
    <main className="min-h-screen section-padding">
      <section className="container-custom">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
          Consulting
        </h1>
        <p className="text-neutral-700 max-w-3xl">
          Consulting offerings are being finalized. Contact Qraft Academy to discuss strategy, program design, and implementation support for your organization.
        </p>
      </section>
    </main>
  );
}
