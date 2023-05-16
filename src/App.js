import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Details from "./Details";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}
