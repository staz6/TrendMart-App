import React from "react";
import { Link } from "react-router-dom";
import OurStory from "../components/complex/OurStory";
import Analytics from "../components/complex/Analytics";
import TeamMembers from "../components/complex/TeamMembers";

const AboutUs: React.FC = () => {
  return (
    <div className="mt-10 " data-testid="PageDirectory">
      <h1 className="text-black text-opacity-50 pl-10 lg:pl-[5%] xl:pl-32">
        <Link to="/">Home</Link>
        <span> / </span>
        <span className="text-black">About</span>
      </h1>
      <OurStory />
      <Analytics />
      <TeamMembers />
    </div>
  );
};

export default AboutUs;
