import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        {/* <Header /> */}
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route>404 Not Found</Route>
          </Route>
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
