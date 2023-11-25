import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  About,
  Investment,
  Photography,
  Videography,
} from "./Pages";
import { Footer, Header } from "./Components";
import "./App.css";

function App() {
  return (
    <Router>
      <main className="flex flex-col ">
        <section>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Photography" element={<Photography />} />
            <Route path="/Videography" element={<Videography />} />
            <Route path="/Investment" element={<Investment />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
