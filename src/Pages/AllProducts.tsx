import React from "react";
import { useParams } from "react-router-dom";
import FlashSalesSection from "../components/complex/FlashSalesSection";
import Wrapper from "../components/compound/Wrapper";
import BestSellingSection from "../components/complex/BestSellingSection";
import ExploreOurProducts from "./../components/complex/ExploreOurProducts";

const AllProducts: React.FC = () => {
  const { section } = useParams();

  return (
    <Wrapper>
      {section == "Flash Sales" && <FlashSalesSection slider={false} />}
      {section == "Best Selling Products" && (
        <BestSellingSection slider={false} />
      )}
      {section == "Explore Our Products" && (
        <ExploreOurProducts slider={false} />
      )}
    </Wrapper>
  );
};

export default AllProducts;
