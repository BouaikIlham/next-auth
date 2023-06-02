"use client";
import Link from "next/link";
import { signIn , signOut} from "next-auth/react";
import { useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
      <Link className="text-sky-600 hover:text-sky-700" href={"/"}>
        Home
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={"/admin"}>
        Admin
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={"/user"}>
        User 
      </Link>
      <div className="ml-auto flex gap-2">
        <p className="text-sky-600">{session?.user?.name}</p>
        {session?.user ? (
          <>
            <button className="text-red-500" onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
