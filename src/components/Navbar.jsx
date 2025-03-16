import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div
      className=" flex justify-between text-white items-center
     max-w-[1240px] h-24 mx-auto px-4"
    >
      <h1 className="w-full text-3xl text-[#00df9a] font-bold ">DATA.</h1>

      <ul className="hidden md:flex uppercase  ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          !nav
            ? "hidden "
            : "  left-0 bg-[#000300] flex flex-col fixed top-0 h-full w-[60%] border-r border-r-gray-900 ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl text-[#00df9a] font-bold p-10 ">
          DATA.
        </h1>
        <ul className="pt-10 uppercase p-10">
          <li className="p-4 border-b border-b-gray-500">Home</li>
          <li className="p-4  border-b border-b-gray-500">Company</li>
          <li className="p-4 border-b border-b-gray-500">Resources</li>
          <li className="p-4 border-b border-b-gray-500">About</li>
          <li className="p-4 border-b border-b-gray-500">Contact</li>
        </ul>
      </div>
    </div>
  );
}
