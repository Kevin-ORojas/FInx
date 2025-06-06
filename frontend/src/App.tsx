import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
