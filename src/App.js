import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import Herosection from './Components/Pages/Herosection/Herosection';
import HomeProduct from './Components/Pages/DroneProductHome/HomeProduct';
import AllProducts from './Components/Pages/DroneProductHome/AllProducts';
import Purches from './Components/Pages/Purches/Purches';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contuct from './Components/Pages/ContactWithUs/Contuct';
import Navbar from './Components/Pages/Dashboard/Dashboard';
import ReviewsGet from './Components/Shared/ReviewWithRating/Review/ReviewsGet';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
              <Herosection></Herosection>
              <HomeProduct></HomeProduct>
              <Contuct></Contuct>
              <ReviewsGet></ReviewsGet>
              <Footer></Footer>
            </Route>
            <Route path='/allproducts'>
              <Header></Header>
              <AllProducts></AllProducts>
              <Footer></Footer>
            </Route>
            <Route path='/contactus'>
              <Header></Header>
              <Contuct></Contuct>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/packages/:id'>
              <Purches></Purches>
            </PrivateRoute>
            <Route path='/signup'>
              <Header></Header>
              <SignUp></SignUp>
              <Footer></Footer>
            </Route>
            <Route path='/signin'>
              <Header></Header>
              <SignIn></SignIn>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Navbar></Navbar>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
