import { ProductType } from "./Pages/Product";
import loudSpeakerImage from "../src/assets/PromoBanner.svg";
import ps5Image from "../src/assets/Ps5.svg";
import perfumeImage from "../src/assets/Perfume.svg";
import amazonSpeakerImage from "../src/assets/Speakers.svg";

export const mockProducts: ProductType[] = [
  {
    id: "Iphone14",
    title: "Apple iPhone 14 Pro Max",
    price: 1199,
    image:
      "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/02/iphone-14-pro.png",
    category: "electronics",
    description:
      "The latest iPhone with A16 Bionic chip, 48MP camera, and a stunning display.",
    rating: {
      rate: 4.8,
      count: 2000,
    },
  },
  {
    id: "LoudSpeaker",
    title: "JBJ LoudSpeaker",
    price: 1099,
    image: loudSpeakerImage,
    category: "electronics",
    description: "A high-performance speaker with sound of around 1000 db.",
    rating: {
      rate: 4.7,
      count: 1500,
    },
  },
  {
    id: "Ps5",
    title: "PlayStation 5",
    price: 499,
    image: ps5Image,
    category: "gaming",
    description:
      "Black and White version of the PS5, featuring lightning-fast loading and an immersive gaming experience.",
    rating: {
      rate: 4.9,
      count: 5000,
    },
  },
  {
    id: "GucciPerfume",
    title: "GUCCI INTENSE-OUD EDP",
    price: 230,
    image: perfumeImage,
    category: "fragrance",
    description:
      "An intense fragrance with a luxurious blend of oud, creating a rich and captivating scent.",
    rating: {
      rate: 4.6,
      count: 800,
    },
  },
  {
    id: "AmazonSpeaker",
    title: "Amazon Wireless Speaker",
    price: 99,
    image: amazonSpeakerImage,
    category: "electronics",
    description: "High-quality wireless speakers with immersive sound quality.",
    rating: {
      rate: 4.5,
      count: 1200,
    },
  },
];
