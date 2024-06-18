import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/Header";
import { Main } from "./modules/Main";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;
