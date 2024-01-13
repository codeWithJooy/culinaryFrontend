import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const HeaderCheckout = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push("/home");
  };
  return (
    <div className="checkoutHeader">
      <div className="checkoutHeaderTop">
        <img src="Assets/main/back.png" onClick={handleBack}/>
        <p>Chinese Adda</p>
      </div>
      <div className="checkoutHeaderBottom">
        <img src="Assets/main/home.png" />
        <p>30-35 mins to Home</p>
      </div>
    </div>
  );
};

export default HeaderCheckout;
