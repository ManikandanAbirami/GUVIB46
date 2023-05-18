import React, { useState } from "react";
import Child from "./Child";
import AppContext from "./AppContext";

function Parent() {
  const [userName, setUserName] = useState("Guvi");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        {userName}
        <Child></Child>
      </div>
    </AppContext.Provider>
  );
}

export default Parent;
