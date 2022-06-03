import React from "react";
import "./TinderCard.css";
import Tindercard from "react-tinder-card";

function TinderCard() {
  const [people, setPeople] = React.useState([
    {
      name: "Elon Musk",
      url: "https://imageio.forbes.com/specials-images/imageserve/5f47d4de7637290765bce495/0x0.jpg?format=jpg&crop=2146,2145,x1699,y559,safe&height=416&width=416&fit=bounds",
    },
    {
      name: "Jeff Bezos",
      url: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
    },
  ]);
  return (
    <div className="tinder_cards">
      <div className="tinder_card_container">
        {people.map(person => {
         return <Tindercard
         className="swipe" key={person.name} preventSwipe={["up,down"]} onSwipe={(dir)=>{
             
         }}></Tindercard>
        })}
      </div>
    </div>
  );
}

export default TinderCard;
