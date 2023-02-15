import {Link} from "react-router-dom"

import { BsFillRecordCircleFill, BsCart2, BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GiWeight } from "react-icons/gi";

import "./index.css";


const TopContainer = () => (
  <div className="top-container">
    <div className="header">
    <Link to = "/">
      <img
        className="logo"
        src="https://res.cloudinary.com/duapyyftc/image/upload/v1675420710/SnipBiz-Logos_1_s5_ii6rte.png"
        alt="Logo"
      />
      </Link>
      <ul className="list-container">
      <Link to = "/howitWorks">
      <li  className="list-item">How It Works</li>
      </Link>
      <Link to = "/partners">
      <li  className="list-item">Partners</li>
      </Link>
      <li  className="list-item">Tracking</li>
      <li  className="list-item">FAQ</li>
      <li  className="list-item">US Debit card</li>
      <li  className="list-item">Contact</li>
      </ul>
      <button className="login-button" type="button">
        Login/Register
      </button>
      <BsCart2 className="cart" />
      <span className="en">en <BsFillCaretDownFill/></span>
      <BsSearch/>

    </div>
    <div className="main-container">
      <div className="left-container">
        <h3 className="shop">
        Ship your package with best rates from reliable shipping companies.
        </h3>
        <img
          className="shipping"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020937/discount-design-copy_2_ipmdoe.png"
          alt="off"
        />
        <div className="input-container">
          <BsFillRecordCircleFill />
          <p className="input-text">Enter pickup location</p>
        </div>
        <img
          className="line"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675425943/Line_4_s7_mkqqvm.png"
          alt="line"
        />
        <div className="input-container">
          <MdLocationOn className="icon" />
          <p className="input-text">Enter destination</p>
        </div>
        <div className="input-container">
          <GiWeight />
          <p className="input-text">Enter Approximate Weight</p>
        </div>
        <p className="question">
          Do you need help for get approximate weight and measurements?
        </p>
        <div className="stars">
          <button className="get-quote">Get Quote</button>
          <img
            className="star-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675425560/Untitled-1_1_s6_vughy5.png"
            alt="star"
          />
        </div>
      </div>
      <div className="right-container">
      <img
      className="box"
      src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020325/warehouse-flights---Copy_1_vp9wtn.png"
      alt="box"
    />
        <h3 className="shop">
          Shop anywhere in US let us ship to your doorstep in your country* <span className="tax">Tax free*</span>
        </h3>
        <button className="howit-works">How it works</button>
      </div>
    </div>
  </div>
);

export default TopContainer;
