import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Future of Work Forum | Qraft Academy",
  description: "Join Uganda's leading conversation on the Future of Work — exploring digital skills, flexible work standards, gig economy protection, and workforce transformation.",
  openGraph: {
    title: "Future of Work Forum | Qraft Academy",
    description: "A platform for dialogue, research, and action on the Future of Work in Africa.",
  },
};

export default function FutureOfWorkForumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
