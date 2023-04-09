import { useState } from "react";
const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h3>Color Generator</h3>

      <form className="form" onSubmit={handelSubmit}>
        <input
          type="color"
          value={color}
          style={{ background: color }}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="#f15025"
          name="color"
          value={color}
          id="color"
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
