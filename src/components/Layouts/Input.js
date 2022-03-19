import React from "react";

const Input = ({ handleSearch }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
      <div>
        <div className="relative">
          <input
            type="text"
            className="w-full pr-40 bg-slate-50 input-lg text-black rounded"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
