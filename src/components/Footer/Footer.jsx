import { Link } from 'react-router-dom'; 
import './Footer.css'
import logoInverse from'../../assets/img/logo-inverse.png'
import positionIcon from '../../assets/img/position-icon.png'
import phoneIcon from '../../assets/img/phone-icon.png'
import mailIcon from '../../assets/img/mail-icon.png'
import fbIcon from '../../assets/img/facebook-icon.png'
import twitterIcon from '../../assets/img/twitter-icon.png'
import instarIcon from '../../assets/img/instar-icon.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer">
        <Link to={`/`} >
            <img
            className="logo-huddle-last"
            src={logoInverse}
            alt="logo-inverse"
            />
             
         </Link>

        <div className="footer-list">
          <ul className="list">
            <li className="item">
              <img src={positionIcon} alt="position-icon" />
              <a href="#">
              43 Raymouth Rd. Baltemoer, London
              </a>
            </li>

            <li className="item">
              <img src={phoneIcon} alt="phone-icon" />
              <a href="#">+1122 334 455</a>
            </li>

            <li className="item">
              <img src={mailIcon} alt="mail-icon" />
              <a href="#">hththam22@gmail.com</a>
            </li>
          </ul>

          <ul className="list">
            <li className="item">
              <a href="#">About Us</a>
            </li>

            <li className="item">
              <a href="#">What We Do</a>
            </li>

            <li className="item">
              <a href="#">FAQ</a>
            </li>
          </ul>

          <ul className="list">
            <li className="item">
              <a href="#">Movies</a>
            </li>

            <li className="item">
              <a href="#">TV Shows</a>
            </li>

            <li className="item">
              <a href="#">People</a>
            </li>
          </ul>

          <ul className="list list-last">
            <li className="item">
                <a href="#">
                    <img src={fbIcon} alt="fb-icon" />
                </a>
                <a href="#">
                    <img src={twitterIcon} alt="twitter-icon" />
                </a>
                <a href="#">
                    <img src={instarIcon} alt="instar-icon" />
                </a>
              {/* <img src={fbIcon} alt="fb-icon" />
              <img src={twitterIcon} alt="twitter-icon" />
              <img src={instarIcon} alt="instar-icon" /> */}
            </li>

            <li className="item">
              &copy; Copyright 2024 Chickendance. All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
