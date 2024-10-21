import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiMinus, HiPlus } from "react-icons/hi";
import Button from "../shared/Button";
import DeliveryIcon from "../../assets/icon-delivery.svg";
import ReturnIcon from "../../assets/Icon-return.svg";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { IoTrashOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const DetailedProduct: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const { addToWishlist, wishlistItems, removeFromWishlist } = useWishlist();
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  const title = "Havic HV G-92 Gamepad";
  const rating = 2;
  const price = 192.0;
  const description =
    " PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.";
  const inWishlist = wishlistItems.find((item) => item.id === id);

  return (
    <div className="font-poppins text-black max-w-lg mx-auto md:pl-6 xl:w-[29rem]">
      <h1 data-testid="ProductTitle" className="text-2xl font-semibold mb-2">
        {title}
      </h1>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-button3 text-lg">★★★★☆</span>
        <span className="text-black text-opacity-50 text-sm">
          (150 Reviews)
        </span>
        <span className="text-black text-opacity-50">|</span>
        <span className="text-button1 text-sm">In Stock</span>
      </div>
      <p data-testid="ProductPrice" className="text-2xl font-medium mb-4">
        ${price}
      </p>
      <p data-testid="ProductDescription" className="text-sm mb-4 max-w-96">
        {description}
      </p>
      <hr className="border-t mb-4 border-black" />

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
              description=""
              icon=""
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`border px-3 py-1 rounded ${
                selectedSize === size ? "bg-red-500 text-white" : "bg-gray-100"
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center ">
          <Button
            testid="Dec_Qty"
            onClick={decreaseQuantity}
            className="w-10  hover:bg-button2 hover-text-white hover:border-button2 hover:text-white transition-all duration-200 h-10 border  border-black border-opacity-50 flex justify-center items-center rounded-es rounded-tl"
            description=""
            icon=""
          >
            <span>
              <HiMinus />
            </span>
          </Button>

          <div className="h-10 w-10 lg:w-16 xl:w-20 text-center border-opacity-50 border-y flex items-center justify-center border-black">
            <span data-testid="Qty" className="text-lg  ">
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
          onClick={() =>
            addToCart({
              title: title,
              price: price,
              id: `${id}`,
              qty: quantity,
            })
          }
          icon={null}
          className="bg-red-500 text-white px-6 xl:px-10 py-2 rounded hover:bg-red-600 transition"
          description="Buy Now"
        />
        {!inWishlist ? (
          <>
            <Button
              onClick={() =>
                addToWishlist({
                  id: `${id}`,
                  image: "",
                  title,
                  price,
                  discount: 0,
                  rating: rating,
                  New: false,
                })
              }
              icon=""
              testid="AddWishlistBtn"
              className="border border-black border-opacity-50 p-2 rounded hover:bg-button2 hover:border-button2 hover:text-white transition-all duration-200 "
              description=""
            >
              <span>
                <AiOutlineHeart size={24} />
              </span>
            </Button>
          </>
        ) : (
          <Button
            testid="RemoveWishlistBtn"
            className="p-2  hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white bg-white rounded-full"
            onClick={() => removeFromWishlist(`${id}`)}
            icon={<IoTrashOutline size={24} />}
            description=""
          />
        )}
      </div>

      <div className="mt-10">
        <div className="border border-black border-opacity-50 pl-5 flex items-center gap-5 rounded-t py-4">
          <div>
            <img src={DeliveryIcon} alt="Free Delivery" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Free Delivery</h3>
            <p className="text-sm underline font-medium">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="border border-t-0  pl-5  border-black border-opacity-50 flex items-center gap-5 py-4 rounded-b">
          <div>
            <img src={ReturnIcon} alt="Return Delivery" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Return Delivery</h3>
            <p className="text-sm font-medium">
              Free 30 Days Delivery Returns.{" "}
              <span className="underline">Details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
