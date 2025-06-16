import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <div
        className={`fixed left-0 top-0 h-screen bg-gray-800 text-white shadow-lg transition-all duration-300 ${
          isShow ? "w-64" : "w-16"
        }`}
      >
        <button className="p-3 text-white" onClick={handleShow}>
          ✖
        </button>

        <div className="flex flex-col gap-5 px-4 py-4 mt-8">
          <Link to="./register">
            <i className="bx bx-user-circle text-4xl"></i>
          </Link>
        </div>
        <hr className="w-full text-white " />

        <div className="flex flex-col gap-8 px-4 py-4 mt-8">
          <Link
            className="text-xl gap-4 flex items-center cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 min-h-10  rounded-md"
            to="./home"
          >
            <i className="bx bx-home-alt text-3xl"></i>
            <p
              className={`${
                isShow ? "opacity-100" : "opacity-0 hidden"
              } transition-all duration-500`}
            >
              Home
            </p>
          </Link>
          <Link
            className="text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 min-h-10 rounded-md"
            to="./loans"
          >
            <i className="bx bx-dollar-circle text-3xl"></i>
            <p
              className={`${
                isShow ? "opacity-100" : "opacity-0 hidden"
              } transition-all duration-300`}
            >
              Loans
            </p>
          </Link>
          <Link
            className=" text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 min-h-10 rounded-md"
            to="./expenses"
          >
            <i className="bx  bx-cart text-3xl"></i>
            <p
              className={`${
                isShow ? "opacity-100" : "opacity-0 hidden"
              } transition-all duration-300`}
            >
              expenses
            </p>
          </Link>
          <Link
            className=" text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 rounded-md min-h-10  "
            to="./savings"
          >
            <i className="bx bx-piggy-bank text-3xl"></i>
            <p
              className={`${
                isShow ? "opacity-100" : "opacity-0 hidden"
              } transition-all duration-300`}
            >
              Savings
            </p>
          </Link>
          <Link
            className="text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 rounded-md hover:shadow-2xl transition-shadow duration-500 min-h-10 "
            to="./transaction"
          >
            <i className="bx bx-credit-card text-3xl"></i>
            <p
              className={`${
                isShow ? "opacity-100" : "opacity-0 hidden"
              } transition-all duration-500`}
            >
              Transaction
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
