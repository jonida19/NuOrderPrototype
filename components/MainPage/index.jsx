import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage(props) {
  const { overlapGroup2, logo, title, iAm, customer, restaurateaur, about, text2, contactUs } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main-page screen">
        <div className="overlap-group2-1 inter-normal-white-30px" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <div className="flex-col-1">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="title">{title}</h1>
            <div className="i-am poppins-normal-white-48px">{iAm}</div>
            <div className="flex-row-2">
              <div className="overlap-group-2">
                <div className="customer valign-text-middle poppins-normal-white-48px">{customer}</div>
              </div>
              <Link to="/log-in">
                <div className="restaurateur">
                  <div className="overlap-group1-2">
                    <div className="restaurateaur valign-text-middle poppins-normal-white-48px">{restaurateaur}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="about">{about}</div>
          <div className="text-2">{text2}</div>
          <div className="contact-us">{contactUs}</div>
          <img className="vector" src="/img/vector@2x.png" alt="Vector" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
