import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewItems from "./pages/ViewItems";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Technology from "./pages/Technology";
import Sale from "./pages/Sale";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/viewitems" element={<ViewItems />} />
          <Route path="/login" element={<Login />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
