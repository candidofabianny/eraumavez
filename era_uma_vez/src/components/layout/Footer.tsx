import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const Logo = "/assets/icons/logo.svg";
  const youtube = "/assets/images/social/youtube.svg";
  const facebook = "/assets/images/social/facebook.svg";
  const instagram = "/assets/images/social/instagram.svg";
  const twitter = "/assets/images/social/twitter.svg";
  const email = "/assets/images/social/email.svg";
  const phone = "/assets/images/social/Phone.svg";
  const mark = "/assets/images/social/mark.svg";
  const linkedin = "/assets/images/social/linkedin.svg";

  return (
    <footer className="w-full">
      <div className="flex flex-col gap-8 pl-[32px] mx-auto justify-between py-16 bg-[#9B90D3] md:flex-row md:pl-[48px] md:pr-[60px] lg:pr-[115px] lg:pl-[83px]">
        <div className="flex flex-col">
          
          <div className="hidden md:flex md:gap-5 md:mt-8">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="era uma vez icon"
                width={82}
                height={82}
              />
            </Link>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          <h3 className="block text-base lg:text-[1.5rem] font-semibold leading-[35px] text-[#9EA7AD] mb-2">
            Useful links
          </h3>
          <li className="foot_link text-sm md:text-base text-white">
            <Link href="/" className="hover:text-yellow1">
              About
            </Link>
          </li>
          <li className="foot_link text-sm md:text-base text-white">
            <Link href="/contact-us" className="hover:text-yellow1">
              Contact us
            </Link>
          </li>
          <li className="foot_link text-sm md:text-base text-white">
            <Link href="/" className="hover:text-yellow1">
              Products
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <h3 className="block text-base lg:text-[1.5rem] font-semibold leading-[35px] text-[#9EA7AD] mb-2">
            Contact us
          </h3>
          <li className="foot_link text-sm md:text-base text-white">
            <span className="flex gap-2">
              <Image
                src={email}
                alt="Email icon"
                width={20}
                height={20}
              />
              <Link href="/">support@spotlightapp.org</Link>
            </span>
          </li>

          <li className="foot_link text-sm md:text-base text-white">
            <span className="flex gap-2">
              <Image
                src={phone}
                alt="Phone icon"
                width={20}
                height={20}
              />
              <Link href="/">+1348059843257</Link>
            </span>
          </li>
        </ul>
        <div className="md:hidden">
          <h3 className="block text-base md:text-[1.5rem] font-semibold leading-[35px] text-[#9EA7AD] mb-4">
            Social Links
          </h3>
          <div className="flex gap-5 mt-5">
            <Link href="/" className="w-6 h-6 ">
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto gap-2 text-grey bg-[#6354AD] py-5">
      2023 ©️ Era uma vez
      </div>
    </footer>
  );
};

export default Footer;