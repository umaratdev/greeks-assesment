import React from "react";
import Image from "next/image";
import CloseIcon from "@/app/icons/close-icon.png";
import PinIcon from "@/app/icons/pin-icon.png";

type FilterProps = {
  showFilters: boolean;
  setShowFilters: (showFilters: boolean) => void;
}

export function Filters({showFilters, setShowFilters}:FilterProps) {
    return(
        <div className="border border-gray  rounded-lg bg-light">
        <div className="p-3">
          <div className="flex items-center justify-between">
            <h4>Filters</h4>
            <Image
              src={CloseIcon}
              alt="close-icon"
              onClick={() => setShowFilters(!showFilters)}
              className="cursor-pointer"
            />
          </div>
          <label htmlFor="operatingIn" className="text-xs">
            Operating In
          </label>
          <div className="border border-gray  w-full font-light rounded-lg  text-xs p-2 flex items-center gap-2">
            <Image src={PinIcon} alt="filters-icons" />

            <select
              name="operatingIn"
              id="operatingIn"
              className="outline-none flex-1 bg-transparent"
            >
              <option>Select a country</option>
              <option value={"paksitan"}>Pakistan</option>
              <option value={"france"}>France</option>
              <option value={"germany"}>Germany</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="p-3 flex flex-col gap-2">
          <label className="text-xs">Ferry types</label>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="normal"
            ></input>
            <label htmlFor="vehicle1" className="text-xs">
              Normal ferries
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="high-speed"
            ></input>
            <label htmlFor="vehicle2" className="text-xs">
              High-speed ferries
            </label>
          </div>
        </div>
      </div>
    )
}