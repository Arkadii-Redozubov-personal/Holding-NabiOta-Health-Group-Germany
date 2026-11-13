"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminStationeryPanel } from "@/components/admin/AdminStationeryPanel";
import { subscribeAdminSession } from "@/lib/firebase/auth";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeAdminSession((admin) => {
      if (!admin) {
        router.push("/admin/login");
      } else {
        setUserEmail(admin.email);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  if (!userEmail) {
    return null;
  }

  return <AdminStationeryPanel userEmail={userEmail} />;
}
