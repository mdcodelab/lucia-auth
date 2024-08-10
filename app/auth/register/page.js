
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@radix-ui/react-label";

function RegisterPage() {
  return (
    <div className="w-full items-center justify-center">
      <h1 className="text-center text-3xl font-semibold py-6">Welcome</h1>
      <form className="max-w-[350px] w-full shadow rounded-xl mx-auto">

        <div className="w-75 mb-2">
          <Label htmlFor="name" className="text-xl font-semibold">
            Name:
          </Label>
          <input
            type="text"
            name="name"
            className="w-full py-2 shadow rounded-md bordered
            border-slate-300 border-2"
            placeholder="Your name ..."
          ></input>
        </div>

        <div className="w-75 mb-2">
          <Label htmlFor="email" className="text-xl font-semibold">
            Email:
          </Label>
          <input
            type="email"
            name="email"
            className="w-full py-2 shadow rounded-md bordered
            border-slate-300 border-2"
            placeholder="Your email ..."
          ></input>
        </div>

        <div className="w-75 mb-2">
          <Label htmlFor="password" className="text-xl font-semibold">
            Password:
          </Label>
          <input
            type="password"
            name="password"
            className="w-full py-2 shadow rounded-md bordered
            border-slate-300 border-2"
            placeholder="Your password ..."
          ></input>
        </div>

        <div className="w-75 mb-2">
          <Label htmlFor="rePassword" className="text-xl font-semibold">
            Retype password:
          </Label>
          <input
            type="password"
            name="rePassword"
            className="w-full py-2 shadow rounded-md bordered
            border-slate-300 border-2"
            placeholder="Retype password ..."
          ></input>
        </div>

        <Button type="submit" className="w-full py-2 my-2">
          Create an account
        </Button>
      </form>
      <div
        className="flex mx-auto justify-between bordered border-black mt-2"
        style={{ width: "max-content" }}
      >
        <p className="mr-2">Already have an account?</p>
        <Link href="/auth/login">Login</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
