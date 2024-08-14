import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserAstronaut } from "react-icons/fa";
import { Button } from "./button";
import { getUser } from "@/app/lucia";
import SignOutButton from "./SignOutButton";

async function Navbar() {
  const user = await getUser();
  if (!user) {
    return (
      <nav className="w-full h-[5rem] bg-black flex items-center justify-end pr-8">
        <Button className="text-md">
          <Link href="/auth/login" className="text-white text-md">
            Login
          </Link>
        </Button>
      </nav>
    );
  }

  return (
    <nav className="w-full h-[5rem] bg-black flex items-center justify-end pr-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-[2.5rem] text-lg"
            style={{ width: "max-content" }}
          >
            {user?.email}
            <span className="sr-only">User menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="text-center w-[200px]">
          <SignOutButton>Sign Out</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default Navbar;
