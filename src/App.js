import "./styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Movie from "./components/movie";
import Footer from "./components/footer";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
