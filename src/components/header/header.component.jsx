import React from "react"
import { Link } from "react-router-dom"
import "./header.style.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/sign-in">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Header
