import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/log-in">
          <LogIn {...logInData} />
        </Route>
        <Route path="/:path(|main-page)">
          <MainPage {...mainPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const logInData = {
    pchef1: "/img/pchef-1@1x.png",
    newRestaurant: "New Restaurant",
    restaurantName: "Restaurant Name:",
    address: "Address:",
    streetAddress: "Street Address",
    state: "State",
    zip: "Zip",
    phoneNumber: "Phone Number",
    text1: "+1",
    phone: "(999) 999-9999",
    joinNow: "Join Now",
    aboutUs: "About Us",
    place: "Contact",
    restaurantPortal: "Restaurant Portal",
    loginframe: "/img/loginframe@1x.png",
    login1: "Login",
    signInToYourAccount: "Sign in to your account",
    userId: "User ID",
    password: "Password",
    login2: "login",
    iconHome: "/img/home-page@2x.png",
    iconInstagram: "/img/instagram-1@2x.png",
    iconTwitter: "/img/twitter-1@2x.png",
    iconFacebook: "/img/facebook-1@2x.png",
};

const mainPageData = {
    overlapGroup2: "/img/maincover@1x.png",
    logo: "/img/logo@1x.png",
    title: "Authentic food on your table.",
    iAm: "I am",
    customer: "Customer",
    restaurateaur: "Restaurateaur",
    about: "About",
    text2: "|",
    contactUs: "Contact Us",
};

