import React, { Component } from "react";

class Team extends Component {
	//   componentDidMount() {
	//     console.log("Did Mount");
	//   }
	//   componentDidUpdate() {
	//     console.log("Did Update");
	//   }
	//   componentWillUnmount() {
	//     console.log("Will Unmount");
	//   }
	render() {
		const { name, email } = this.props.user;
		const fullName = `${name.title}  ${name.first}  ${name.last}`;
		return (
			<>
				<div>
					<li>
						{fullName}
						<span style={{ marginLeft: "5px" }}>
							<button
								onClick={() => this.props.handleRemoveTM(email)}
							>
								Remove
							</button>
						</span>
					</li>
					<br />
				</div>
			</>
		);
	}
}

export default Team;
