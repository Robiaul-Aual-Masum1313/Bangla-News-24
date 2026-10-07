"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SInOutBtn() {
  const { data: session, isPending } = useSession();
const router = useRouter();
  if (isPending) {
    return <></>;
  }
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/sign-in')
        }
      }
    });
  };

  return (
    <div>
      {session?.user ? (
        <div className="flex gap-3.5 items-center justify-end">
          <Link href={'/profile'}><p>Welcome, {session.user?.name}</p></Link>
          <span>
            <button
              className="font-semibold text-white bg-red-700 px-3 py-1.5 rounded-sm"
              onClick={handleSignOut}
            >
              সাইন আউট
            </button>
          </span>
        </div>
      ) : (
        <div>
          <Link href={"/sign-in"}>
            <button className="px-3 py-1.5 ">সাইন ইন</button>{" "}
          </Link>
          <Link href={"/sign-up"}>
            {" "}
            <button className="font-semibold text-white bg-red-700 px-3 py-1.5 rounded-sm">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
