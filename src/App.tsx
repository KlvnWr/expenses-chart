import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="balance">
        <div className="">
          <p>My balance</p>
          <h1 className="font-bold">$921.48</h1>
        </div>
      </div>
      <div id="spending">
        <div>
          <h1 className="font-bold text-Soft red">Spending - Last 7 days</h1>
          mon tue wed thu fri sat sun
          <div>Total this month $478.33</div>
          <div>+2.4% from last month</div>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/KlvnWr">Kelvin</a>.
        </div>
      </div>
    </>
  );
}

export default App;
