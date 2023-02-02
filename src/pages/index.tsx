import React from "react";

function Main() {
  const handleClick = () => {
    throw Error("an error");
  };

  return (
    <>
      <div>hello</div>
      <button onClick={handleClick}>click here</button>
    </>
  );
}

export default Main;
