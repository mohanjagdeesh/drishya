import {BsTwitter , BsFacebook , BsInstagram , BsYoutube} from "react-icons/bs"


import "./index.css"

const FooterSection = () => {
    
    const aboutSection = () => {
        const aboutList = ["HOME" , "ABOUT" , "HOW IT WORKS" , "FAQ" , "BLOG" , "CONTACT"]
        return (
            <div className="footer-blog">
                <h4 className="list-head">ABOUT</h4>
                <hr className="h-rule"/>
            <ul className="list">
                {aboutList.map(eachOne => (
                    <li className="list-items">{eachOne}</li>
                ))}
            </ul>
            </div>
        )
    }

    const siteMap = () => {
        const siteMapList = ["PRESS" , "MEDIA" , "CAREERS" , "PARTNERS" , "REVIEWS/CUSTOMER STORIES" , "VOLUMETRIC WEIGHT" , "CALCULATOR"]
        return (
            <div className="footer-blog">
                <h4 className="list-head">SITEMAP</h4>
                <hr className="h-rule"/>
            <ul className="list">
                {siteMapList.map(eachOne => (
                    <li className="list-items">{eachOne}</li>
                ))}
            </ul>
            </div>
        )
    }

    const shipForwarding = () => {
        const shipForwardingList = ["PROCESSING CHARGES" , "PROHIBITED ITEMS" , "ASSISTED PURCHASE" , "PACK N SHIP IN ONE BOX" , "US DEBIT CARD" , "AFFILIATE PROGRAM" , "LIMITS OF LIABILITY"]
        return (
            <div className="footer-blog">
                <h4 className="list-head">SHIP FORWARDING</h4>
                <hr className="h-rule"/>
            <ul className="list">
                {shipForwardingList.map(eachOne => (
                    <li className="list-items">{eachOne}</li>
                ))}
            </ul>
            </div>
        )
    }

    const payWithConfidence = () => (
       <div className="footer-blog">
        <h4 className="list-head">PAY WITH CONFIDENCE</h4>
        <hr className="h-rule"/>
        <div className="paymentSection">
            <div className="payment-types">
                <img className="payment-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1676026868/PayPal.svg_xsiehg.png" alt = "paypal"/>
                <img className="payment-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675746921/apple_pay_logo_akcof1.png" alt = "applepay"/>
                <img className="payment-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1676026137/American-Express-Logo-PNG-Image_bxuz9g.png" alt = "american"/>
            </div>
            <div className="payment-types"> 
                <img className="payment-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675746902/visa_master_card_p74e6i.png" alt = "visa"/>
                <img className="payment-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675746927/alipay_logo_gfgbzc.png" alt = "alipay"/>
                <img className="payment-img" src= "https://res.cloudinary.com/duapyyftc/image/upload/v1676026395/Discover-logo_osfkld.png" alt = "discover"/>
            </div>
        </div>


        </div>
    )


    const legal = () => {
        const legalList = ["LOGIN" , "REGISTER" , "CHANGE/RETURNPOLICY" , "PRIVACY POLICY" , "TERMS & CONDITIONS" , "LEGAL DISCLAIMER"]
        return (
            <div className="footer-blog">
                <h4 className="list-head">LEGAL</h4>
                <hr className="h-rule"/>
            <ul className="list">
                {legalList.map(eachOne => (
                    <li className="list-items">{eachOne}</li>
                ))}
            </ul>
            </div>
        )
    }

    const firstAddress = () => (
        <div className="footer-blog">
            <h4 className="list-head">MARYLAND,USA</h4>
            <hr className="h-rule"/>
            <p className="list-items">CORPORATE HEADQUARTERS <br/> 20059 MATTINGLY TER <br/> GAITHERSBURG, MD 28079<br/> PHONE: +1 732 447 9779</p>
            <div className="share">
            <p className="share-text">SHARE</p>
            <BsFacebook className="share-icon"/>
            <BsTwitter className="share-icon"/>
            <BsInstagram className="share-icon"/>
            <BsYoutube className="share-icon"/>
            </div>
        </div>
    )

    const secondAddress = () => (
        <div className="footer-blog">
            <h4 className="list-head">DELAWARE,USA</h4>
            <hr className="h-rule"/>
            <p className="list-items">CORPORATE HEADQUARTERS <br/> 20059 MATTINGLY TER <br/> GAITHERSBURG, MD 28079<br/> PHONE: +1 732 447 9779</p>
        </div>
    )

    const dataProtection = () => (
        <div className="footer-blog">
            <h4 className="list-head">KNOW YOUR DATA IS PROTECTED</h4>
            <hr className="h-rule"/>
            <div className="data-types">
            <img className="image" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675702473/lets-encrypt_2_encrypt_ogmfbf.png" alt = "encrypt"/>
            <img className="image" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675702480/ssl_1_secure_ccdunn.png" alt = "secure"/>
            </div>
        </div>
    )
    


    return(
        <div className="foot-cont">
        <div className="footer-container">
        {aboutSection()}
        {siteMap()}
        {shipForwarding()}
        {payWithConfidence()}
        {legal()}
        {firstAddress()}
        {secondAddress()}
        {dataProtection()}
        </div>
        <hr className="h-rule-bottom"/>
        <p className="copy-right">Copyright © 2023 SnipBiz. All rights reserved.</p>
        </div>
    )
}


export default FooterSection