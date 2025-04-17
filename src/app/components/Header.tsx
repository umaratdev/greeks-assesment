import React from "react";
import Headphones from "@/app/icons/headphones.png";
import USAFlag from "@/app/icons/usa-flag.png";
import SearchIcon from "@/app/icons/search-icon.png";
import ProfileIcon from "@/app/icons/profile-icon.png";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto lg:flex justify-between p-2 hidden">
        <div className="flex items-center justify-start gap-2 font-light">
          <Image src={Headphones} alt="call" />
          <a
            href="tel:+30 212 000 3006"
            className="text-primary hover:underline"
          >
            +30 212 000 3006.
          </a>
          <p>Available hours in France: 7:00 to 22:00</p>
        </div>
        <div className="flex items-center gap-7">
          <span className="flex gap-2 items-center cursor-pointer">
            <Image src={USAFlag} alt="usa-flag" style={{ height: 20 }}></Image>
            <p>English</p>
          </span>
          <span className="flex gap-2 items-center cursor-pointer">
            <p>&#8364; Euro</p>
          </span>

          <span className="flex gap-2 items-center cursor-pointer">
            <Image src={SearchIcon} alt="search"></Image>
          </span>
          <Link
            href={"/login"}
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image src={ProfileIcon} alt="search"></Image>
            <p>Login - Manage Bookings</p>
          </Link>
        </div>
      </div>
      <nav>
        <Navbar />
      </nav>
    </>
  );
};

export default Header;
