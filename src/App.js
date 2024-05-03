import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import  Layout from "./Page/Layout";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />         
        </Route>
      </Routes>
    </BrowserRouter>



    </>
  );
}

export default App;
