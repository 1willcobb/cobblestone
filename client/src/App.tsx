import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact } from "./Pages";
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
