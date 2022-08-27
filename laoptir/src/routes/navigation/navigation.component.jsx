import React from "react";
import { Link } from "react-router-dom";
import { NavigationWrapper } from "./navigation.styles";

export class Navigation extends React.Component {
	render() {
		return (
			<NavigationWrapper>
				<h1 className="big-heading">
					L<span className="big-heading-api">a</span>o
					<span className="big-heading-api">p</span>t
					<span className="big-heading-api">i</span>r
				</h1>
				<div className="nav-links">
					<Link to={"/"}>Home</Link>
					<Link to={"/characters"}>Characters</Link>
					<Link to={"/movies"}>Movies</Link>
				</div>
			</NavigationWrapper>
		);
	}
}
