import React from 'react'
import "./Header.css"

const Header=()=>{
  return(
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
  )
}

export default Header;