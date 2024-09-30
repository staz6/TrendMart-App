import React from "react";
import SectionTitle from "../compound/SectionTitle";
import Ps5Image from "../../assets/Ps5.svg";
import Perfume from "../../assets/Perfume.svg";
import Speakers from "../../assets/Speakers.svg";
import WormenCollection from "../../assets/WormenCollection.svg";
import NewArrivalsProductCard from "../compound/NewArrivalsProductCard";

const products = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 <br/> coming out on sale.",
    imageUrl: Ps5Image,
  },
  {
    title: "Women’s Collections",
    description: "Featured women collections that give you another vibe.",
    imageUrl: WormenCollection,
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers.",
    imageUrl: Speakers,
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE-OUD EDP",
    imageUrl: Perfume,
  },
];

const NewArrivalSection: React.FC = () => {
  return (
    <div className="mb-10" data-testid="NewArrivals">
      <SectionTitle title="Featured" />
      <h1 className="capital font-semibold tracking-wide text-3xl font-inter text-text2 my-5">
        New Arrival
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 ">
        <div className="col-span-1 md:col-span-1 ">
          <NewArrivalsProductCard
            onShopNow={() => {}}
            title={products[0].title}
            description={products[0].description}
            imageUrl={products[0].imageUrl}
          />
        </div>

        <div className="flex flex-col justify-between  ">
          <div className="md:mb-0 mb-6 ">
            <NewArrivalsProductCard
              onShopNow={() => {}}
              title={products[1].title}
              description={products[1].description}
              imageUrl={products[1].imageUrl}
            />
          </div>

          <div className="grid sm:grid-cols-2 sm:gap-4 gap-6">
            {products.slice(2).map((product, index) => (
              <NewArrivalsProductCard
                onShopNow={() => {}}
                key={index}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
