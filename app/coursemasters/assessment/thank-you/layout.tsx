import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment Received | CourseMasters™ | Qraft Academy",
  description: "Your CourseMasters™ Digital Learning Assessment request has been received. Book your discovery session to continue.",
  robots: { index: false, follow: true },
};

export default function AssessmentThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
