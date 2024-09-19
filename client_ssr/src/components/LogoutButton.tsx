"use client";

import { deleteCookie } from "cookies-next";
import { Button } from "./ui/button";

const LogoutButton = () => {
  return (
    <Button
      size="sm"
      variant="destructive"
      className="!outline-none w-full hover:!bg-destructive hover:!text-destructive-foreground"
      onClick={() => {
        deleteCookie("bearer-token");
        window.location.reload();
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
