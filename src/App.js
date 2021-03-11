import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages';
import About from "./Pages/About"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route path= "/about" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
