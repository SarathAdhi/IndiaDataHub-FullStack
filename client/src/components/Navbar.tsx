import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppStore } from "@/store";
import { LogInIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const { user, logout } = useAppStore((state) => state);

  return (
    <nav className="p-4 h-14 w-full bg-primary text-primary-foreground flex items-center justify-between">
      <div className="flex items-center gap-20">
        <Link to="/dashboard" className="flex-shrink-0">
          <img src="/logo.svg" className="h-8 flex-shrink-0" />
        </Link>

        <div className="relative flex items-center">
          <SearchIcon className="size-5 absolute left-2 top-2 text-foreground" />

          <Input
            className="pl-10 pr-24 h-9 w-96 text-foreground !outline-none !ring-0 !ring-offset-0"
            placeholder="Search for data and analytics"
          />

          <Button
            variant="outline"
            className="h-7 absolute right-1 text-gray-400 font-normal"
          >
            Search
          </Button>
        </div>
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
