import Start from "./Start";

export default function Footer() {
  return (
    <footer data-aos="fade-down">
      <div className="footer">
        <Start />

        <div className="footer-container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-6 col-lg-2">
              <h4>Oya Health</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/approach">Our Approach</a>
                </li>
                <li>
                  <a href="#">Science</a>
                </li>
                <li>
                  <a href="/partner-with-us">Partner with us</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-6 col-lg-2">
              <h4>Get Started</h4>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-6 col-lg-2">
              <h4>Contact</h4>
              <ul>
                <li>
                  <p>
                    228 Park Avenue S,
                    <br />
                    New York, 10003 USA
                  </p>
                </li>
                <li>
                  <a href="tel:+19176478314">(917) 647-8314</a>
                </li>
                <li>
                  <a href="mailto:weare@oya.health">weare@oya.health</a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-6 col-lg-4 address">
              <h4>Physical Locations</h4>
              <ul>
                <li>
                  <p>
                    <span>New York:</span>
                    <span>
                      iLa Spa <br />
                      Lotte Palace Hotel,
                      <br />
                      455 Madison Avenue,
                      <br />
                      New York
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Miami Beach:</span>
                    <span>
                      Carillion Hotel
                      <br />
                      6801 Collins Ave,
                      <br />
                      Miami Beach
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="col-6 col-lg-2">
              <h4>Socials</h4>
              <ul className="socials">
                <li>
                  <a href="#">
                    <img src="/assets/img/insta.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/img/git.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/img/facebook.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/img/twitter.svg" />
                  </a>
                </li>
              </ul>
            </div>

            {/* COPYRIGHT */}
            <div className="col-12 copy-right">
              <div className="row">
                <div className="col-12 col-lg-9">
                  <p>© 2024 OYA. All Rights Reserved</p>
                </div>
                <div className="col-12 col-lg-3 text-lg-right">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
