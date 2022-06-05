import React, { useEffect } from "react";
import "./TinderCard.css";
import Tindercard from "react-tinder-card";
import axios from "./axios";

function TinderCard() {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const [people, setPeople] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/fetchCard");
      setPeople(req.data)
    }
    fetchData()
  },[]);

  return (
    <div className="tinder_cards">
      <div className="tinder_card_container">
        {people.map((person) => (
          <Tindercard
            className="swipe"
            key={person.name}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                backgroundImage: "url(" + person.imgUrl + ")",
              }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </Tindercard>
        ))}
      </div>
    </div>
  );
}

export default TinderCard;
