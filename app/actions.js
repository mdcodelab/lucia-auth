"use server";
import prisma from "@/db";
//import bcrypt from "bcrypt";
import {Argon2id} from "oslo/password";
import { redirect } from "next/navigation";
import { lucia } from "./lucia"
import { cookies } from "next/headers";


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


  //const hashedPassword = await bcrypt.hash(password, 10); with bcrypt
  //with oslo:
  const argon2id = new Argon2id();
  const hashedPassword = await argon2id.hash(password);

  
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hashedPassword,
    },
  });
//create session for the user
  const session = await lucia.createSession(user.id, {});
  //create the cookie to store the session in the cookie 
  const sessionCookie = await lucia.createSessionCookie(session.id);
  //set next.js to make sure that the cookie is sent to the user's browser-give us the 
  //cookie to validate in http request
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attribute)
redirect("/profile");
  return user;
};


export const login = async (email, password) => {
const user = await prisma.user.findUnique({
    where: {
        email: email
    }
});

if (!user) {
  throw new Error("User with this email does not exists");
}

const argon2id = new Argon2id();
const passwordMatch = await argon2id.verify(user.hashedPassword, password);
if(!passwordMatch) {
throw new Error ("Invalid password.");
}

console.log("Password match", passwordMatch);

const session = await lucia.createSession(user.id, {});
const sessionCookie = await lucia.createSessionCookie(session.id);
cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attribute);
redirect("/profile");
}

    export const signOut = async () => {
  // Preia ID-ul sesiunii din cookies
  const sessionId = cookies().get(lucia.sessionCookieName)?.value || null;
  if (sessionId) {
    // Șterge sesiunea din baza de date
    await lucia.invalidateSession(sessionId);

    // Creează un cookie gol pentru a înlocui cel existent
    const sessionCookie = await lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attribute);
  }
  return redirect("/");
};
