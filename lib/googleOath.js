import { Google } from "arctic";

//const google = new Google(clientId, clientSecret, redirectURI);
const google = new Google(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_URL + `/api/auth/google`
);
