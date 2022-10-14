import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";

function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sample">Custom Dashboard</Link>
            </li>
            {/* <li>
              <Link to="/sample2">Single Sheet</Link>
            </li>
            <li>
              <Link to="/sample3">Sample Dashboard</Link>
            </li> */}
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default Header;
