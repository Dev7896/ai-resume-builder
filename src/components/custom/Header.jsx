import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton , useUser } from "@clerk/clerk-react";
export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="p-3 px-12 flex justify-between shadow-md">
      <img
        src={"../../../public/logo.svg"}
        alt="logo"
        width={100}
        height={100}
      />
      {isSignedIn ? (
        <div className="flex gap-4 items-center">
          <Link to={"/dashboared"}>
            <Button variant='outline'>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/signup"}>
          <Button>Get started</Button>
        </Link>
      )}
    </div>
  );
}
