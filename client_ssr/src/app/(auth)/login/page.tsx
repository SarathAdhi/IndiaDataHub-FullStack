import { fetchUser } from "@/lib/fetch-user";
import { redirect } from "next/navigation";
import LoginForm from "./_components/LoginForm";

const LoginPage = async () => {
  const user = await fetchUser();

  if (user) redirect("/dashboard");

  return (
    <div className="flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
