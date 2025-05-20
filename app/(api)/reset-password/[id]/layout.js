const BACKEND_BASE = process.env.NEXT_PUBLIC_BACKEND_URI;
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Layout({ children, params }) {
  const { id } = await params;
  if (!id) redirect("/");
  try {
    const res = await fetch(
      `${BACKEND_BASE}/api/verify/allow/ForResetPassword/${id}`,
      {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (!data.success) {
      redirect("/");
    }
  } catch (err) {
    redirect("/");
  }

  return <>{children}</>;
}
