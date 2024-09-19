"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LockKeyholeIcon } from "lucide-react";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // toast.success("Password reset link sent to your email");
    toast.error("This feature is not implemented yet");
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="mt-20 w-full max-w-sm space-y-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="grid place-content-center bg-primary text-primary-foreground p-1 size-10 rounded-full">
            <LockKeyholeIcon />
          </div>

          <h5>Forgot Password</h5>
        </div>

        <div className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />

          <Button className="w-full" size="sm">
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
