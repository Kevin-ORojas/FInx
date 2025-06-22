import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Expenses from "./components/Expenses";
import Loans from "./components/Loans";
import Savings from "./components/Savings";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="">
        <Sidebar />
        <div className="transition-all duration-300 ml-16 sm:ml-64">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/savings" element={<Savings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
