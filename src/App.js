import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Example from "./Pages/Example";
import ExampleOne from "./Pages/ExampleOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Example />} />
        <Route path="/exampleone" element={<ExampleOne />} />
      </Routes>
    </Router>
  );
}

export default App;
