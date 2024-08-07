import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import ProtetedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import Setup from "./pages/Setup";

const AppRouting = () => {
  const location = useLocation();
  const noFooterLinks = ["/register", "/login", "/dashboard/setup"];
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtetedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/setup" element={<Setup />} />
        </Route>
      </Routes>
      {!noFooterLinks.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
};

export default App;
