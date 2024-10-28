import React, { useState, useCallback } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiMinus, HiPlus } from "react-icons/hi";
import Button from "../shared/Button";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonLoader from "../compound/SkeletonLoader";
import DeliveryReturnInfo from "../compound/DeliveryReturnInfo";
import { ProductType } from "../../Pages/Product";

type DetailedProductProps = {
  data: ProductType | undefined;
  isLoading: boolean;
  error: unknown;
};

const DetailedProduct: React.FC<DetailedProductProps> = ({
  data,
  isLoading,
  error,
}) => {
  const { ProductType } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const { addToWishlist, wishlistItems, removeFromWishlist } = useWishlist();

  const increaseQuantity = useCallback(
    () => setQuantity((prev) => prev + 1),
    [],
  );
  const decreaseQuantity = useCallback(
    () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)),
    [],
  );

  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedColor(event.target.value);
    },
    [],
  );

  const handleSizeChange = useCallback((size: string) => {
    setSelectedSize(size);
  }, []);

  const inWishlist = wishlistItems.find((item) => item.id === `${data?.id}`);

  if (error) {
    return (
      <p className="text-center text-2xl text-button2">Error Loading Product</p>
    );
  }

  return (
    <div className="font-poppins text-black max-w-lg mx-auto md:pl-6 xl:w-[29rem]">
      {isLoading ? (
        <SkeletonLoader>
          <div
            data-testid="ProductTitleSkeleton"
            className="w-80 h-10 rounded-3xl border bg-gray-300"
          />
        </SkeletonLoader>
      ) : (
        <h1 data-testid="ProductTitle" className="text-2xl font-semibold mb-2">
          {data?.title}
        </h1>
      )}

      {isLoading ? (
        <SkeletonLoader>
          <div className="flex items-center gap-3 my-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-5 rounded-3xl border bg-gray-300"
              />
            ))}
          </div>
        </SkeletonLoader>
      ) : (
        <div className="flex items-center gap-3 mb-2">
          <span className="text-button3 text-lg">★★★★☆</span>
          <span className="text-black text-opacity-50 text-sm">
            ({data?.rating.count} Reviews)
          </span>
          <span className="text-black text-opacity-50">|</span>
          <span className="text-button1 text-sm">In Stock</span>
        </div>
      )}

      {!data ? (
        <SkeletonLoader>
          <div className="bg-gray-300 h-6 w-20 rounded-2xl" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-10/12 h-6 mt-1 rounded-2xl bg-gray-300" />
          ))}
        </SkeletonLoader>
      ) : (
        <>
          <p data-testid="ProductPrice" className="text-2xl font-medium mb-4">
            $
            {ProductType == "FlashSalesProduct"
              ? (data.price * 0.65).toFixed(2)
              : data.price}
          </p>

          <p data-testid="ProductDescription" className="text-sm  max-w-96">
            {data?.description}
          </p>
        </>
      )}

      <hr className="border-t my-4 border-black" />

      <div className="mb-4 flex items-center gap-10">
        <h3>Colours:</h3>
        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="color"
              value="blue"
              checked={selectedColor === "blue"}
              onChange={handleColorChange}
              className="hidden peer"
            />
            <span className="w-5 h-5 bg-hoverbutton2 rounded-full  peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-black"></span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="color"
              value="red"
              checked={selectedColor === "red"}
              onChange={handleColorChange}
              className="hidden peer"
            />
            <span className="w-5 h-5 bg-hoverbutton1 rounded-full  peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-black"></span>
          </label>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-6">
        <h3>Size:</h3>
        <div className="flex gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <Button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`border px-3 py-1 rounded ${selectedSize === size ? "bg-red-500 text-white" : "bg-gray-100"}`}
              description=""
              icon=""
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      {data ? (
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            <Button
              testid="Dec_Qty"
              onClick={decreaseQuantity}
              className="w-10 h-10 hover:bg-button2 hover-text-white hover:border-button2 hover:text-white transition-all duration-200 border border-black border-opacity-50 flex justify-center items-center rounded-es rounded-tl"
              description=""
              icon=""
            >
              <HiMinus />
            </Button>

            <div className="h-10 w-10 lg:w-16 xl:w-20 text-center border-opacity-50 border-y flex items-center justify-center border-black">
              <span data-testid="Qty" className="text-lg">
                {quantity}
              </span>
            </div>

            <Button
              testid="Inc_Qty"
              onClick={increaseQuantity}
              className="w-10 h-10 hover:bg-button2 hover-text-white hover:border-button2 hover:text-white transition-all duration-200 border border-black border-opacity-50 flex justify-center items-center rounded-se rounded-ee"
              description=""
              icon={<HiPlus />}
            />
          </div>
          <Button
            onClick={() => {
              addToCart({
                title: data?.title,
                price:
                  ProductType === "FlashSalesProduct"
                    ? parseFloat((data?.price * 0.65).toFixed(2))
                    : data?.price,
                id: `${data.id}`,
                qty: quantity,
                image: data.image,
              });
              navigate("/Cart");
            }}
            className="bg-red-500 sm:text-base text-sm py-[0.65rem]  text-white px-6 xl:px-10 sm:py-2 rounded hover:bg-red-600 transition"
            description="Buy Now"
            icon={null}
          />

          {!inWishlist ? (
            <Button
              onClick={() =>
                addToWishlist({
                  id: `${data.id}`,
                  image: data.image,
                  title: data.title,
                  price: data.price,
                  discount: 0,
                  rating: data.rating.rate,
                  New: false,
                })
              }
              className="border border-black border-opacity-50  p-2 rounded hover:bg-button2 hover:border-button2 hover:text-white transition-all duration-200"
              description=""
              icon={<AiOutlineHeart size={24} />}
            />
          ) : (
            <Button
              onClick={() => removeFromWishlist(`${data.id}`)}
              className="p-2 border border-black border-opacity-50  rounded hover:bg-button2 hover:border-button2 transition-all duration-300 hover:text-white bg-white "
              icon={<IoTrashOutline size={24} />}
              description=""
            />
          )}
        </div>
      ) : (
        <SkeletonLoader>
          <div className="flex gap-3">
            <div className="bg-gray-300 h-10 rounded-md w-36" />
            <div className="bg-gray-300 h-10 rounded-md w-36" />
            <div className="bg-gray-300 h-10 rounded-md w-10" />
          </div>
        </SkeletonLoader>
      )}

      <DeliveryReturnInfo />
    </div>
  );
};

export default DetailedProduct;
