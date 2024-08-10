"use server";
import prisma from "@/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";


export const createUser = async (name, email, password, rePassword) => {
  if (password !== rePassword) {
    throw new Error("Passwords do not match");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }


  const hashedPassword = await bcrypt.hash(password, 10); 

  
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hashedPassword,
    },
  });
redirect("/profile");
  return user;
};
