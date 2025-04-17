"use client";
import React from "react";
import FilterIcon from "@/app/icons/filter-icon.png";
import SortIcon from "@/app/icons/sort-icon.png";
import SearchIcon from "@/app/icons/search-icon.png";
import GlobalIcon from "@/app/icons/global-icon.png";
import Image from "next/image";
import Link from "next/link";
import FerryOperator, { FerryOperatorProps } from "@/app/components/FerryOperator";
import BlueStartFerries from "@/app/icons/blue-star-ferries.png";
import Seajets from "@/app/icons/seajets.png";
import Anek from "@/app/icons/anek.png";
import Italy from "@/app/icons/italy.png";
import Greece from "@/app/icons/greece.png";
import { useState } from "react";
import { Filters } from "./components/Filters";

const data : FerryOperatorProps[]= [
  {
    logo: BlueStartFerries,
    name: "Blue Star Ferries",
    rating: {
      customers: "1342",
    },
    operatesIn: [
      {
        name: "Greece",
        flag: Greece,
      },
    ],
    vesselNumber: "8",
    ferryTypes: ["8 Normal"],
    popularVesels: ["Blue Start Delos", "Popular Star Naxos"],
    description:
      "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star ...Adriatic and Ionian Sea between Greece and Italy. Later on, from 1980 until 2000 the company developed rapidly and started bringing into action ferries both in Greece and abroad.",
  },
  {
    logo: Seajets,
    name: "Seajets",
    rating: {
      
      customers: "2467",
    },
    operatesIn: [
      {
        name: "Greece",
        flag: Greece,
      },
    ],
    vesselNumber: "17",
    ferryTypes: ["10 normal", "and 7 high speed ferries"],
    popularVesels: ["World champion jet", "Seajet 2"],
    description:
      "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. The company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion), other parts of the mainland (Thessaloniki, Kavala, Peloponnese) and ...Crete (Rethymno and Heraklion) to the islands of the Cyclades (Mykonos, Santorini, Paros, Naxos and more), the Sporades and the Northern Aegean Islands. The timetables are renewed every year before the tourist season and the connections are available on a daily basis.",
  },
  {
    logo: Anek,
    name: "Anek-SuperFast",
    rating: {
     
      customers: "667",
    },
    operatesIn: [
      {
        name: "Greece",
        flag: Greece,
      },
      {
        name: "Italy",
        flag: Italy,
      },
    ],
    vesselNumber: "6",
    ferryTypes: ["Normal Ferries"],
    popularVesels: ["SuperFast XII", "Superfast XI"],
    description:
      "Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology.The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and ...Igoumenitsa).Anek-Superfast uses 6 ferries of various sizes in total that can carry from 900 to 2200 passengers, depending on the vessel. Their speed also varies, from 21 to 31 knots. All of them have garages for cars and motorbikes, with the capacity to carry from 170 to 900 vehicles per vessel.The ferries offer many facilities, from restaurants and cafe-bars to shops and play areas for children. Some of them also provide additional entertainment facilities. Moreover, various types of cabins and seats are available, as well as special cabins and kennels for pets.",
  },
];

export default function Home() {
  const [showFilters, setShowFilters] = useState(true);


  return (
    <section>
      <div className="text-xs">
        <Link href="/" className="text-primary">
          Ferrytickets
        </Link>{" "}
        &gt; <Link href={"/"}>Operators</Link>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <h1 className="font-bold text-xl">Ferry operators</h1>
        <button className="bg-primary hidden md:block p-2 px-6 text-sm text-white rounded-lg border border-white active:border-yellow border-2  ">
          &gt; &nbsp; Book your tickets
        </button>
      </div>
      <p className="font-light text-sm mt-3">
        Discover the <span className="font-semibold ">57 ferry operators</span>{" "}
        we work with
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex -items-center gap-3">
          <button
            className="border border-gray  font-light rounded-lg  text-xs p-2 flex items-center gap-2 "
            onClick={() => setShowFilters(!showFilters)}
          >
            <Image src={FilterIcon} alt="filters-icons" width={17} />
            Filters
          </button>
          <div
            className="border border-gray font-light rounded-lg text-xs p-2 flex items-center gap-2 "
           
          >
            <Image src={SortIcon} alt="filters-icons" width={17} />
            Sort by:
            <select
             
              name="sortby"
              id="sortby"
              className="outline-none"
            >
              <option value={"reviews"}>Reviews</option>
              <option value={"latest"}>Latest</option>
              <option value="cheapest">Cheapest</option>
            </select>
          </div>
          <button className="border border-gray  font-light rounded-lg  text-xs p-2 hidden md:flex items-center gap-2  ">
            <Image src={SearchIcon} alt="search-icons" width={17} />
            Search
          </button>
        </div>
        <button className="border border-gray  rounded-lg p-2 items-center gap-3 hidden md:flex  ">
          <Image src={GlobalIcon} alt="global-icon" />
          <p className="text-xs text-primary ">Live Map View</p>
        </button>
      </div>

      <div className="mt-2 grid grid-cols-12 gap-3">
        <div
          className={`col-span-12  lg:col-span-3 ${
            showFilters ? "block" : "hidden"
          } bg-light-2`}
        >
        <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>

        <div className={`col-span-12 lg:${showFilters ? 'col-span-9':'col-span-12'}   flex flex-col gap-3`}>
          {data.map((item:FerryOperatorProps, i) => {
            return <FerryOperator logo={item.logo} description={item.description} ferryTypes={item.ferryTypes} vesselNumber={item.vesselNumber} popularVesels={item.popularVesels} rating={item.rating} operatesIn={item.operatesIn} name={item.name} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}