import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex font-">
      <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white shadow-lg">
        <div className="flex items-center justify-end h-16  px-4">
          <Link to="./register">
            <i className="bx bx-user-circle text-4xl"></i>
          </Link>
        </div>
        <hr className="w-full text-white " />
        <div className="flex flex-col gap-5 px-4 py-4 mt-8">
          <Link
            className="text-xl gap-4 flex items-center cursor-pointer hover:shadow-blue-500 hover:shadow-2xl py-2 hover:border-b-2 rounded-md"
            to="./home"
          >
            <i className="bx bx-home-alt"></i>
            <p>Home</p>
          </Link>
          <Link
            className="text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl py-2 hover:border-b-2 rounded-md"
            to="./loans"
          >
            <i className="bx bx-dollar-circle"></i>
            <i>Loans</i>
          </Link>
          <Link
            className=" text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl py-2 hover:border-b-2 rounded-md"
            to="./expenses"
          >
            <i className="bx  bx-cart"></i>
            <i>expenses</i>
          </Link>
          <Link
            className=" text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 hover:shadow-2xl rounded-md py-2 hover:border-b-2 "
            to="./savings"
          >
            <i className="bx bx-piggy-bank"></i>
            <p>Savings</p>
          </Link>
          <Link
            className="text-xl flex items-center gap-4 cursor-pointer hover:shadow-blue-500 rounded-md hover:shadow-2xl py-2 hover:border-b-2"
            to="./transaction"
          >
            <i className="bx bx-credit-card"></i>
            <p>Transaction</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
