import React from "react";
import HeroSection from "../components/complex/HeroSection";
import ProductCard from "../components/compound/ProductCard";
import productImage from "../assets/productImage.png";
import ProductSlider from "../components/complex/ProductSlider";
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="xl:pl-32 px-10 justify-center sm:justify-normal  margin-auto lg:px-[5%] mt-20 mb-20 flex flex-wrap gap-10">
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />{" "}
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
      </div>
      <ProductSlider>
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />{" "}
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
      </ProductSlider>
    </>
  );
};

export default Home;
