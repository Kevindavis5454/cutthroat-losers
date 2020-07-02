import React, {useState} from 'react'
import './healthybingo.css'
import shuffle from "shuffle-array";

function Tile({ id, children, onToggle, isSet }) {
    return (
      <div onClick={onToggle} className={`tile ${isSet ? "tile--set" : ""}`}>
        {children}
      </div>
    );
  }
  
  const bbb = [
    "Swim for 30 minutes",
    "Go for 30 minute run",
    "Get 4000 steps in one day",
    "Eat 5 servings of veggies in one day",
    "Drink half your weight in oz. of water",
    "Wake up early to workout ",
    "Meditate for 30 minutes",
    "Read for 30 minutes",
    "Do a workout that involves your kids",
    "Do a workout video",
    "Get 10 hours of sleep",
    "Don't workout 3 days in a row",
    "Order and eat takout/delivery",
    "Get outside for 30 minutes",
    "Cook and serve a meal for your family",
    "Do something creative for 30 minutes",
    "Take a bath",
    "Talk to friend or relative",
    "Date with your spouse",
    "30 minute yoga routine",
    "Try new/unique veggie",
    "Eat dessert",
    "Clean house for 30 minutes",
    "Drink an alcoholic drink",
    "Spend time with friends/family (non-immediate)"
  ];
  
  const data = shuffle(bbb).reduce(
    (data, value, index) => ({ ...data, [index]: value }),
    {}
  );
  
  function HealthyBingo() {
    const [state, setState] = useState({ checked: {} });
    const toggle = id =>
      setState(state => {
        const checked = { ...state.checked, [id]: !state.checked[id] };
        return {
          ...state,
          checked
        };
      });
  
    return (
      <div className="bingo">
        <h1>Healthy Bingo</h1>
        <div className="wrapper">
          {Object.keys(data).map(id => (
            <Tile
              key={id}
              id={id}
              isSet={!!state.checked[id]}
              onToggle={() => toggle(id)}
            >
              {data[id]}
            </Tile>
          ))}
        </div>
      </div>
    );
  }

export default HealthyBingo