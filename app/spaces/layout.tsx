import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Hub | CourseMasters Studios & Learning Spaces | Qraft Academy",
  description: "Explore Qraft Academy's creative hub in Kampala — professional audio recording studios, video production facilities, and learning spaces where innovation meets education.",
  openGraph: {
    title: "Our Hub | CourseMasters Studios & Learning Spaces | Qraft Academy",
    description: "Professional recording studios, video production facilities, and creative learning spaces at Qraft Academy's hub in Kampala, Uganda.",
  },
};

export default function SpacesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
