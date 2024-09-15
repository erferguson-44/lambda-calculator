import React from "react";

import { OperatorButton } from "./OperatorButton"

import { operators } from "../../../data"

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [buttonOp] = useState(operators);

  return (
    <div className="containerOperators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       
       {operators.map(item => (<OperatorButton char={item.char} value={item.value} key={item.char}/>))}
      
    </div>
  );
};

//line 17 > need a walk through on this