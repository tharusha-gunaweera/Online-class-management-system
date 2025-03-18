import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Students/Navbar";
import Dashboard from "./Students/Dashboard";
import TimeTable from "./Students/TimeTable";
import ChatBox from "./Students/ChatBox";
import MyClasses from "./Students/MyClasses";
import EnrollClass from "./Students/EnrollClass";



function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-grow p-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/TimeTable" element={<TimeTable />} />
            <Route path="/ChatBox" element={<ChatBox />} />
            <Route path="/MyClasses" element={<MyClasses />} />
            <Route path="/EnrollClass" element={<EnrollClass />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
