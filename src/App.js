import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch } from "react-router-dom";

//Wraps Route paths to the Home, Stocks, and Movies components inside a Switch.
//Defaults to Page Not Found if no path is valid.
function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Stocks />
        </Route>
        <Route path="/stocks">
          <Movies />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
