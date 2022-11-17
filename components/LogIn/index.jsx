import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn(props) {
  const {
    pchef1,
    newRestaurant,
    restaurantName,
    address,
    streetAddress,
    state,
    zip,
    phoneNumber,
    text1,
    phone,
    joinNow,
    aboutUs,
    place,
    restaurantPortal,
    loginframe,
    login1,
    signInToYourAccount,
    userId,
    password,
    login2,
    iconHome,
    iconInstagram,
    iconTwitter,
    iconFacebook,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-in screen">
        <div className="overlap-group7">
          <div className="rectangle-27"></div>
          <img className="pchef-1" src={pchef1} alt="pchef 1" />
          <div className="overlap-group5">
            <div className="new-restaurant valign-text-middle poppins-normal-black-48px">{newRestaurant}</div>
            <div className="new-member-portal">
              <div className="restaurant-name">
                <div className="restaurant-name-1 valign-text-middle roboto-normal-black-35px">{restaurantName}</div>
                <div className="rectangle-6"></div>
              </div>
              <div className="address">
                <div className="flex-col">
                  <div className="address-1 valign-text-middle roboto-normal-black-35px">{address}</div>
                  <div className="overlap-group1">
                    <div className="street-address valign-text-middle roboto-normal-black-25px">{streetAddress}</div>
                  </div>
                </div>
                <div className="overlap-group2">
                  <div className="state valign-text-middle roboto-normal-black-25px">{state}</div>
                </div>
                <div className="overlap-group3">
                  <div className="zip valign-text-middle roboto-normal-black-25px">{zip}</div>
                </div>
              </div>
              <div className="phone-number">
                <div className="phone-number-1 valign-text-middle roboto-normal-black-35px">{phoneNumber}</div>
                <div className="flex-row">
                  <div className="text-1 valign-text-middle">{text1}</div>
                  <div className="overlap-group">
                    <div className="phone valign-text-middle">{phone}</div>
                  </div>
                </div>
              </div>
              <div className="join-now">
                <div className="join-now-container">
                  <div className="join-now-1"></div>
                  <div className="join-now-2 valign-text-middle poppins-normal-white-32px">{joinNow}</div>
                </div>
              </div>
            </div>
            <div className="flex-row-1 poppins-semi-bold-black-32px">
              <div className="about-us valign-text-middle">{aboutUs}</div>
              <div className="place valign-text-middle">{place}</div>
            </div>
          </div>
          <div className="overlap-group6">
            <div className="restaurant-portal valign-text-middle poppins-normal-black-48px">{restaurantPortal}</div>
            <img className="login-frame" src={loginframe} alt="loginFrame" />
            <div className="login valign-text-middle poppins-normal-black-48px">{login1}</div>
            <p className="sign-in-to-your-account valign-text-middle">{signInToYourAccount}</p>
            <div className="login-1"></div>
            <div className="overlap-group-1">
              <div className="user-id valign-text-middle roboto-normal-black-25px-2">{userId}</div>
            </div>
            <div className="overlap-group1-1">
              <div className="password valign-text-middle roboto-normal-black-25px-2">{password}</div>
            </div>
            <div className="login-container">
              <div className="login-button"></div>
              <div className="login-2 valign-text-middle poppins-normal-white-32px">{login2}</div>
            </div>
            <Link to="/main-page">
              <img className="icon-home" src={iconHome} alt="icon-home" />
            </Link>
          </div>
          <img className="icon-instagram" src={iconInstagram} alt="icon-instagram" />
          <img className="icon-twitter" src={iconTwitter} alt="icon-twitter" />
          <img className="icon-facebook" src={iconFacebook} alt="icon-facebook" />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
