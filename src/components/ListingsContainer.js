import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing}) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listing.map(list=>
          <ListingCard key={list.id} list={list}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;