import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Site Classes | Personal Development & Wellbeing | Qraft Academy",
  description: "Attend Qraft Academy's on-site classes in Kampala — covering personal development, emotional intelligence, quality of life, wellbeing, and professional skills.",
  openGraph: {
    title: "On-Site Classes | Personal Development & Wellbeing | Qraft Academy",
    description: "In-person learning experiences covering personal growth, confidence, emotional intelligence, and professional skills.",
  },
};

export default function OnSiteClassesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
