import { useState } from "react";
import { sampleContext } from "./testContext";

export function Store({ children }) {
  let [a, setA] = useState(10);
  let [b, setB] = useState(100);

  return (
    <sampleContext.Provider value={{ a, setA,b,setB }}>
      {children}
    </sampleContext.Provider>
  );
}