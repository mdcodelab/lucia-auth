//npm i @lucia-auth/adapter-sqlite

import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "@/db";
import {Lucia} from "lucia";



const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      name: "celliott-auth-cookie",
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
});