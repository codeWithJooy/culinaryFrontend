import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <div className="headerImg">
          <img src="assets/main/user.jpg" />
        </div>
        <div className="headerUser">
          <div className="userGreet">
            <p>Hello Amigo,</p>
          </div>
          <div className="headerName">
            <div className="userName">
              <p>Abhi Hazra</p>
            </div>
          </div>
        </div>
        <div className="headerIcons">
          <div className="headerIconUnit">
            <img src="assets/header/bell.png" />
          </div>
          <div className="headerIconUnit">
            <img src="assets/header/heart.png" />
          </div>
        </div>
      </div>
      <div className="search">
        <div className="searchContainer">
          <img src="assets/header/search.png" />
          <input placeholder="Search For Food" />
        </div>
      </div>
      <div className="mainScroll">
        <div className="mainScrollCard">
          <img src="Assets/main/restaurant.jpg" />
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>Categories</p>
        </div>
        <div className="categorySection">
          <div className="categoryUnit">
            <img src="Assets/main/restaurant.jpg" />
            <div className="categoryUnitText">
              <p>Food</p>
            </div>
          </div>
          <div className="categoryUnit">
            <img src="Assets/main/restaurant.jpg" />
            <div className="categoryUnitText">
              <p>Food</p>
            </div>
          </div>
          <div className="categoryUnit">
            <img src="Assets/main/restaurant.jpg" />
            <div className="categoryUnitText">
              <p>Food</p>
            </div>
          </div>
          <div className="categoryUnit">
            <img src="Assets/main/restaurant.jpg" />
            <div className="categoryUnitText">
              <p>Food</p>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>Recommended</p>
        </div>
      </div>
      <div className="itemCard">
        <div className="itemDetails">
          <div className="itemCardTop">
            <img src="Assets/main/nonVeg.png" />
            <p>Best Seller</p>
          </div>
          <div className="itemCardName">
            <p>Manchurian Chicken (12 pieces)</p>
          </div>
          <div className="itemCardName">
            <p>Rs 245</p>
          </div>
          <div className="itemCardRating">
            <img src="Assets/main/star.png" />
            <p className="ratingP">4.4</p>
            <p>(253)</p>
          </div>
        </div>
        <div className="itemCardImg">
          <img src="Assets/main/restaurant.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Main;
