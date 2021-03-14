import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages';
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route path= "/contact" component={Contact}/>
        <Route path= "/work" component={Work}/>
      </Switch>
    </Router>
  );
}

export default App;
