import LoginForm from "@/components/login/LoginForm";
import { connectToDataBase } from "@/dbconnect/connector";

export const metadata = {
  title: "Login",
  description: "The official khanaKhazana website.",
};

export default async function Login() {
  await connectToDataBase();
  return (
    <section className="h-screen grid place-items-center">
      <LoginForm />
    </section>
  );
}
