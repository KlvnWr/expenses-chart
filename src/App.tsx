import "./App.css";

function App() {
  return (
    <>
      <div id="balance" className="">
        <div className="bg-SoftRed rounded-2xl p-5 m-5 min-w-96">
          <p className="text-Cream text-left">My balance</p>
          <h1 className="font-bold mt-2 text-2xl text-Cream text-left">
            $921.48
          </h1>
          <div id="circulo"></div>
        </div>
      </div>
      <div id="spending">
        <div>
          <h1 className="font-bold text-SoftRed">Spending - Last 7 days</h1>
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
