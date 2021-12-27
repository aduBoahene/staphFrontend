import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import BecomeAClient from './Components/BecomeAClient';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';



function App() {

  return (
    <Router>
    <div>
      <Header/>
     
     <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/becomeaclient" component={BecomeAClient} />
        <Route path="/contactus" component={Contact} />
        <Route path="/aboutus" component={AboutUs} />


     </Switch>


      
    </div>
    </Router>
  );
}

export default App;
