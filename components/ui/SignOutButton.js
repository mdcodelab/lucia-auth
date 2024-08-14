"use client";
import { Button } from "./button";
import { signOut } from "@/app/actions";

function SignOutButton({children}) {
  return (
    <Button onClick={()=>signOut()} className="w-[150px] mx-auto">{children}</Button>
  )
}

export default SignOutButton
