import React from "react";
import Wrapper from "../components/compound/Wrapper";
import WishlistSection from "../components/complex/WishlistSection";
import JustForYouSection from "../components/complex/JustForYouSection";

const Wishlist: React.FC = () => {
  return (
    <Wrapper>
      <WishlistSection />
      <JustForYouSection />
    </Wrapper>
  );
};

export default Wishlist;
