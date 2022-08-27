import React from "react";
import { FooterWrapper } from "./footer.styles";

export default class Footer extends React.Component {
	render() {
		return (
			<FooterWrapper>
				<p>
					Copyrights and trademarks for the books, films, articles, merchandise
					and other promotional materials are held by their respective owners
					and my limited use of these materials is done by permission or is
					allowed under the{" "}
					<a
						href="https://www.law.cornell.edu/uscode/text/17/107"
						alt="Fair use link"
					>
						fair use
					</a>{" "}
					clause of the{" "}
					<a
						href="https://www.law.cornell.edu/uscode/text/17"
						alt="Copyright Act"
					>
						Copyright Act.
					</a>
				</p>
			</FooterWrapper>
		);
	}
}
