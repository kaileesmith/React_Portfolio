import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages';
import About from "./Pages/About";
import Work from "./Pages/Work";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route path= "/about" component={About}/>
        <Route path= "/work" component={Work}/>
      </Switch>
    </Router>
  );
}

export default App;
