import { getUser } from "../lucia";

async function ProfilePage() {
  const user = await getUser();
  console.log(user);
  return (
    <div>
      Profile Page
    </div>
  )
}

export default ProfilePage