import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

class Spinner extends React.Component {
	render() {
		return (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		);
	}
}

export default Spinner;
