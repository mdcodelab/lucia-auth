import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserAstronaut } from "react-icons/fa";
import { Button } from "./button";

function Navbar() {
  return (
    <nav className="w-full h-[5rem] bg-black flex items-center justify-end pr-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <FaUserAstronaut
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 
          transition-all dark:-rotate-90 dark:scale-0"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/auth/login">Login</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/">Sign Out</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default Navbar;
