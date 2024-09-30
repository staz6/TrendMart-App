import React, { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { GoPaperAirplane } from "react-icons/go";
import googleIcon from "../../assets/GooglePlayIcon.svg";
import appstoreIcon from "../../assets/AppstoreIcon.svg";
import qrCode from "../../assets/Qrcode.svg";
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

const footerSections = [
  {
    title: "Exclusive",
    links: [
      { name: "Subscribe", href: "#" },
      { name: "Get 10% off your first order", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.", href: "#" },
      { name: "exclusive@gmail.com", href: "mailto:exclusive@gmail.com" },
      { name: "+88015-88888-9999", href: "tel:+8801588888999" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "My Account", href: "#" },
      { name: "Login / Register", href: "#" },
      { name: "Cart", href: "#" },
      { name: "Wishlist", href: "#" },
      { name: "Shop", href: "#" },
    ],
  },
  {
    title: "Quick Link",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms Of Use", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];
const socialLinks = [
  { href: "#", icon: <RiFacebookLine size={24} /> },
  { href: "#", icon: <FiTwitter size={24} /> },
  { href: "#", icon: <IoLogoInstagram size={28} /> },
  { href: "#", icon: <RiLinkedinLine size={26} /> },
];
const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <footer className="bg-text2 pt-16 pb-5 ">
      <div className="text-white xl:px-28">
        <div className="md:grid-cols-3 lg:flex grid grid-cols-2 pl-5 sm:pl-20 lg:p-0  sm:justify-center  2xl:gap-20 xl:gap-12 gap-8">
          {footerSections.map((item, index) => (
            <div data-testid="FooterLinks" key={index}>
              <h2
                className={`${index == 0 ? "text-xl font-semibold" : "text-base font-medium"}  mb-4 font-inter`}
              >
                {item.title}
              </h2>
              <ul className="font-poppins ">
                {item.links.map((link, inner_index) => (
                  <li
                    className={`mb-4 text-text transition-all duration-200 hover:text-text1  ${index == 0 && inner_index == 0 ? "text-md font-medium" : "text-sm font-[300]"}`}
                    key={inner_index}
                  >
                    <a
                      href={link.href}
                      dangerouslySetInnerHTML={{ __html: link.name }}
                    />
                  </li>
                ))}
              </ul>
              {index == 0 && (
                <form className="flex items-center pr-3 border-2 rounded-sm border-white">
                  <Input
                    onClick={() => {}}
                    type="email"
                    onChange={setEmail}
                    value={email}
                    placeholder="Enter your email"
                    className="px-4 py-2 w-[85%] md:w-[90%] bg-transparent placeholder:text-white placeholder:text-lg placeholder:text-opacity-40 text-white rounded-l-md outline-none"
                  />

                  <Button
                    className="hover:text-text1 transition-all duration-200"
                    onClick={() => {}}
                    icon={<GoPaperAirplane size={24} />}
                    testid=""
                    description=""
                  />
                </form>
              )}
            </div>
          ))}
          <div data-testid="FooterAppColumn">
            <h2 className="font-semibold mb-4 font-inter">Download App</h2>
            <p className="mb-3 text-white text-opacity-70 font-[300] text-sm font-poppins ">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center mb-5 ">
              <img src={qrCode} alt="QR Code" />
              <div className="ml-4">
                <img
                  src={googleIcon}
                  alt="Google Play Store"
                  className="mb-2"
                />
                <img src={appstoreIcon} alt="App Store" />
              </div>
            </div>
            <div className="flex space-x-4 items-center ">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-text1 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-white text-opacity-30 text-md border-t border-white border-opacity-10 pt-4">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
