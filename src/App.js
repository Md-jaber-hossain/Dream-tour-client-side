import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import MenuBar from './components/MenuBar/MenuBar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateUser from './components/UpdateUser/UpdateUser';
import AddPackages from './components/AddPackages/AddPackages';
import BookingForm from './components/BookingForm/BookingForm';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAll from './components/ManageAll/ManageAll';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/addpackages">
              <AddPackages></AddPackages>
            </Route>
            <Route exact path="/mybookings">
              <MyBookings></MyBookings>
            </Route>
            <Route exact path="/update/:updateId">
              <UpdateUser></UpdateUser>
            </Route>
            <Route exact path="/manageall">
                <ManageAll></ManageAll>
            </Route>
            <PrivateRoute exact path="/bookingform/:bookingId">
              <BookingForm></BookingForm>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
