import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route />
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