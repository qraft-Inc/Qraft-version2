import { type Metadata } from "next";

const title = "CMS Development & Digital Magazine Platforms | CourseMasters by Qraft Academy";
const description =
  "CourseMasters develops digital magazines, publication archives, resource libraries and CMS platforms for organisations across Africa. Explore packages from USD 1,500.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coursemasters/cms-development" },
  openGraph: {
    title,
    description,
    url: "/coursemasters/cms-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function CmsDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
