import { Component } from "react";
import "./FooterStyles.css";

class Footer extends Component {
  render() {
    return (
      <nav className="FooterItems">
        <div className="">
          <div className="footertop">
            <div>
              <h1 className="News">Get Exclusive News</h1>
              <p>Sign up Now!</p>
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
              <button className="sign-up">SIGN UP</button>
            </div>
          </div>
          <div className="footerbottom">
            <div>
              <h1 className="logo1">
                <i className="fa-solid fa-square"></i> ProperT1
              </h1>
            </div>
            <div></div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Footer;
