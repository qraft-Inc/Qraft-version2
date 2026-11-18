import { type Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Future of Work Forum | Ecosystem Capital Development" },
  description: "A multi-stakeholder platform connecting individuals, institutions, businesses and partners to shape the future of work — through the Future of Work Tour and Future of Work Awards.",
  alternates: { canonical: "https://qraftacademy.com/future-of-work-forum" },
  openGraph: {
    title: "Future of Work Forum | Ecosystem Capital Development",
    description: "Connecting people, institutions and enterprises to shape the future of work in Africa.",
    url: "https://qraftacademy.com/future-of-work-forum",
  },
};

export default function FutureOfWorkForumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
