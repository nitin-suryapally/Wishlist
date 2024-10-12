import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import SidebarLayout from "./components/SidebarLayout";
import ListDetails from "./components/ListDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/" element={<Signup />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<SidebarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/lists/:listId" element={<ListDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
