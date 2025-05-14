import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Layout({ children, params }) {
  const { id } = await params;
  console.log(id);
  if (!id) redirect("/");
  try {
    const res = await fetch(`http://localhost:8080/api/allow_otp/${id}`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();
    if (!data.success) {
      redirect("/");
    }
  } catch (err) {
    redirect("/");
  }

  return <>{children}</>;
}
