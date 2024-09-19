import { fetchUser } from "@/lib/fetch-user";
import { redirect } from "next/navigation";
import RegisterForm from "./_components/RegisterForm";

const RegisterPage = async () => {
  const user = await fetchUser();

  if (user) redirect("/dashboard");

  return (
    <div className="flex items-center justify-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
