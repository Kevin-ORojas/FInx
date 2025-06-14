import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white shadow-lg">
        <div className="flex items-center justify-end h-16  px-4">
          <Link to="./register">
            <i className="bx bx-user-circle text-4xl"></i>
          </Link>
        </div>
        <hr className="w-full text-white" />
        <div className="flex flex-col gap-5 px-4 py-4">
          <Link className="border-2 text-xl" to="./home">
            Home
          </Link>
          <Link className="border-2 text-xl" to="./loans">
            Loans
          </Link>
          <Link className="border-2 text-xl" to="./expenses">
            Expenses
          </Link>
          <Link className="border-2 text-xl" to="./savings">
            Savings
          </Link>
          <Link className="border-2 text-xl" to="./transaction">
            Transaction
          </Link>
        </div>
      </div>
    </div>
  );
}
