import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

// Images
import olinCounts from "./imgs/olinCounts.png";

// Components
import Calendar from "./Calendar";
import Counter from "./Counter";
import LatestCount from "./LatestCount";
import LoginDisplay from "./LoginDisplay";
import MessageBoard from "./MessageBoard";
import Dashboard from "./Dashboard";
import AdminTools from "./AdminTools";
import Welcome from "./Welcome";
import CountDisplay from "./CountDisplay";


class Home extends Component {

      constructor(props) {
            super(props);
            this.state = { loginStatus: false, username: "", level: "admin" };

            this.defaultDisplay = this.defaultDisplay.bind(this);
            this.newCountDisplay = this.newCountDisplay.bind(this);
            this.loginBoxDisplay = this.loginBoxDisplay.bind(this);
            this.dashboardDisplay = this.dashboardDisplay.bind(this);
            this.componentWillMount = this.componentWillMount.bind(this);
      }
      componentWillMount() {
            }

      defaultDisplay() {
            ReactDOM.render(<LatestCount />, document.getElementById("mainContent"));
      }
      newCountDisplay() {
            ReactDOM.render(<Counter />, document.getElementById("mainContent"));
      }
      loginBoxDisplay() {
            ReactDOM.render(<LoginDisplay />, document.getElementById("mainContent"));
      }
      dashboardDisplay() {
            ReactDOM.render(<Dashboard />, document.getElementById("mainContent"));
      }

      adminView = () => {
            if (this.state.level == "admin") {
                  return (
                        <AdminTools />
                      );
            }
          };

      render() {
            return (
                  <>
                        <div id="header">
                              <img src={olinCounts} id="mainLogo" alt="logo" />

                              <div id="headerRight">
                                    <div
                                          className="btn-group headerButtonGroup"
                                          role="group"
                                          aria-label="Basic example"
                                    >
                                          <button
                                                type="button"
                                                className="btn btn-primary headerButton"
                                                onClick= {this.defaultDisplay}
                                          >
                                                Home
                                          </button>
                                          <button
                                                type="button"
                                                className="btn btn-primary headerButton"
                                                onClick= {this.dashboardDisplay}      
                                          >
                                                Dashboard Mode
                                          </button>
                                          <button
                                                type="button"
                                                className="btn btn-primary headerButtonNewCount"
                                                id="newCount"
                                                onClick={this.newCountDisplay}
                                          >
                                                Start a new count{" "}
                                          </button>
                                    </div>
                              </div>
                        </div>
                        <div id="flexContainer1">
                              <div id="sidebar">
                              <button
                                          type="button"
                                          className="btn btn-primary sideBarButton"
                                          onClick={this.loginBoxDisplay}
                                    >
                                          Login
                                    </button>
                                    <Welcome username={this.state.username}/>
                                    <div class = "adminView">
                                    <this.adminView />

                                    </div>

                                    <MessageBoard />
                              </div>

                              <div id="mainContent">
                                    <LatestCount />

                              </div>
                        </div>
                  </>
            );
      }
}

export default Home;
