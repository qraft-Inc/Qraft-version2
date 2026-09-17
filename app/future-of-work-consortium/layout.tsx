import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Future of Work Consortium | Qraft Academy",
  description: "The Future of Work Consortium brings together organizations, policymakers, and innovators to shape Africa's future of work through dialogue, research, and collective action.",
  openGraph: {
    title: "Future of Work Consortium | Qraft Academy",
    description: "A collaborative forum shaping the future of work through dialogue, policy, and innovation.",
  },
};

export default function FutureOfWorkConsortiumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
