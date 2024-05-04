"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HandleAuth() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  function signOut() {
    setAuth(null);
    router.push("/");
  }
  return (
    <>
      {auth ? (
        <button onClick={signOut}>{auth?.firstName} | LogOut</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
}
