import React from "react";

const SectionTittle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto w-1/3 mt-6">
      <p className="text-[#D99904] z-30">---{subHeading}---</p>
      <h3 className="uppercase z-30 text-4xl border-y-2 p-5 mt-5 mb-8">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTittle;
