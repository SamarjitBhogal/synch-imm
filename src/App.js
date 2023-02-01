import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Layout/> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/pages-forms"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
