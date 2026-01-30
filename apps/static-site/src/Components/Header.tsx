import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Our Approach", path: "/approach" },
  { label: "Partner with Us", path: "/partner-with-us" },
  // { label: "Learn", path: "/learn" },
];

export default function Header() {
  const location = useLocation();
  const isLightHeader =
    location.pathname.startsWith("/learn") ||
    location.pathname.startsWith("/approach") ||
    location.pathname.startsWith("/partner-with-us");

  const closeMobileNav = () => {
    const nav = document.getElementById("navbarText");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler) toggler.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <section
      className={`main-header ${isLightHeader ? "main-header--dark" : ""}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src={
                  isLightHeader
                    ? "/assets/img/dark-logo.png"
                    : "/assets/img/Logo.svg"
                }
                alt="OYA Health Logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <NavLink
                      className={({ isActive }) =>
                        ["nav-link", isActive ? "active" : ""].join(" ").trim()
                      }
                      to={item.path}
                      onClick={closeMobileNav}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div
                className={`right-menus ${isLightHeader ? "right-menus--dark" : ""}`}
              >
                {/* <a href="#" className="member-links" onClick={closeMobileNav}>
                  I'm a member
                </a> */}
                <a
                  href="https://form.typeform.com/to/FUJjZtpw"
                  className="get-started-btn black"
                  onClick={closeMobileNav}
                >
                  Get Started
                  <img src="/assets/img/partner/line-arrow-right.svg" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
