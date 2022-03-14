import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalProvider } from "./store/GlobalContext";
import { CookiesProvider } from "react-cookie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Operations from "./components/Operations";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <GlobalProvider>
          <div className="container mx-auto min-h-screen flex flex-col justify-between divide-y">
            <Navbar />
            <Routes>
              {/* Public route */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />

              {/* Private routes */}
              <Route element={<RequireAuth />}>
                <Route path="/home" element={<Home />} />
                <Route path="/all-operations" element={<Operations />} />
              </Route>

              {/* Catch all */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
            <Footer />
          </div>
        </GlobalProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
