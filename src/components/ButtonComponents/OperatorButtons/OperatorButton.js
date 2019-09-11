import React from "react";

export const OperatorButton = (props) => {
  return (
    <>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="btnOp">{props.char}</button>
    </>
  );
};
//do not understand line 7