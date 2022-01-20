import React, { Component } from "react";

class AddStatus extends Component {
	render() {
		return <>{this.props.status ? "Added" : "Add me"}</>;
	}
}

export default AddStatus;
