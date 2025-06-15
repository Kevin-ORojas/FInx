import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Expenses from './components/Expenses';
import Loans from "./components/Loans";
import Savings from "./components/Savings";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
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
