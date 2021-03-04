import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-5 col-sm-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-4">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>: 011324
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:mymohamedgohar@gmail.com">gmail</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center d-flex justify-content-end">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook ml-1"
                href="http://www.facebook.com/profile.php?id="
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin ml-1"
                href="http://www.linkedin.com/in/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter ml-1"
                href="http://twitter.com/"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>&copy; Copyright 2021 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
