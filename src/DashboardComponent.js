import React, { Component } from "react";
import WrapperComponent from "./WrapperComponent";
import UserComponent from "./UserComponent";
import styles from "./modules/DashboardComp.module.css";
import { Fragment } from "react";

const lightGreen = "#d2ceb7"; // color for toggle colors userlist
const black = "#34343f"; // color for toggle colors userlist

/**
 * @desc class dashboardcompomnent - holds a state with user, usercolor and value from input.
 * includes add users, delete users, and toggle colors. Renders wrapper-components and usercomponent.
 */
export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ["Lilla My"],
      color: lightGreen,
      value: "",
    };
  }

  /**
   * @desc handleChange - takes the text written in input as an event and sets the value state to it.
   */
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  /**
   * @desc addNewUser - add a new user by creating a variable that creates a copy of the state.
   */
  addNewUser = (value) => {
    let users = [...this.state.user, value];
    this.setState({ user: users });
  };

  //delete the last added user in list using slice method
  deleteUser = () => {
    let deleteTheLastUser = this.state.user.slice(0, -1);
    this.setState({
      user: deleteTheLastUser,
    });
  };

  /**
   * @desc toggleColors - checks if state color is lightgreen. if yes, change it to black.
   * If black change it to lightgreen.
   * set state to current change.
   */
  toggleColors = () => {
    const newColor = this.state.color === lightGreen ? black : lightGreen;
    this.setState({ color: newColor });
  };

  render() {
    //maps throug user in state and returns a usercomponent for every user.
    const userList = this.state.user.map((user, i) => {
      return (
        <UserComponent key={i}>
          <Fragment>{user}</Fragment>
        </UserComponent>
      );
    });

    return (
      <div className={styles.dashBoard}>
        <WrapperComponent>
          <h2>Userlist</h2>
          {/* //renders a list with users */}
          <ul key={userList} style={{ color: this.state.color, padding: "0" }}>
            {userList}
          </ul>
          <button className={styles.button} onClick={this.toggleColors}>
            Toggle Colors
          </button>
        </WrapperComponent>

        <WrapperComponent>
          <div>
            <h2>Add a user</h2>
            <input
              className={styles.input}
              type="text"
              value={this.state.value}
              placeholder="Write username here..."
              onChange={this.handleChange}
            ></input>

            <button
              className={styles.button}
              onClick={() => this.addNewUser(this.state.value)}
            >
              Add a new user
            </button>

            <button className={styles.button} onClick={this.deleteUser}>
              Delete user
            </button>
          </div>
        </WrapperComponent>
      </div>
    );
  }
}
