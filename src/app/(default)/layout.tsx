import "../globals.css";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/layout/RootDocument";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata;

export default function DefaultLocaleRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <RootDocument locale="de">{children}</RootDocument>;
}
