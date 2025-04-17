"use client";

import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";

import CloseIcon from "@/app/icons/close-icon.png";
import MenuIcon from "@/app/icons/menu.png";
import ProfileIcon from "@/app/icons/profile-icon.png";
import Image from "next/image";
import USAFlag from "@/app/icons/usa-flag.png";

const navLinks = [
  {
    name: "destinations",
    route: "/destinations",
  },
  {
    name: "companies",
    route: "/companies",
  },
  {
    name: "routes",
    route: "/routes",
  },
  {
    name: "reviews",
    route: "/reviews",
  },
  {
    name: "about us",
    route: "/about-us",
  },
  {
    name: "support",
    route: "/support",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl mx-auto p-2 py-4 flex items-center justify-between ">
        <Link href={"/"} className="log flex items-center gap-2">
          <h1 className="text-3xl font-bold text-white">ferryengine</h1>
          <div className="logo-icon bg-yellow w-[40px] h-[40px]"></div>
        </Link>
        <div className="lg:flex items-center gap-5 font-light hidden">
          {navLinks.map((navItem) => (
            <Link
              href={navItem.route}
              key={navItem.route}
              className="capitalize text-white"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-3 lg:hidden">
          <Link href={"/login"}>
            <Image src={ProfileIcon} alt="profile-icon" />
          </Link>
          <button onClick={toggleDrawer}>
            <Image src={MenuIcon} alt="menu-icon" width={20}></Image>
          </button>
        </div>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="flex flex-col justify-between min-h-screen">
          <div className="flex flex-col gap-3 p-4">
            <div className="flex justify-end">
              <Image src={CloseIcon} alt="close-icon" onClick={toggleDrawer} />
            </div>
            {navLinks.map((navItem) => (
              <Link
                href={navItem.route}
                key={navItem.route}
                className="capitalize hover:opacity-60 "
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 p-3">
            <span className="flex gap-2 items-center cursor-pointer">
              <Image
                src={USAFlag}
                alt="usa-flag"
                style={{ height: 20 }}
              ></Image>
              <p>English</p>
            </span>
            <span className="flex gap-2 items-center cursor-pointer">
              <p>&#8364; Euro</p>
            </span>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
