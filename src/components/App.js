import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const url = "http://localhost:6001/listings";

function App() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, []);

  function searchFunc(searchValue) {
    console.log(searchValue);
  }
  return (
    <div className="app">
      <Header searchFunc={searchFunc} />
      <ListingsContainer listing={listing} />
    </div>
  );
}

export default App;