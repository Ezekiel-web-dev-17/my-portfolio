import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollPageTop.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
