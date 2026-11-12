"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminStationeryPanel } from "@/components/admin/AdminStationeryPanel";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // In client-side mode
    const stored = localStorage.getItem("nabiota_admin_email");
    if (!stored) {
      router.push("/admin/login");
    } else {
      setUserEmail(stored);
    }
  }, [router]);

  if (!userEmail) {
    return null;
  }

  return <AdminStationeryPanel userEmail={userEmail} />;
}
