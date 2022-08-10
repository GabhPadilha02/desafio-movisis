import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  )
}