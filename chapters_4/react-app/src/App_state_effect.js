import "./App.css";
import { useState, useEffect } from "react";

// Destructuring Arrays
// const [firstCity, secondCity] = ["New York", "London", "Paris", "Berlin"];
// console.log(firstCity, secondCity); // New York London

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion, secondary]);
  /* The array is the dependency array. It tells React
  to only run the effect if the value of emotion changes.*/

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current Emotion: {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("excited")}>excited</button>

      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>grateful</button>
    </div>
  );
}

export default App;
