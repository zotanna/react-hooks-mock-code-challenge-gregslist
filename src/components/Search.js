import React, { useState } from "react";

function Search({searchFunc}) {
  const [searchValue,setSearchValue]=useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(searchValue);
    searchFunc(searchValue)
  }
  function handleSearch(value){
    // console.log(value)
    setSearchValue(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;