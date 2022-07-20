import React from "react";

export default function Footer() {
  return (
    <div>
      
      <div
        className="footer w-f">
        <div className="footer-title w-f d-flx-jc-cen">
          <img src="./Imagesss/footer-heading.png" alt="" />
        </div>
        <div className="footer-social-media w-f d-flx-jc-cen">
          <img src="./Imagesss/facebook.png" alt="" />
          <img className="footer-twiter" src="./Imagesss/twitter.png" alt="" />
          <img src="./Imagesss/linkedin.png" alt="" />
        </div>
        <div className="footer-nav  d-flx-jc-cen">
          <ul className="d-flex">
            <li>About Us</li>
            <li>Advertise with us</li>
            <li>Contact Us</li>
            <li>Copyright</li><br />
            <li>Privecy Policy</li>
            <li>Terms of use</li>
            <li>Company Listing</li>
            <li>Tag Listing</li>
          </ul>
        </div>
        <div className="our-product w-f d-flx-jc-cen">
          <ul className="d-flex">
            <li>Our Product</li>
            <li>VCCircle</li>
            <li>TechCircle</li>
            <li>Events</li>
            <li>Training</li>
            <li>VCCEdge</li>
            <li>SalesEdge</li>
            <li>PartnerEdge</li>
            <li>Edge Inside</li>
          </ul>
        </div>
        <div className="copyright d-flx-jc-cen">
          
        <p>Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
}
