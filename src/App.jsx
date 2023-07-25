import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/two" element={<PageTwo />}></Route>
          <Route path="/three" element={<PageThree />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
