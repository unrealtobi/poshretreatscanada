import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaTelegram } from "react-icons/fa6";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="relative text-white bg-[url('/footerpic.jpeg')] bg-no-repeat bg-center w-full md:h-[500px] sm:h-[550px] h-[600px] bg-[length:200%_100%] sm:bg-[length:100%_100%] md:bg-[length:100%_auto] pb-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex text-center flex-col items-center h-full">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl sm:text-4xl mt-16 px-20 sm:px-60 md:px-0 font-raleway font-semibold">
          Start Your Journey with Us
        </h2>

        {/* Description */}
        <p className="absolute md:flex text-center px-8 md:px-0 text-gray-200 text-sm md:text-sm sm:bottom-36  md:bottom-24 bottom-28 font-roboto">
          Have questions or ready to book? Reach out to plan your next
          unforgettable adventure.
          <br /> Posh Retreats is proudly affiliated with TravelOnly Inc., one
          of Canada’s leading travel agencies with over 45 years of experience
          and industry leadership.
        </p>

        {/* Logos (ABTA & ATOL) */}
        {/* <div className="absolute flex md:bottom-10 bottom-16 gap-x-6">
          <a
            href="https://www.abta.com/abta-member-search/results?search=P7133"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/abta.png"
              alt="ABTA Travel Logo"
              width={100}
              height={40}
              className="h-10 md:h-12 bg-customBg py-2 px-2 md:w-24 rounded-md cursor-pointer"
            />
          </a>

          <a
            href="https://www.caa.co.uk/atol-protection/check-an-atol/search-atol-holders/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/atol.png"
              alt="ATOL Protection Logo"
              width={100}
              height={40}
              className="h-10 md:h-12 bg-customBg py-2 md:w-20 px-4 rounded-md cursor-pointer"
            />
          </a>
        </div> */}

        {/* Footer Text */}
        <h1 className="md:absolute md:bottom-52 md:left-0 md:right-0 absolute bottom-72 left-0 right-0 text-center font-bold text-6xl sm:text-7xl md:text-9xl text-white font-raleway tracking-widest">
          POSH RETREATS
        </h1>

        {/* Social Icons */}
        <div className="md:absolute md:bottom-0 bottom-6 absolute flex items-center gap-4">
          <a
            href="https://www.tiktok.com/@poshretreatsna"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/poshretreats_na?igsh=cGt3dHpoYXUxZGF2&utm_source=qr"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/posh_retreats_a?s=21&t=X9eCifkrm07k0kzt6mXLUA"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/share/g/1BioGjn7PZ/?mibextid=wwXIfr"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl"
          >
            <RiFacebookFill />
          </a>
        </div>

        {/* Terms & Conditions Link */}
        <div className="mt-7 text-sm md:translate-y-44 translate-y-36 sm:translate-y-28 text-gray-300">
          <a
            href="https://www.poshretreats.ca/termsandconditions"
            className="underline hover:text-white transition duration-300"
          >
            Terms & Conditions
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.poshretreats.ca/privacy-policy"
            className="underline hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
