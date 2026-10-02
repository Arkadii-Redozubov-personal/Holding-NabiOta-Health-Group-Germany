import React from "react";
import { NewsPageComponent } from "@/components/pages/NewsPageComponent";

export const metadata = {
  title: "Latest News & Updates | NabiOta® Health Group Germany",
  description:
    "Stay informed about our latest achievements, innovations, events and important updates from NabiOta Health Group Germany.",
};

export default function NewsPage() {
  return <NewsPageComponent locale="de" />;
}
