import { getUser } from "../lucia";
import { redirect } from "next/navigation";

async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  console.log(user);
  return (
    <div>
      Profile Page
    </div>
  )
}

export default ProfilePage