import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of engineering precision, ecommerce solutions, and premium web design by Aswin Binaj.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
