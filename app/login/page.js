import LoginForm from "@/components/login/LoginForm";

export const metadata = {
  title: "Login",
  description: "The official khanaKhazana website.",
};

export default function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <LoginForm />
    </section>
  );
}
