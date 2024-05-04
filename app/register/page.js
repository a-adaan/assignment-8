import RegistryForm from "@/components/register/RegistryForm";
import { connectToDataBase } from "@/dbconnect/connector";
export const metadata = {
  title: "Register",
  description: "The official khanaKhazana website.",
};

export default async function Register() {
  await connectToDataBase();
  return (
    <section className="h-screen grid place-items-center">
      <RegistryForm />
    </section>
  );
}
