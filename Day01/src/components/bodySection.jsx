import { useState } from "react";
import clothDetails from "../utils/dummy";
import Card from "./card";

function BodySection() {
  const [cards, setCards] = useState(clothDetails); // store card data in state

  const sortCardsAsc = () => {
    const sorted = [...cards].sort((a, b) => a.price - b.price);
    setCards(sorted); // update the state with sorted data
  };
  const sortCardsDsc =()=>{
    const sorted = [...cards].sort((a,b)=>b.price-a.price)
    setCards(sorted)
  }

  return (
    <>
      <div id="body-section">
        {cards.map((value, index) => (
          <Card
            key={index}
            cloth={value.tag}
            discount={value.discount}
            price={value.price}
          />
        ))}
      </div>
      <button className="sort-btn" onClick={sortCardsAsc}>Sort cards asc</button>
      <button className="sort-btn" onClick={sortCardsDsc}>Sort cards dsc</button>
    </>
  );
}

export default BodySection;
