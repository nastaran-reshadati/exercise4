import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loggin from "./components/Loggin";
import Wellcome from "./components/Wellcome";
import Home from "./components/Home";
import { useState } from "react";
function App() {
  const [authentication, setAuthentication] = useState(false);

  const func = (data) => {
    setAuthentication(data);
    console.log(authentication);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" navigate = element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/loggin" />}></Route>
          <Route path="/loggin" element={<Loggin func={func} />} />

          <Route
            path="/loggin/wellcome/:id"
            element={<Wellcome auth={authentication} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
