import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Instructor from './components/Instructor/Instructor';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/instructor">
            <Instructor></Instructor>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;


