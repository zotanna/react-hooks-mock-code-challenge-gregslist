import React from "react";
import Search from "./Search";

function Header({searchFunc}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchFunc={searchFunc} />
    </header>
  );
}

export default Header;