import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import "./assets/styleHeader.css";
import "./assets/styleContent.css";
import "./assets/styleFooter.css";

import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
