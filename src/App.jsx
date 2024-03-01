import { Sidebar } from "../src/components/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/routes/Dashboard";
import Navbar from "./components/Navbar";
import Companies from "./components/routes/Companies";
import { useContext } from "react";
import { ThemeContext } from "./provider/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`App flex flex-col ${theme} overflow-x-hidden overflow-y-hidden fixed`}>
        <Navbar />
        <div className="flex h-screen dark:bg-slate-700">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
