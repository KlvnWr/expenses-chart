import "./App.css";

function App() {
  return (
    <>
      <div id="balance">
        <div className=" flex bg-SoftRed rounded-2xl p-5 mb-5 min-w-full">
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
      <div
        id="spending"
        className="bg-VeryPaleOrange rounded-2xl p-5 min-w-full"
      >
        <h1 className="font-bold text-DarkBrown text-2xl text-left mb-7">
          Spending - Last 7 days
        </h1>
        <div className="grid grid-cols-7 gap-5 mb-1">
          <div className="w-8 h-6 bg-SoftRed rounded"></div>
          <div className="w-8 h-12 bg-SoftRed rounded"></div>
          <div className="w-8 h-24 bg-SoftRed rounded"></div>
          <div className="w-8 h-10 bg-SoftRed rounded"></div>
          <div className="w-8 h-8 bg-SoftRed rounded"></div>
          <div className="w-8 h-16 bg-SoftRed rounded"></div>
          <div className="w-8 h-7 bg-SoftRed rounded"></div>
        </div>
        <div className="grid grid-cols-7 gap-5 mb-1">
          <p className="text-MediumBrown">mon</p>
          <p className="text-MediumBrown">tue</p>
          <p className="text-MediumBrown">wed</p>
          <p className="text-MediumBrown">thu</p>
          <p className="text-MediumBrown">fri</p>
          <p className="text-MediumBrown">sat</p>
          <p className="text-MediumBrown">sun</p>
        </div>
        <div className="h-px bg-gray-200 w-full border-b border-grey-400 shadow-sm my-6"></div>
        <div className="flex gap-28">
          <div className="text-left">
            <p className="text-MediumBrown">Total this month</p>
            <span className="text-DarkBrown text-4xl text-">$478.33</span>
          </div>
          <div className="text-right">
            <span className="text-DarkBrown">+2.4%</span>
            <p className="text-MediumBrown">from last month</p>
          </div>
        </div>
      </div>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/KlvnWr">Kelvin</a>.
      </footer>
    </>
  );
}

export default App;
