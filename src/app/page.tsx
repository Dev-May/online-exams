import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  // If no session "not logged in"
  if (!session) {
    redirect("/auth/login");
  }

  const role = session.user.role;

  if (role === "student") {
    redirect("/student");
  } else if (role === "admin") {
    redirect("/admin");
  } else {
    // fallback if role is missing
    redirect("/auth/login");
  }
}
