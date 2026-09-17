import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "CapitalMasters™ Courses | Financial Empowerment for Every African | Qraft Academy",
  description: "Explore CapitalMasters™ courses at Qraft Academy — build financial literacy, investment readiness, and capital management skills for sustainable personal and business growth.",
  openGraph: {
    title: "CapitalMasters™ Courses | Financial Empowerment for Every African | Qraft Academy",
    description: "Financial literacy, investment readiness, and capital management courses for professionals, entrepreneurs, and organizations.",
  },
};

export default function CapitalMastersCoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
