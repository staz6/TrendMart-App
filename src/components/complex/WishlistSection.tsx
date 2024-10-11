import React from "react";
import productImage from "../../assets/productImage.png";
import { useWishlist } from "../Context/WishlistContext";
import ProductCard from "../compound/ProductCard";
import Button from "../shared/Button";

const WishlistSection: React.FC = () => {
  const { wishlistItems, moveAllToCart } = useWishlist();
  return (
    <div data-testid="WishlistSection">
      <div className="mt-16 font-poppins items-center flex justify-between text-black">
        <h1 className="text-lg font-medium">
          Wishlist ({wishlistItems.length})
        </h1>
        <Button
          onClick={moveAllToCart}
          icon=""
          description="Move All To Bag"
          className="text-black hover:bg-black hover:text-white transition-all duration-200 border rounded-[0.25rem] border-black px-8 py-3 font-medium font-poppins"
        />
      </div>
      <div className="justify-center sm:justify-normal  margin-auto  mt-14 mb-20 flex flex-wrap gap-5 xl:gap-8">
        {wishlistItems.map((item, index) => (
          <ProductCard
            id={item.id}
            key={index}
            image={productImage}
            title={item.title}
            price={item.price}
            discount={item.discount ?? 0}
            rating={item.rating ?? 0}
            New={item.New}
            onAddToCart={() => console.log("Added to cart")}
            onWishlist={() => console.log("Added to wishlist")}
            onViewDetails={() => console.log("View details")}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistSection;
