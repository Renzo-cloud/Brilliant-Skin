import React from "react";
import { Line, diamondDesign } from "../../assets/images";

const StorePartners = () => {
  return (
    <div>
      <h1 className="text-center text-2xl my-12">Store Partners</h1>
      <div className="flex items-center justify-center">
        <img className="" src={diamondDesign} alt="" />
      </div>
      <div className="flex items-center justify-center text-center mt-8">
        <h1 className="bg-[#FFE1EA] rounded-3xl my-4 w-48 h-8">
          Featured Store
        </h1>
      </div>
      <div className="flex items-center justify-center mt-4">
        <img src={Line} alt="" />
      </div>
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default StorePartners;
