import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Context/ProtectedRoutes";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function Pages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </BrowserRouter>
  );
}