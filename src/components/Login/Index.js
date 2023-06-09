import React, { useState } from "react";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Index = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleNextClick = () => {
    if (/\S+@\S+\.\S+/.test(email)) {
      // Email is valid, navigate to the next screen
      router.push("/verification");
    } else {
      // Email is invalid, show validation error
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div className="w-screen h-screen min-h-[700px] flex flex-col items-center justify-center bg-[url('/images/auth-bg.png')] bg-center bg-cover bg-no-repeat">
      <div className="w-full max-w-[1350px] flex items-center lg:items-end justify-center flex-col px-5 xxs:px-8 xs:px-12 py-4 ">
        <div className="w-full sm:w-[550px] bg-mirage px-5 xxs:px-8 xs:px-10 sm:px-20 py-12 xs:py-16 md:py-20 rounded-[20px] flex flex-col items-center justify-start gap-7 xs:gap-9 md:gap-11 lg:mr-20">
          {/* Titles + Login phrases */}
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-lato font-bold text-iceberg w-full text-left ">
            FNDR
          </h1>
          <div className="w-full flex flex-col items-start justify-start gap-[6px] md:gap-3">
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Let’s get you logged in
            </h2>
            <p className="text-xs md:text-sm text-left font-normal text-dustyGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Email Input  */}
          <div className="w-full flex flex-col items-start justify-start gap-[2px]">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full border-0 outline-0 focus:border-0 rounded-[10px] text-sm text-dustyGrey  text-left  px-5 sm:px-7 py-4 xs:py-5 bg-onyx mt-2"
            />
            {error && (
              <p className="ml-1 font-medium text-[13px] text-red">{error}</p>
            )}
          </div>
          <div className="w-full flex items-center justify-end mt-2">
            {/* Chevron => On click, moves user to the code verification */}
            <div
              onClick={handleNextClick}
              className="w-[40px] xs:w-[50px] md:w-[60px] h-[40px] xs:h-[50px] md:h-[60px] flex items-center justify-center bg-iceberg rounded-full cursor-pointer"
            >
              <ChevronRightIcon className="w-[17px] xs:w-[20px] md:w-[25px] h-[17px] xs:h-[20px] md:h-[25px] text-black " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
