import { BsFillRecordCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import Header from "../Header/Header";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Fragment } from "react";
import FooterSection from "../FooterSection/Footer";

import "./Home.css";

const renderTopContainer = () => {
  return (
    <div className="top-container">
      <Header />
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
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Need to book multiple shipments?
          </a>
        </div>
        <div className="right-container">
          <img
            className="box"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020325/warehouse-flights---Copy_1_vp9wtn.png"
            alt="box"
          />
          <h3 className="shop">
            Shop anywhere in US let us ship to your doorstep in your country*{" "}
            <span className="tax">Tax free*</span>
          </h3>
          <button className="howit-works">How it works</button>
        </div>
      </div>
    </div>
  );
};

const renderShipForwarding = () => {
  return (
    <div className="ship-container">
      <h1 className="ship-heading">Ship Forwarding</h1>
      <div className="forward-cont">
        <div className="orange-cont">
          <p className="para">Signup & get USA Address </p>
          <img
            className="circles"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276073/Group_72_mkeqj0.png"
            alt="orange"
          />
          <img
            className="orange-icon"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276086/ic_twotone-warehouse_c5spgh.png"
            alt="warehouse"
          />
        </div>
        <div className="blue-cont">
          <img
            className="circles"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276096/Group_75_zc47ai.png"
            alt="orange"
          />
          <img
            className="blue-icon"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276107/Group_78_b772y0.png"
            alt="warehouse"
          />
          <p className="para">Signup & get USA Address </p>
        </div>
        <div className="orange-cont">
          <p className="para">Signup & get USA Address </p>
          <img
            className="circles"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276073/Group_72_mkeqj0.png"
            alt="orange"
          />
          <img
            className="orange-icon"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276117/ph_package-duotone_kdltpk.png"
            alt="warehouse"
          />
        </div>
        <div className="blue-cont">
          <img
            className="circles"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276096/Group_75_zc47ai.png"
            alt="orange"
          />
          <img
            className="blue-icon"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276128/Vector_vqupbq.png"
            alt="warehouse"
          />
          <p className="para">Signup & get USA Address </p>
        </div>
        <div className="orange-cont">
          <p className="para">Signup & get USA Address </p>
          <img
            className="circles"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276073/Group_72_mkeqj0.png"
            alt="orange"
          />
          <img
            className="orange-icon"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276165/Mask_group_g8fyja.png"
            alt="warehouse"
          />
        </div>
        <div className="blue-cont">
          <img
            className="circles"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276096/Group_75_zc47ai.png"
            alt="orange"
          />
          <img
            className="blue-icon"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276174/ic_twotone-support-agent_qtcwzw.png"
            alt="warehouse"
          />
          <p className="para">Signup & get USA Address </p>
        </div>
      </div>
      <div>
        <button className="know-more">Know more</button>
        <button className="start-shipping">Start shipping</button>
      </div>
    </div>
  );
};

const renderYouAreInGoodHands = () => {
  return (
    <dvi className="h-cont">
      <div className="images-cont">
        <div className="polo-cont">
          <img
            className="us-polo"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136501/_1526408913_622_Ralph-Lauren-Stacked-Logo_2917332a71fa-mobile_1_ca6xpl.png"
            alt="polo"
          />
        </div>
        <div className="e-bay-cont">
          <img
            className="e-bay"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136705/2560px-EBay_logo_1_binrmt.png"
            alt="polo"
          />
        </div>
        <div className="polo-cont">
          <img
            className="tom-ford"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136749/Tom-Ford-Banner_1_wkseoe.png"
            alt="polo"
          />
        </div>
        <div className="e-bay-cont">
          <img
            className="calvin-klein"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136824/Calvin-Klein-logo_1_ac0ggc.png"
            alt="polo"
          />
        </div>
        <div className="untunkit-cont">
          <img
            className="untunkit"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136756/download_1_tsb5yl.png"
            alt="polo"
          />
        </div>
        <div className="polo-cont">
          <img
            className="frye"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136760/download_2_alfr1p.png"
            alt="polo"
          />
        </div>
        <div className="polo-cont">
          <img
            className="apple"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136832/Apple_logo_black_1_wmyeoq.png"
            alt="polo"
          />
        </div>
        <div className="walmart-cont">
          <img
            className="walmart"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136773/cdn.corporate_1_u6x5fc.png"
            alt="polo"
          />
        </div>
        <div className="e-bay-cont">
          <img
            className="nord-strom"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676136800/Nordstrom-logo-1_1_chthel.png"
            alt="polo"
          />
        </div>
      </div>
      <div className="good-hands-cont">
        <h1 className="h-heading">You're In Good Hands</h1>
        <p className="h-para">
          We're happy when our customers are happy. We pride ourselves on going
          above and beyond.
        </p>
        <h3 className="help-heading">Get the help you need, 24/7</h3>
        <p className="h-para">
          We work around the clock to get your shipments to the right place at
          the right time. Our support center is seond -to-none.{" "}
          <span className="h-span">See our support center.</span>
        </p>
        <h3 className="help-heading">Become a shipping expert</h3>
        <p className="h-para">
          Our resourse library has everything you've ever wanted to know about
          shipping. <span className="h-span">Explore resourse hub.</span>
        </p>
        <div>
          <button className="know-more">Know more</button>
          <button className="start-shipping">Shopnow</button>
        </div>
      </div>
    </dvi>
  );
};

const renderOurPartners = () => {
  return (
    <div className="partners-cont">
      <h1 className="partner-heading">Our Partners</h1>
      <div className="partners">
        <RiArrowDropLeftLine className="left-arrow" />
        <div className="partner">
          <img
            className="dhl"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675669015/dhl_logo-removebg-preview_hxy7l2.png"
            alt="dhl"
          />
        </div>
        <div className="partner">
          <img
            className="fedex"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675669357/image_2_s6_xvutvp.png"
            alt="fedex"
          />
        </div>
        <div className="partner">
          <img
            className="ups"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675669363/1200px-United_Parcel_Service_logo_2014_1_s7_dpkjwo.png"
            alt="ups"
          />
        </div>
        <div className="partner">
          <img
            className="aramex"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675669371/image_4_s8_xwagrc.png"
            alt="aramex"
          />
        </div>
        <div className="partner">
          <img
            className="usps"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675669376/fgfg_1_s9_pfhuwh.png"
            alt="usps"
          />
        </div>
        <RiArrowDropRightLine className="right-arrow" />
      </div>
    </div>
  );
};

const renderDestinationsServed = () => {
  return (
    <div className="destinations-cont">
      <div className="map-cont">
        <h1 className="destination-heading">Destinations Served</h1>
        <p className="destination-para">
          Unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <img
          className="map-img"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675674079/world-map_1_map_szsd9l.png"
          alt="map"
        />
      </div>

      <div className="destinations-list">
        <RiArrowDropLeftLine className="arrow-left" />
        <div className="destination-delhi">
          <img
            className="destination-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675674829/Rectangle_4_delhi_ntafru.png"
            alt="delhi"
          />
          <h2 className="delhi-name">Delhi</h2>
          <p className="delhi-cost">Lowest price $10.00</p>
        </div>
        <div className="destination-others">
          <img
            className="destination-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675674847/Rectangle_5_new_j8rxca.png"
            alt="newyork"
          />
          <h2 className="others-name">Newyork</h2>
          <p className="others-cost">Lowest price $25.00</p>
        </div>
        <div className="destination-others">
          <img
            className="destination-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675674839/Rectangle_6_lon_dnszux.png"
            alt="london"
          />
          <h2 className="others-name">London</h2>
          <p className="others-cost">Lowest price $15.00</p>
        </div>
        <div className="destination-others">
          <img
            className="destination-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675674853/Rectangle_6_frank_trlnnz.png"
            alt="franfurt"
          />
          <h2 className="others-name">Frankfurt</h2>
          <p className="others-cost">Lowest price $18.00</p>
        </div>
        <div className="destination-others">
          <img
            className="destination-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675674859/Rectangle_5_amster_otipgb.png"
            alt="amsterdam"
          />
          <h2 className="others-name">Amsterdam</h2>
          <p className="others-cost">Lowest price $17.00</p>
        </div>
        <RiArrowDropRightLine className="arrow-right" />
      </div>
    </div>
  );
};

const renderAchievements = () => {
  return (
    <div className="achivements-cont">
      <div className="blog">
        <img
          className="truck"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675678025/color_truck_flwkh9.png"
          alt="truck"
        />
        <h1 className="value">50K+</h1>
        <p className="value-para">Deliveries</p>
      </div>
      <div className="blog">
        <img
          className="truck"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675678477/color_people_wafkfv.png"
          alt="people"
        />
        <h1 className="value">2M+</h1>
        <p className="value-para">Customers Served</p>
      </div>
      <div className="blog">
        <img
          className="truck"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675678035/color_globe_cg9hwd.png"
          alt="globe"
        />
        <h1 className="value">50+</h1>
        <p className="value-para">Countries Served</p>
      </div>

      <div className="blog">
        <img
          className="truck"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675678477/color_people_wafkfv.png"
          alt="people"
        />
        <h1 className="value">5</h1>
        <p className="value-para">Partners</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <Fragment>
      {renderTopContainer()}
      {renderShipForwarding()}
      {renderYouAreInGoodHands()}
      {renderOurPartners()}
      {renderDestinationsServed()}
      {renderAchievements()}
      <FooterSection />
    </Fragment>
  );
};

export default HomePage;
