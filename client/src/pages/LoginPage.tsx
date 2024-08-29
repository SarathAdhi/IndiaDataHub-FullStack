import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageLayout from "@/layouts/PageLayout";
import axios from "@/lib/axios";
import { useAppStore } from "@/store";
import { LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { setUser } = useAppStore((state) => state);

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data } = await axios.post("/auth/login", {
      email,
      password,
    });

    setUser(data?.user);
    localStorage.setItem("token", data?.token);
  }

  return (
    <PageLayout className="items-center">
      <form
        onSubmit={handleFormSubmit}
        className="mt-20 w-full max-w-sm space-y-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="grid place-content-center bg-primary text-primary-foreground p-1 size-10 rounded-full">
            <LockKeyholeIcon />
          </div>

          <h5>Sign in</h5>
        </div>

        <div className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          <Button className="w-full" size="sm">
            Sign in
          </Button>

          <div className="text-sm underline text-blue-800">
            <Link to="/forgot-password">Forgot password?</Link>

            <Link to="/register" className="float-right">
              {"Don't have an account? Sign up"}
            </Link>
          </div>
        </div>
      </form>
    </PageLayout>
  );
};

export default LoginPage;
