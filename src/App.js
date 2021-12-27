import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Privacy from './Components/Privacy';
import Investment from './Components/Investment';




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
        <Route path="/contactus" component={Contact} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/privacy" component={Privacy} />

        <Route path="/investment" component={Investment} />

     </Switch>

     <Footer/>


      
    </div>
    </Router>
  );
}

export default App;
