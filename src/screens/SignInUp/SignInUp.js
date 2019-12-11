import React, { Component } from "react";
import styles from "./SignInUp.scss";

const divStyle = {
  fontSize: "29px",
  marginBottom: "7px"
};

const colorForm = {
  height: "100vh",
  width: "50vh"
}

class SignInUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false
    };
  }

  
  render() {
    const name = "Nickname";
    const mail = "E-mail";
    const password = "Password";
    const SignIn = "Sign In";
    const SignUp = "Sign Up";
    const { active } = this.state;
    const form = 
      <form className = {styles.signInUp}>
        <div style={divStyle}>{ active ? SignIn : SignUp }</div>
        <label htmlFor = "mail">{mail}</label><input type = "mail" id = "name"/>
        <label htmlFor = "password">{password}</label><input type = "password" id = "password"/>      
        <div className = {styles.signInUp__btns}>
          <input type = "submit" value = { active ? SignIn : SignUp } />
          <input type = "submit" value = { !active ? SignIn : SignUp } />
        </div>
      </form>
    const colorForm = <div style={colorForm}/>

    return (
      <div className = {styles.signInUp}>
        {form}
        {colorForm}
      </div>
    );
  }
}

export default SignInUp;

