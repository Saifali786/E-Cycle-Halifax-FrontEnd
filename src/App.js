import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import ContactUs  from "./components/ContactUs";
import RequestPickup  from "./components/RequestPickup";
import Homepage from "./components/Homepage";
import { Maps } from "./components/Maps";
import Resources from "./components/Resources";
import Resource1 from "./components/Resource1";
import Resource2 from "./components/Resource2";
import Resource3 from "./components/Resource3";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/requestpickup" element={<RequestPickup />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/maps" element={<Maps />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/resource1" element={<Resource1 />}></Route>
        <Route path="/resource2" element={<Resource2 />}></Route>
        <Route path="/resource3" element={<Resource3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
