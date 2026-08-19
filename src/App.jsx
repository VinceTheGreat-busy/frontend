import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}