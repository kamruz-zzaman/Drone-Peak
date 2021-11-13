import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/Pages/SignUp';
import SignIn from './Components/Pages/SignIn';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/signin'>
            <SignIn></SignIn>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
