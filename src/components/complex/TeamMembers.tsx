import React from "react";
import { FaInstagram } from "react-icons/fa";
import Image1 from "../../assets/TomCruise.svg";
import Image2 from "../../assets/EmmaWatson.svg";
import Image3 from "../../assets/WillSmith.svg";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
const TeamMembers: React.FC = () => {
  const members = [
    {
      name: "Tom Cruise",
      title: "Founder & Chairman",
      image: Image1,
    },
    {
      name: "Emma Watson",
      title: "Managing Director",
      image: Image2,
    },
    {
      name: "Will Smith",
      title: "Product Designer",
      image: Image3,
    },
    {
      name: "Tom Cruise",
      title: "Founder & Chairman",
      image: Image1,
    },
    {
      name: "Emma Watson",
      title: "Managing Director",
      image: Image2,
    },
    {
      name: "Will Smith",
      title: "Product Designer",
      image: Image3,
    },
  ];

  return (
    <>
      <div
        data-testid="TeamMembersSection"
        className="md:w-[45rem] lg:w-[50rem] xl:w-[62rem] m-auto team_member mb-10"
      >
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet TeamMemberSliderBullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active ActiveTeamMemberSliderBullet",
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {members.map((member, index) => (
            <SwiperSlide className="flex justify-center">
              <div
                key={index}
                className="flex flex-col lg:w-64 xl:w-80 w-56 items-center  text-black"
              >
                <div className="w-full  h-fit">
                  <div className="bg-secondary w-full h-64 lg:h-80 xl:h-96 ">
                    <img
                      className="w-full h-full pt-8"
                      src={member.image}
                      alt=""
                    />
                  </div>
                  <h2 className="font-inter mt-5 font-medium text-3xl">
                    {member.name}
                  </h2>
                  <p className="font-poppins">{member.title}</p>
                  <div className="flex gap-2 mt-4">
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="hover:text-button2"
                    >
                      <CiTwitter size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="hover:text-button2"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="hover:text-button2"
                    >
                      <RiLinkedinLine size={20} />
                    </a>
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TeamMembers;
