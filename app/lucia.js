//npm i @lucia-auth/adapter-sqlite

import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "@/db";
import {Lucia} from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



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


//variant I
// export const getUser = async () => {
//   // Preia ID-ul sesiunii din cookies
//   const sessionId = cookies().get(lucia.sessionCookieName)?.value || null;

//   if (!sessionId) {
//     return null; 
//   }

//   // Găsește sesiunea în baza de date
//   const session = await prisma.session.findUnique({
//     where: { id: sessionId },
//     include: { user: true }, // Include și utilizatorul legat de sesiune
//   });

//   if (!session || !session.user) {
//     return null; 
//   }

//   return session.user; 
// };

//variant II
export const getUser = async ()=> {
  // Preia ID-ul sesiunii din cookies
    const sessionId = cookies().get(lucia.sessionCookieName)?.value || null;
    if (!sessionId) {
      return null;
    }
//lucia gets information about user
    const {user, session}= await lucia.validateSession(sessionId)
    console.log(user); //user id
    if(session && session.fresh) {
        //refresh cookie
        const sessionCookie = await lucia.createSessionCookie(sessionId);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attribute);
    }
    if(!session) {
        const sessionCookie = await lucia.createBlankSessionCookie();
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attribute);
    }

    const currentUser = prisma.user.findUnique({
        where: {
            id: user.id
        }
    })
    console.log(currentUser);
    return currentUser;
    }

