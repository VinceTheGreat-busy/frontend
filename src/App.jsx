import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

function Pages() {
  return (
    <Routes>
      <Route index="/" element={<Layout /> }>
        <Route element={<Home />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}