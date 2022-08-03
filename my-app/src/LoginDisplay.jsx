import React, { Component } from "react";
import olinCounts from "./imgs/olinCounts.png";
import ReactDOM from "react-dom";


class LoginDisplay extends Component {
      render() {
            return (
                  <>

                        <div id="loginDisplay" className="loginDisplay"> 
                              <div className = "loginBox"> 
                                    <input type="text" class="form-control loginFormInputBoxes" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <input type="text" class="form-control loginFormInputBoxes" placeholder="Password" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                    <button type="button" class="btn btn-primary  loginButton">Submit</button>
                                    <button type="button" class="btn btn-warning">Create a new account</button>
                              </div>
                        </div>
                        <div id="mainContent">
                                    
                              </div>
                  </>
            );
      }
}

export default LoginDisplay;