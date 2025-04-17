"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import LeftArrow from "@/app/icons/left-arrow.png";
import Rating from "@/app/icons/ferry-ratings.png";
import Link from "next/link";

export type FerryOperatorProps = {
 
    logo: StaticImageData;
    name: string;
    rating: {
      customers: number|string;
    };
    operatesIn: {
      flag: StaticImageData;
      name: string;
    }[];
    vesselNumber: number|string;
    ferryTypes: string[];
    popularVesels: string[];
    description: string;
 
};

const FerryOperator = ({ name, rating, operatesIn, vesselNumber, ferryTypes, popularVesels, description, logo }:FerryOperatorProps) => {
 
  return (
    <div className="border border-gray  rounded-lg overflow-hidden ">
      <div className="p-2 flex flex-col md:flex-row md:items-center justify-between gap-2 bg-light-3">
        <Image src={logo} alt="opertor-logo"></Image>
        <div>
          <h3 className="font-bold md:text-end">{name}</h3>
          <div className="flex items-center gap-2">
          {/* use Rating component in realcase scenario */}
            <Image src={Rating} alt="rating" width={70}/> 
            <p className="text-xs">
              by{" "}
              <span className="font-semibold">
                {rating.customers} Customers
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-2 grid grid-cols-12 gap-3 bg-light-2">
        <div className="col-span-12 lg:col-span-3">
          <div className="flex flex-col gap-3">
            <div>
              <p> Operates in</p>
              <div className="flex items-cneter gap-2">
                {operatesIn.map((country, i) => (
                  <div className="flex items-center gap-1" key={i}>
                    <Image src={country.flag} alt="greece" />
                    <p className="text-sm">{country.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div>
                <p>
                  <span className="font-normal">Vessels Number:</span>{" "}
                  {vesselNumber}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-normal">Ferry Types:</span>{" "}
                  {ferryTypes.map((ferry) => ferry + " ")}
                </p>
              </div>
            </div>
            <div>
              <p className="font-normal">Popular Vessels</p>

              <div>
                <p className="text-primary">
                  {popularVesels.map((popular) => popular + " ")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  lg:col-span-9 flex flex-col justify-between">
          <p className="text-sm">{description}</p>
          <div>
          <hr className="my-2" />
          <div className="flex justify-end">
            <Link
              href={"/"}
              className="text-primary flex items-center gap-2 font-normal hover:opacity-80 transition-all duration-200"
            >
              More about Blue Star
              <Image src={LeftArrow} alt="left-arrow" />
            </Link>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default FerryOperator;
