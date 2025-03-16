const laptop = "./images/laptop.jpg";

export default function Analytics() {
  return (
    <div className="bg-white py-16 px-4 w-full">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
        <img className="w-[100%] mx-auto my-4" src={laptop} alt="/" />

        <div className="flex flex-col justify-center text-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptas voluptatem incidunt eum quisquam provident beatae nesciunt,
            vero nisi fugiat aliquam, quidem quia ullam consequuntur, sunt
            dolores alias id vel?
          </p>

          <button
            className="bg-[black] w-[200px] rounded-md mx-auto
         mt-6 py-3 text-[#00df9a] font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
