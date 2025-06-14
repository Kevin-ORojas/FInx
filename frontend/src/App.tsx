import { Routes, Route } from "react-router-dom";
import Home from './components'
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
