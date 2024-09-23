import PromoBannerTimer from "../compound/PromoBannerTimer";
import bannerImage from "../../assets/speaker.svg";
import Button from "../shared/Button";

const PromoBanner: React.FC = () => {
  return (
    <section className="bg-black mb-10  text-white flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <div className="py-12 px-6 flex sm:ml-6 flex-col justify-center gap-6">
            <p className="text-button1 font-medium text-lg">Categories</p>
            <h1 className="sm:text-5xl text-3xl font-semibold font-inter tracking-widest leading-tight">
              Enhance Your
              <br />
              Music Experience
            </h1>

            <PromoBannerTimer />

            <Button
              className="capital w-fit mt-5 bg-button1 px-10 p-3 rounded-[0.25rem] hover:bg-transparent hover:text-text border transition-all duration-300 border-button1 "
              onClick={() => {}}
              icon=""
              testid=""
              description="Buy Now!"
            />
          </div>
        </div>

        <div className="flex overflow-hidden w-full md:mb-0 mb-10 md:bg-[url('../src/assets/bannerBackground.svg')] bg-center md:bg-[position:calc(50%-20px)_center] bg-cover justify-center items-center">
          <img
            src={bannerImage}
            alt="JBL Speaker"
            className="md:w-full sm:w-[80%]  object-contain px-12"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
