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
        <div>
          <Link to="./Home">Home</Link>
        </div>
      </div>
    </div>
  );
}
