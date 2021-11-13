import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import Herosection from './Components/Pages/Herosection/Herosection';
import HomeProduct from './Components/Pages/DroneProductHome/HomeProduct';
import AllProducts from './Components/Pages/DroneProductHome/AllProducts';
import Review from './Components/Shared/ReviewWithRating/Review/Review';
import Purches from './Components/Pages/Purches/Purches';
import AuthProvider from './Components/Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Herosection></Herosection>
              <HomeProduct></HomeProduct>
              <Review></Review>
            </Route>
            <Route exact path='/allproducts'>
              <AllProducts></AllProducts>
            </Route>
            <Route path='/packages/:id'>
              <Purches></Purches>
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
      </AuthProvider>
    </div>
  );
}

export default App;
