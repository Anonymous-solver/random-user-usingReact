import React, { Component } from 'react';

class User extends Component {
	state = {
		number: ''
	}
	handleShow = (number) => {
		this.setState({number})
	}
	render() { 
		const {email, phone, name, picture} = this.props.user
		const fullName = `${name.title}  ${name.first}  ${name.last}`;
		const userStyle = {
			border : '1px solid lightsalmon',
			margin: '20px',
			borderRadius: '10px',
			padding: '10px',
			display: 'flex',
			width: '40%',
			backgroundColor: 'lightsalmon'
		}
		return (
			<div style = {userStyle}>
				<div style = {{marginTop: '25px'}}>
					<img src={picture.large} alt="null" />
					<h1>{fullName}</h1>
					<h4>{email}</h4>
					<h4>{this.state.number}</h4>
					<button onClick={() => this.handleShow(phone)}>Show Number</button>
					<button onClick={() => this.props.handleAdd(this.props.user)}>Add me</button>
					<button onClick={() => this.props.handleRemove(email)}>Remove</button>
				</div>
			</div>
		);
	}
}
 
export default User;