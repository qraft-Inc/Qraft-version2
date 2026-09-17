import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Digital Learning Assessment | CourseMasters™ | Qraft Academy",
  description: "Book a complimentary Digital Learning Opportunity Assessment with CourseMasters™ and get an initial recommendation on the most suitable way to digitize your organization's knowledge.",
  openGraph: {
    title: "Free Digital Learning Assessment | CourseMasters™ | Qraft Academy",
    description: "Tell us about your organization's learning needs and get a complimentary Digital Learning Opportunity Assessment from CourseMasters™.",
  },
};

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
