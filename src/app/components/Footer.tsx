import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppleLogo from "@/app/icons/apple-logo.png";
import PlayStoreLogo from "@/app//icons/play-logo.png";
import InstagramLogo from "@/app//icons/insta-logo.png";
import FacebookLogo from "@/app//icons/facebook-logo.png";
import TwitterLogo from "@/app//icons/twitter-logo.png";
import VisaLogo from "@/app//icons/visa-logo.png";
import MasterLogo from "@/app//icons/master-logo.png";
import PaypalLogo from "@/app//icons/paypal-logo.png";
import CustomerSupportImage from "@/app//icons/customer-support.png";
import Headphones from "@/app//icons/headphones.png";
import Send from "@/app//icons/send.png";
import FAQ from "@/app//icons/faq.png";
import Rating from "@/app//icons/rating.png";

const companyLinka = [
  {
    name: "about us",
    link: "/",
  },
  {
    name: "careers",
    link: "/",
  },
  {
    name: "press",
    link: "/",
  },
];
const supporLinks = [
  {
    name: "manage booking",
    link: "/",
  },
  {
    name: "contact",
    link: "/",
  },
  {
    name: "legal notice",
    link: "/",
  },
  {
    name: "privacy policy",
    link: "/",
  },
  {
    name: "terms & conditions",
    link: "/",
  },
];
const becomePartnerLinks = [
  {
    name: "affiliate programs",
    link: "/",
  },
  {
    name: "travel agencies",
    link: "/",
  },
  {
    name: "bloggers",
    link: "/",
  },
  {
    name: "get the API",
    link: "/",
  },
];

const Footer = () => {
  return (
    <>
      <div className="p-4 bg-gray-100 mt-4">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">Customer Support</h3>
          <div className="flex items-center justify-center gap-1 mt-2 flex-wrap">
            <p>Don’t hesitate to contact! We offer awesome service</p>
            <Image src={Rating} alt="call" className="mt-1"></Image>
           
            <p>rated by our customers</p>
          </div>

          <div className="grid grid-cols-12 gap-6 my-4">
            <div className="col-span-12 md:col-span-6">
              <Image src={CustomerSupportImage} alt="customer-support"></Image>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col gap-6 items-center justify-center">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-2">
                  <Image src={Headphones} alt="call" className="mt-1"></Image>
                  <div>
                    <p className="font-normal">Toll Free Customer Care</p>
                    <a
                      href="tel:+(1) 123 456 8974 "
                      className="text-primary text-xs"
                    >
                      +(1) 123 456 8974{" "}
                    </a>
                    <p className="text-xs">
                      Available hours in France: 07:00 to 22:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    src={Send}
                    alt="send"
                    width={18}
                    className="mt-1"
                  ></Image>
                  <div>
                    <p className="font-normal">Send-us an email</p>
                    <a
                      href="mailto:info@ferrytickets.com"
                      className="text-primary text-xs"
                    >
                      info@ferrytickets.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Image
                    src={FAQ}
                    alt="send"
                    width={18}
                    className="mt-1"
                  ></Image>
                  <div>
                    <p className="font-normal">Frequently Asked Questions</p>
                    <a href="/" className="text-primary text-xs">
                      Find the answers to your questions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary p-2 pt-6 ">
        <div className="max-w-screen-xl mx-auto">
          <Link href={"/"} className="log flex items-center gap-2">
            <h1 className="text-3xl font-bold text-white">ferryengine</h1>
            <div className="logo-icon bg-yellow w-[40px] h-[40px]"></div>
          </Link>
          <div className="grid grid-cols-12 text-white mt-5 gap-x-5 gap-y-10 md:gap-5">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
              <h3>Company</h3>
              {companyLinka.map((item) => (
                <Link
                  href={item.link}
                  key={item.link + item.name}
                  className="hover:underline font-extralight capitalize text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
              <h3>Support</h3>
              {supporLinks.map((item) => (
                <Link
                  href={item.link}
                  key={item.link + item.name}
                  className="hover:underline font-extralight capitalize text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
              <h3>Become a partner</h3>
              {becomePartnerLinks.map((item) => (
                <Link
                  href={item.link}
                  key={item.link + item.name}
                  className="hover:underline font-extralight capitalize text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 flex flex-col gap-3">
              <h3>Get update and special offers</h3>
              <form className="bg-white p-3  rounded flex  ">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="flex outline-none text-black flex-1"
                />
                <button className="text-primary text-sm" type="submit">
                  Subscribe
                </button>
              </form>

              <div className="w-full flex items-center">
                <div className="flex-1">
                  <h6>Get our Apps</h6>
                  <div className="flex items-ceneter gap-3">
                    <Image src={AppleLogo} alt="apple-logo"></Image>
                    <Image src={PlayStoreLogo} alt="play-store-logo"></Image>
                  </div>
                </div>
                <div className="flex-1">
                  <h6>Follow-us</h6>
                  <div className="flex items-ceneter gap-3">
                    <Image src={InstagramLogo} alt="apple-logo"></Image>
                    <Image src={FacebookLogo} alt="play-store-logo"></Image>
                    <Image src={TwitterLogo} alt="play-store-logo"></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 " />
          <div className="text-white mb-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>&copy; 2023, Ferryengine.com, All rights reserved</p>
            <div className="flex items-center gap-2 ">
              <Image src={VisaLogo} alt="visa-logo" />
              <Image src={MasterLogo} alt="master-logo" />
              <Image src={PaypalLogo} alt="paypal-logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
