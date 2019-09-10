import React, { useState } from "react";

import { OperatorButton } from "./OperatorButton"

import { operators } from "../../../data"

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonOp] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div>
        {buttonOp.map((operator, index) => (
          <OperatorButton key={index} operator = {operator}/>
          ))}
      </div>
    </div>
  );
};