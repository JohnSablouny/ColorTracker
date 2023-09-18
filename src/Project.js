import React from "react";

const Project = ({ color, setColor }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <form className="colorInput" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="colorInput" style={{ backgroundColor: `${color}` }}>
        Empty Value
      </label>
      <input
        id="colorInput"
        placeholder="Add color name"
        onChange={handleChange}
      />
    </form>
  );
};

export default Project;
