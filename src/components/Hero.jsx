import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="text-white">
      <div
        className="max-w-[800px] mt-[-96px] w-full text-center mx-auto flex flex-col 
      justify-center align-center h-screen "
      >
        <p className=" text-[#00df9a] font-bold p-2 ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" text-4xl sm:text-6xl md:text-7xl font-bold md:py-6 ">
          Grow With Data
        </h1>
        <div className="flex justify-center align-center py-4">
          <p className="md:text-5xl sm:text-4xl font-bold text-xl  ">
            Fast, Flexible Financing for
            <ReactTyped
              className="pl-1 sm:pl-3 md:pl-3"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTC, BTB and SASS
          platforms
        </p>

        <button
          className="bg-[#00df9a] w-[200px] rounded-md mx-auto
         mt-6 py-3 text-black font-bold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
