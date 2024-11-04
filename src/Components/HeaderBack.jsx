import { unstable_noStore as noStore } from "next/cache";
import HeaderUser from "./HeaderUser";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const getUserByID = async ({ userID }) => {
  const response = await fetch(`${process.env.BASE_URL}/api/user/${userID}`, {
    cache: "no-store",
  });

  return await response.json();
};

async function HeaderBack() {
  const session = await getServerSession(authOptions);
  const user = await getUserByID({ userID: session.user.id });
  noStore();
  return <HeaderUser name={user.username} />;
}

export default HeaderBack;
