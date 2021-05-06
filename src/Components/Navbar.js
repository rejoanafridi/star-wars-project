import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
function Navbar() {
	return (
		<div className="nav">
			<a className="logo" src="/#">
                <Link to="/">
				Star Wars
                </Link>
			</a>

			<div className="nav-items">
                <Link to="/">
                <li> <a> Home</a> </li>
                </Link>
                <Link to="/people">

				<li> <a> People</a> </li>
                </Link>
                <Link to="/planets">

                <li> <a> Planets </a> </li>
                </Link>
                
			</div>
		</div>
	);
}

export default Navbar;
