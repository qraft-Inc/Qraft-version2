import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "TechMasters Apprenticeship | Build Tech Skills, Products & Companies | Qraft Academy",
  description: "Join the TechMasters Apprenticeship at Qraft Academy — build in-demand tech skills, create real tech products, and launch your own tech company. Apply now.",
  openGraph: {
    title: "TechMasters Apprenticeship | Build Tech Skills, Products & Companies | Qraft Academy",
    description: "A hands-on tech apprenticeship program where you build skills, ship products, and launch companies.",
  },
};

export default function TechMastersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
