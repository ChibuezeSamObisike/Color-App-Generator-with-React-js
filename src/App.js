import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025"));

  //console.log("This is ", Values);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : ""}
          />
          <button className="btn" style={{ marginLeft: "20px" }} type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);

          return (
            <SingleColor
              key={index}
              hexColor={color.hex}
              {...color}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
