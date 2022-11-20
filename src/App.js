import "./App.css";
import Home from "./pages/home/Home";
import Form1 from "./pages/form1/Form1";
import Form2 from "./pages/form2/Form2";
import Form3 from "./pages/form3/Form3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form1" element={<Form1 />} />
        <Route exact path="/form2" element={<Form2 />} />
        <Route exact path="/form3" element={<Form3 />} />
      </Routes>
    </>
  );
}

export default App;
