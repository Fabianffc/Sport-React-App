import './App.css';
import Home from "./components/Home"
import News from "./components/News"
import Weather from "./components/Weather"
import Sports from "./components/Sports"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/sports">Sports</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/News">
            <News />
          </Route> <Route path="/Weather">
            <Weather />
          </Route>
          <Route path="/Sports">
            <Sports />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
