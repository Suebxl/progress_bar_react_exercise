import React from "react";
import { useState } from "react";
import "./styles.css";
import ProgressBar from "./ProgressBar";
/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [value, setValue] = useState(10);

  function setValuer(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar inputWidth={value}>{value}%</ProgressBar>
        <form>
          <label htmlFor="percentValue">Input Percentage:</label>
          <input
            id="percentValue"
            type="number"
            min="10"
            max="100"
            onChange={setValuer}
          />
        </form>
      </div>
    </>
  );
}
