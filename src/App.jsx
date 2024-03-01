import { Sidebar } from "../src/components/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from "./components/routes/Dashboard";
import Navbar from "./components/Navbar";
import Companies from "./components/routes/Companies";

function App() {
  return (
    <Router>
    <div className="App flex flex-col">
      <Navbar />
      <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Companies/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
