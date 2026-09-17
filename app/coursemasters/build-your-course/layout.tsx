import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Course | CourseMasters™ Production Services | Qraft Academy",
  description: "Tell us your course idea and Qraft Academy's CourseMasters™ team will design, build, and launch a world-class e-learning experience for your organization.",
  openGraph: {
    title: "Build Your Course | CourseMasters™ Production Services | Qraft Academy",
    description: "End-to-end e-learning course production — curriculum design, video production, and platform deployment by Qraft Academy.",
  },
};

export default function BuildYourCourseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
