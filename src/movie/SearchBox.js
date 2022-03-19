import React from "react";

const SearchBox = props => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
      <div>
        <div className="relative">
          <input
            type="text"
            className="w-full pr-40 bg-slate-50 input-lg text-black rounded"
            placeholder="Search..."
            onChange={event => props.setSearchValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="col col-sm-4">
  //     <input
  //       className="form-control"
  //       value={props.value}
  //       onChange={event => props.setSearchValue(event.target.value)}
  //       placeholder="Type to search..."
  //     ></input>
  //   </div>
  // );
};

export default SearchBox;
