import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex font-[lato] font-bold">
      <div
        className={`fixed left-0 top-0 h-screen bg-gray-800 text-white shadow-lg transition-all duration-300 w-16 sm:w-64  
         }`}
      >
        <div className="flex flex-col sm:gap-5 sm:px-4 sm:py-4 sm:mt-8">
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
            <p className="transition-all duration-500 sm:block hidden">Home</p>
          </Link>
          <Link
            className="text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 min-h-10 rounded-md"
            to="./loans"
          >
            <i className="bx bx-dollar-circle text-3xl"></i>
            <p className="transition-all duration-500 sm:block hidden">Loans</p>
          </Link>
          <Link
            className=" text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 min-h-10 rounded-md"
            to="./expenses"
          >
            <i className="bx  bx-cart text-3xl"></i>
            <p className="transition-all duration-500 sm:block hidden ">
              expenses
            </p>
          </Link>
          <Link
            className=" text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl transition-shadow duration-500 rounded-md min-h-10  "
            to="./savings"
          >
            <i className="bx bx-piggy-bank text-3xl"></i>
            <p className="transition-all duration-500 sm:block hidden ">
              Savings
            </p>
          </Link>
          <Link
            className="text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 rounded-md hover:shadow-2xl transition-shadow duration-500 min-h-10 "
            to="./transaction"
          >
            <i className="bx bx-credit-card text-3xl"></i>
            <p className="transition-all duration-500 sm:block hidden">
              Transaction
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
