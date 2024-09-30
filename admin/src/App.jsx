import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="flex max-padd-container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Add/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}