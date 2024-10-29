import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/compound/Wrapper";

import ProfileLeftbar from "../components/complex/ProfileLeftbar";
import { useAuthContext } from "../components/Context/UserAuthContext";

const Account: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const userDetails = localStorage.getItem("userDetails");
      if (userDetails) {
        const parsedUserDetails = JSON.parse(userDetails);
        setUsername(parsedUserDetails?.name || null);
      }
    }
  }, [isAuthenticated]);
  return (
    <Wrapper>
      <div className="flex justify-between font-poppins my-16">
        <h1 className="text-text1 " data-testid="PageDirectory">
          <Link to="/">Home</Link>
          <span> / </span>
          <span className="text-black">About</span>
        </h1>
        {username && (
          <h1 className="text-black">
            Welcome ! <span className="text-button2">{username}</span>
          </h1>
        )}
      </div>
      <div
        data-testid="AccountMainbar"
        className="lg:grid grid-cols-12 font-poppins gap-8 text-black mb-10 w-full"
      >
        <ProfileLeftbar />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Account;
