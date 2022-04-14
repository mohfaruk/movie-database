import React from "react";

const SearchBox = props => {
  const handleChange = event => {
    props.setUserInput(true);
    props.setSearchValue(event.target.value);
  };

  // if (props.searchValue === "") {
  //   props.setUserInput(false);
  // }

  return (
    <div className="d-flex align-items-center mt-4 mb-14">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-slate-50 input-lg text-black rounded"
              placeholder="Search..."
              onChange={handleChange}
              //onChange={event => props.setSearchValue(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
