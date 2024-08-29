import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppStore } from "@/store";
import { LogInIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user, logout } = useAppStore((state) => state);

  return (
    <nav className="p-4 h-14 w-full bg-primary text-primary-foreground flex items-center justify-between">
      <div>
        <Link to="/dashboard">
          <img src="/logo.svg" className="h-8" />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <a href="/">Database</a>

        <a href="/about">Calendar</a>

        <a href="/contact">Help</a>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" className="size-8 rounded-full">
                <img
                  className="rounded-full"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={logout} asChild>
                <Button
                  size="sm"
                  variant="destructive"
                  className="!outline-none w-full hover:!bg-destructive hover:!text-destructive-foreground"
                >
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button size="sm" variant="secondary">
            <LogInIcon />
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
