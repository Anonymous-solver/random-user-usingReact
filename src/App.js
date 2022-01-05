import React, { Component } from "react";
import Team from "./components/Team/Team";
import User from "./components/User/User";

class App extends Component {
  state = {
    users: [],
    team: [],
  };

  handleFetch = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.results });
      });
  };

  handleAdd = (User) => {
	let team = [...this.state.team]
	const exist = team.find(user => user.email === User.email)
	if (exist !== undefined) return
    team = [...this.state.team, User];
    this.setState({ team });
  };

  handleRemove = (email) => {
    let users = [...this.state.users];
    users = users.filter((user) => user.email !== email);
    this.setState({ users });
  };

  handleRemoveTM = (email) => {
	let team = [...this.state.team];
	team = team.filter(user => user.email !== email)
    this.setState({ team });
  }

  render() {
    const teamStyle = {
      border: "1px solid lightsalmon",
      margin: "20px",
      borderRadius: "10px",
      padding: "10px",
      display: "flex",
      width: "40%",
      backgroundColor: "lightsalmon",
    };
    return (
      <>
        <button onClick={this.handleFetch}>Load User</button>
        <div style={teamStyle}>
          <div style = {{marginTop: '25px'}}>
            <h2>Team Members: {this.state.team.length}</h2>
            {
				this.state.team.map((user) => <Team key = {user.email} handleRemoveTM={this.handleRemoveTM} user = {user} ></Team>)
			}
          </div>
        </div>

        {this.state.users.length > 0 && (
          <ul>
            {this.state.users.map((user) => {
              // console.log(user)
              return (
                <User
                  key={user.email}
                  handleAdd={this.handleAdd}
                  handleRemove={this.handleRemove}
                  user={user}
                ></User>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default App;
