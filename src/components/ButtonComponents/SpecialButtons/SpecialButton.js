import React from "react";

export const SpecialButton = (props) => {
  return (
    <div>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="btnSpecial">{props.specials}</button>
    </div>
  );
};