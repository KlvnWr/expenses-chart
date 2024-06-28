import "./App.css";

function App() {
  return (
    <>
      <div id="balance" className="">
        <div className=" flex bg-SoftRed rounded-2xl p-5 m-5 min-w-96">
          <div className="flex-1">
            <p className="text-Cream text-left">My balance</p>
            <h1 className="font-bold mt-2 text-2xl text-Cream text-left">
              $921.48
            </h1>
          </div>
          <div id="circulo" className="float-right flex-2 pt-2">
            <svg
              width="72"
              height="48"
              viewBox="0 0 72 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <circle fill="#382314" cx="48" cy="24" r="24" />
                <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div id="spending">
        <div>
          <h1 className="font-bold text-DarkBrown">Spending - Last 7 days</h1>
          <p className="text-MediumBrown">mon tue wed thu fri sat sun</p>
          <div className="text-MediumBrown">
            Total this month <span className="text-DarkBrown">$478.33</span>
          </div>
          <div className="text-MediumBrown">
            <span className="text-DarkBrown">+2.4%</span> from last month
          </div>
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
