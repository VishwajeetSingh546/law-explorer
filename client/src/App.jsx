import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./layout/Header";

import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import ModulePage from "./pages/Module";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/module" element={<ModulePage />} />
        </Routes>
        {/* <AuthPage /> */}
        {/* <Dashboard /> */}
        {/* <ModulePage /> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
