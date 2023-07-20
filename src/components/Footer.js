import { Component } from "react";
import "./FooterStyles.css";

class Footer extends Component {
  render() {
    return (
      <nav className="FooterItems">
        <div className="">
          <div className="footerleft">
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
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Footer;