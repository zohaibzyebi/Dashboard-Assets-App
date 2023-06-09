import React from "react";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const Topbar = () => {
  return (
    <React.Fragment>
      {/* Top bar => Desktop (Above 900px)  */}
      <div className="w-full hidden mdl:flex items-center justify-between py-[14px]">
        {/*=> Left  */}
        <div className="flex items-end justify-start gap-7">
          {/* User name + avatar + nav dropdown button*/}
          <div className="flex items-center justify-between gap-16 bg-mirage rounded-2xl p-2">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="w-[55px] h-[55px] flex items-center justify-center relative bg-iceberg rounded-full overflow-hidden text-[25px] text-black font-medium">
                JD
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="text-[15px] text-white font-medium">
                  John Doe
                </div>
                <div className="text-[12px] text-dustyGrey font-medium uppercase">
                  Lorem Ipsum
                </div>
              </div>
            </div>
            <div className="w-[38px] h-[38px] bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
              <ChevronDownIcon className="w-[20px] h-[20px] text-white" />
            </div>
          </div>
          {/* Tabs  */}
          <div className="flex items-end justify-start gap-7">
            <div
              className={`text-white text-[15px] font-medium pb-5 px-2 border-b-[3px] border-solid border-iceberg transition-all transition-duration-300 cursor-pointer`}
            >
              Dashboard
            </div>
            <div
              className={`text-white text-[15px] font-medium pb-5 px-2 border-b-[3px] border-solid border-onyx cursor-pointer`}
            >
              Assets
            </div>
          </div>
        </div>
        {/* => Right  */}
        <div className="flex justify-end items-center gap-5">
          {/* Search  */}
          <MagnifyingGlassIcon className="w-[25px] h-[25px] text-white cursor-pointer" />
          {/* Notification  */}
          <BellIcon className="w-[21px] h-[21px] text-white cursor-pointer" />
          {/* Add Asset Button  */}
          <div className="flex items-center justify-center gap-2 rounded-full bg-iceberg px-8 py-[14px] cursor-pointer">
            <div className="bg-onyx p-1 rounded-full flex items-center justify-center">
              <PlusIcon className="w-[13px] h-[13px] text-iceberg " />
            </div>
            <div className="text-sm font-medium text-onyx ">Add Asset</div>
          </div>
        </div>
      </div>
      {/* Top bar => Small screens (Below 900px) */}
      <div className="w-full pt-1 xs:pt-2 flex items-center justify-between mdl:hidden">
        {/* User name + avatar + nav dropdown button*/}
        <div className="flex  items-center justify-between gap-10 xs:gap-16 bg-mirage rounded-xl p-2">
          <div className="flex items-center justify-start gap-[10px]">
            <div className="w-[45px] h-[45px] flex items-center justify-center relative bg-iceberg rounded-full overflow-hidden text-[20px] text-black font-medium">
              JD
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-[14px] text-white font-medium">John Doe</div>
              <div className="text-[11px] text-dustyGrey font-medium uppercase">
                Lorem Ipsum
              </div>
            </div>
          </div>
          <div className="p-1 bg-onyx flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
            <ChevronDownIcon className="w-[17px] h-[17px] text-white" />
          </div>
        </div>
        {/* => Right  */}
        <div className="flex justify-end items-center gap-2 xs:gap-3">
          {/* Search  */}
          <MagnifyingGlassIcon className="w-[25px] h-[25px] text-white cursor-pointer" />
          {/* Notification  */}
          <BellIcon className="w-[21px] h-[21px] text-white cursor-pointer" />
          {/* Menu Icon */}
          <Bars3Icon className="w-[26px] h-[26px] text-white cursor-pointer" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
