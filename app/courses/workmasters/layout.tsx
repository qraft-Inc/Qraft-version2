import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkMasters | 90-Day Work Readiness Accelerator | Qraft Academy",
  description: "Complete the 90-Day Work Readiness Accelerator with Qraft Academy's WorkMasters program — your gateway to professional excellence, productivity, and career success.",
  openGraph: {
    title: "WorkMasters | 90-Day Work Readiness Accelerator | Qraft Academy",
    description: "A 90-day accelerator program building professional excellence, workplace productivity, and career-ready skills.",
  },
};

export default function WorkMastersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
