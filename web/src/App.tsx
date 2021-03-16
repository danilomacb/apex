import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/global.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
