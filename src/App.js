import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <NavBar/>
    </div>
    </Router>
  );
}

export default App;
