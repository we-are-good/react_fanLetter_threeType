import React from "react";
import Router from "./shared/Router";
import FanLetterContext from "./shared/FanLetterContext";

function App() {
  return (
    <div>
      <FanLetterContext>
        <Router />
      </FanLetterContext>
    </div>
  );
}

export default App;
