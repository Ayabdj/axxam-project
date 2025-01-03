import { useRef } from "react";
import {
  PiPlantLight,
  PiPianoKeysLight,
  PiSwimmingPoolLight,
  PiTentLight,
} from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import { LiaWaterSolid, LiaSkiingSolid } from "react-icons/lia";
import { IoSnowOutline} from "react-icons/io5";
import { TbGrill } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";
import { RiCaravanLine } from "react-icons/ri";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

function Filters() {
  const elementRef = useRef();

  const filters = [
    {
      name: "Pool",
      icon: <PiSwimmingPoolLight />,
    },
    {
      name: "Gym",
      icon: <CiDumbbell/>,
    },
    {
      name: "Beach View",
      icon: <LiaWaterSolid/>,
    },
    {
      name: "Arctic",
      icon: <IoSnowOutline/>,
    },
    {
      name: "Barbecue",
      icon: <TbGrill/>,
    },
    {
      name: "Office",
      icon: <SlScreenDesktop/>,
    },
    {
      name: "Camping",
      icon: <PiTentLight/>,
    },
    {
      name: "Ski",
      icon: <LiaSkiingSolid/>,
    },
    {
      name: "Caravan",
      icon: <RiCaravanLine/>,
    },
    {
      name: "Piano",
      icon: <PiPianoKeysLight/>,
    },
    {
      name: "Nature",
      icon: <PiPlantLight/>,
    },
  ];

  function slideRight(element) {
    element.scrollLeft += document.getElementById("filters").clientWidth - 50;
  }
  function slideLeft(element) {
    element.scrollLeft -= document.getElementById("filters").clientWidth - 50;
  }

  return (
    <div className="relative container mt-80 md:mt-48 mb-8" id="filters">
      <div
        className="w-full lg:w-[90%] mx-auto py-2 md:py-3 rounded-3xl flex justify-between align-middle overflow-x-auto shadow-md scrollbar-hide gap-5 md:gap-1 scroll-smooth border-[1px] border-gray-200 dark:border-gray-600 font-light text-[14px] md:text-[16px]"
        ref={elementRef}
      >
        {filters.map((element, index) => (
          <div
            key={index}
            className="lki min-w-[15%] lg:min-w-[12%] flex justify-center flex-col items-center gap-1 cursor-pointer group text-lg  hover:text-gray-400 dark:hover:text-gray-300"
          >
            {element.icon}
            <div className="relative text-sm md:text-base before:opacity-0 before:w-full before:h-[2px] before:bg-gray-400 dark:before:bg-gray-300 before:absolute before:bottom-[-12px] group-hover:before:opacity-70 text-nowrap group-hover:text-gray-400 dark:group-hover:text-gray-300 duration-150">
              {element.name}
            </div>
          </div>
        ))}
      </div>
      <HiOutlineChevronRight onClick={() => slideRight(elementRef.current)} size={24} className="hidden lg:block font-thin p-[2px] rounded-full absolute top-[50%] translate-y-[-50%] bg-white dark:bg-gray-700 right-20 cursor-pointer border-[1px] border-gray-300 dark:border-gray-500 hover:shadow-md"/>
      <HiOutlineChevronLeft onClick={() => slideLeft(elementRef.current)} size={24} className="hidden lg:block font-thin p-[2px] rounded-full absolute top-[50%] translate-y-[-50%] bg-white dark:bg-gray-700 left-20 cursor-pointer border-[1px] border-gray-300 dark:border-gray-500 hover:shadow-md"/>
    </div>
  );
}

export default Filters;
