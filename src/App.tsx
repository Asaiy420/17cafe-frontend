import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Home />
        </div>
      </Router>
  );
}

export default App;
