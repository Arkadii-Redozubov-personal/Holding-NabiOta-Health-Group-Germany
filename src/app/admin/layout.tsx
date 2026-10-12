import "../globals.css";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/layout/RootDocument";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NabiOta Admin Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="de">{children}</RootDocument>;
}
