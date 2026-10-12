import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import { AdminStationeryPanel } from "@/components/admin/AdminStationeryPanel";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <AdminStationeryPanel userEmail={session.email} />;
}
