import { type Metadata } from "next";
import CourseMastersSubnav from "@/components/sections/coursemasters/subnav";

export const metadata: Metadata = {
  title: "CourseMasters™ | Digital Learning & Publishing Systems for Organizations | Qraft Academy",
  description: "Turn your organization's knowledge and content into digital experiences that work. Course development, Moodle LMS, CMS & digital magazine platforms, team capability training and ongoing support from Qraft Academy's CourseMasters™.",
  openGraph: {
    title: "CourseMasters™ | Digital Learning & Publishing Systems for Organizations | Qraft Academy",
    description: "Digital course development, Moodle LMS, CMS & digital publishing platforms, team capability training and ongoing support — from Qraft Academy.",
  },
};

export default function CourseMastersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseMastersSubnav />
      {children}
    </>
  );
}
