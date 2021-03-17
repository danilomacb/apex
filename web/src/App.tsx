import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/global.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
