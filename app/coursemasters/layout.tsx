import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "CourseMasters™ | Digital Learning Systems for Organizations | Qraft Academy",
  description: "Turn your organization's knowledge into scalable digital learning. Course development, Moodle LMS, team capability training and ongoing support from Qraft Academy's CourseMasters™.",
  openGraph: {
    title: "CourseMasters™ | Digital Learning Systems for Organizations | Qraft Academy",
    description: "Digital course development, Moodle LMS, team capability training and ongoing support — the complete digital-learning system from Qraft Academy.",
  },
};

export default function CourseMastersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
