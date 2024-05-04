import RegistryForm from "@/components/register/RegistryForm";
export const metadata = {
  title: "Register",
  description: "The official khanaKhazana website.",
};

export default function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <RegistryForm />
    </section>
  );
}
