import { getServerSession } from "next-auth";

import Greetings from "@/app/(dashboardPages)/components/Greetings";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) return;

  return (
    <div>
      <Greetings name={session.user.name} />
    </div>
  );
}
