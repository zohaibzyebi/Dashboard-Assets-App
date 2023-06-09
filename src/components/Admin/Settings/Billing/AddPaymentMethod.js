import React, { useState, useMemo } from "react";
import Image from "next/image";
import { EnvelopeIcon, PlusIcon } from "@heroicons/react/24/outline";
import ReactFlagsSelect from "react-flags-select";

const AddPaymentMethod = () => {
  // Country Input State
  const [country, setCountry] = useState("");
  // Email Input State
  const [emails, setEmails] = useState([""]);

  // States to manage all the inputs except email and country input
  const [paymentMethodInfo, setPaymanetMethodInfo] = useState({
    nameOnCard: "",
    expiryDate: "",
    cardNumber: "",
    cvv: "",
    street: "",
    city: "",
    state: "",
    province: "",
  });

  // Handlers to get all the input values except email and country
  const handleInputChange = (identifier, event) => {
    setPaymanetMethodInfo({
      ...paymentMethodInfo,
      [identifier]: event.target.value,
    });
  };

  // Email input handler
  function handleEmailChange(index, value) {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  }
  // Add email input handler
  function handleAddEmail() {
    setEmails([...emails, ""]);
  }

  return (
    <div className="w-full flex flex-col items-start justify-start gap-7 md:gap-9 lg:gap-12 pb-32">
      <h3 className="text-white  font-medium text-[22px] md:text-[25px]">
        Add card
      </h3>
      <div className="w-full flex flex-col items-center justify-start gap-4 md:gap-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-4 mdl:gap-6 sxl:gap-9 mxl:gap-20">
          {/* Col 1 */}
          <div className="w-full flex items-start justify-start ">
            <p className="text-white text-[15px] font-medium">Card details</p>
          </div>
          {/* Col 2  */}
          <div className="w-full flex flex-col items-center justify-start gap-3">
            {/* Name on Card + Expiry date */}
            <div className="w-full grid grid-cols-[1.4fr_0.6fr] xs:grid-cols-[1.6fr_0.4fr] gap-2 sxl:gap-4">
              {/* Col 1 => Name on Card */}
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <div className="uppercase text-dustyGrey text-[12px] font-medium">
                  Name on card
                </div>
                <input
                  type="text"
                  placeholder="Best Kotek"
                  onChange={(e) => handleInputChange("nameOnCard", e)}
                  className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
                />
              </div>
              {/* Col 2 => Expiry date */}
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <div className="uppercase text-dustyGrey text-[12px] font-medium">
                  Expiry date
                </div>
                <input
                  type="text"
                  placeholder="01/02"
                  onChange={(e) => handleInputChange("expiryDate", e)}
                  className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
                />
              </div>
            </div>
            {/* Credit Card Number + CVV  */}
            <div className="w-full grid grid-cols-[1.4fr_0.6fr] xs:grid-cols-[1.6fr_0.4fr]  gap-2 sxl:gap-4">
              {/* Col 1 => Card Number */}
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <div className="uppercase text-dustyGrey text-[12px] font-medium">
                  Card number
                </div>
                <div className="px-4 w-full flex items-center justify-start gap-2 border-dustyGrey border-2 border-solid outline-none rounded-lg ">
                  <div className="w-[24px] h-[15px] flex items-center justify-center relative">
                    <Image
                      src="/icons/mastercard.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    onChange={(e) => handleInputChange("cardNumber", e)}
                    className="w-full text-sm text-white font-medium  py-[14px]  focus:outline-none bg-onyx placeholder:text-white"
                  />
                </div>
              </div>
              {/* Col 2 => CVV */}
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <div className="uppercase text-dustyGrey text-[12px] font-medium">
                  CVV
                </div>
                <input
                  type="text"
                  placeholder="***"
                  onChange={(e) => handleInputChange("cvv", e)}
                  className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-dustyGrey h-[0.7px] bg-opacity-25"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-4 mdl:gap-6 sxl:gap-9 mxl:gap-20">
          {/* Col 1 */}
          <div className="w-full flex flex-col gap-1 items-start justify-start ">
            <p className="text-white text-[15px] font-medium">Email address</p>
            <p className="w-full text-left text-dustyGrey text-sm">
              Invoices will be sent to this email address
            </p>
          </div>
          {/* Col 2  */}
          <div className="w-full flex flex-col items-start justify-start gap-3">
            {emails.map((email, index) => (
              <div
                key={index}
                className="px-4 w-full flex items-center justify-start gap-2 border-dustyGrey border-2 border-solid outline-none rounded-lg "
              >
                <EnvelopeIcon className="text-white w-[24px] h-[24px] " />
                <input
                  type="email"
                  placeholder="best@kotek.com"
                  onChange={(e) => handleEmailChange(index, e.target.value)}
                  className="w-full text-sm text-white font-medium  py-[14px]  focus:outline-none bg-onyx placeholder:text-white"
                />
              </div>
            ))}
            <div
              onClick={handleAddEmail}
              className=" flex items-center justify-start gap-1 cursor-pointer"
            >
              <PlusIcon className="w-[20px] h-[20px] text-dustyGrey" />
              <p className="text-dustyGrey text-sm font-medium">Add another</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-dustyGrey h-[0.7px] bg-opacity-25"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-4 mdl:gap-6 sxl:gap-9 mxl:gap-20">
          {/* Col 1 */}
          <div className="text-white text-[15px] font-medium">
            Street address
          </div>
          {/* Col 2  */}
          <input
            type="text"
            placeholder="123 Street Name"
            onChange={(e) => handleInputChange("street", e)}
            className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
          />
        </div>
        <div className="w-full bg-dustyGrey h-[0.7px] bg-opacity-25"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-4 mdl:gap-6 sxl:gap-9 mxl:gap-20">
          {/* Col 1 */}
          <div className="text-white text-[15px] font-medium">City</div>
          {/* Col 2  */}
          <input
            type="text"
            placeholder="City"
            onChange={(e) => handleInputChange("city", e)}
            className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
          />
        </div>
        <div className="w-full bg-dustyGrey h-[0.7px] bg-opacity-25"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-4 mdl:gap-6 sxl:gap-9 mxl:gap-20">
          {/* Col 1 */}
          <div className="text-white text-[15px] font-medium">
            State / Province
          </div>
          {/* Col 2  */}
          <div className="w-full grid grid-cols-2 gap-2 sxl:gap-4">
            <input
              type="text"
              placeholder="State"
              onChange={(e) => handleInputChange("state", e)}
              className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Province"
              onChange={(e) => handleInputChange("province", e)}
              className="w-full text-sm text-white font-medium px-4 py-[14px] border-dustyGrey border-2 border-solid outline-none focus:outline-none bg-onyx rounded-lg placeholder:text-white"
            />
          </div>
        </div>
        <div className="w-full bg-dustyGrey h-[0.7px] bg-opacity-25"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-4 mdl:gap-6 sxl:gap-9 mxl:gap-20">
          {/* Col 1 */}
          <div className="text-white text-[15px] font-medium">Country</div>
          {/* Col 2  */}
          <ReactFlagsSelect
            className="!font-poppins !bg-onyx !text-white scrollbar-hidden"
            countries={["US", "GB", "FR", "DE", "IT"]}
            selected={country}
            onSelect={(code) => setCountry(code)}
            placeholder="Country"
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
