import React, { Component } from "react";
import ReactDOM from "react-dom";
import LatestCount from "./LatestCount";
import olinCounts from "./imgs/olinCounts.png";

class Dashboard extends Component {
      constructor(props) {
            super(props);

            this.state = {
                  NWCubbies: 0,
                  SWCubbies: 0,
                  gingkoRoom: 0,
                  roomA03: 0,
                  roomA30: 0,
                  newman: 0,
                  skyRoom: 0,
                  risaLanding: 0,
                  room326: 0
            };

            this.closeDashboard = this.closeDashboard.bind(this);
            this.getLatestRoomCounts = this.getLatestRoomCounts.bind(this);
            this.setDisplayStates = this.setDisplayStates.bind(this);
            this.adjustBars = this.adjustBars.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this);
      }

      getLatestRoomCounts() {
            fetch("http://localhost:5000/sendLatestRoomCounts")
                  .then(res => res.text())
                  .then(res => this.setDisplayStates(res)); 
      }

      setDisplayStates(response) {

            let responseArray = JSON.parse(response);
            let length = responseArray.length;
            let latestCount = responseArray[length-1];


            this.setState({
                  NWCubbies: latestCount.NWCubbies,
                  SWCubbies: latestCount.SWCubbies,
                  gingkoRoom: latestCount.gingkoRoom,
                  roomA03: latestCount.roomA03,
                  roomA30: latestCount.roomA30,
                  newman: latestCount.newman,
                  skyRoom: latestCount.skyRoom,
                  risaLanding: latestCount.risaLanding,
                  room326: latestCount.room326
            })
            this.adjustBars();
            console.log(this.state);

      }

      adjustBars() {

            let names = ['NWCubbies', 'SWCubbies', 'gingkoRoom', 'roomA03', 'roomA30', 'newman', 'skyRoom', 'risaLanding', 'room326'];

            let percentageFull = new Map([
                  ["NWCubbies", this.state.NWCubbies/24],
                  ["SWCubbies", this.state.SWCubbies/61],
                  ["gingkoRoom", this.state.gingkoRoom/16],
                  ["roomA03", this.state.roomA03/39],
                  ["roomA30", this.state.roomA30/15],
                  ["newman", this.state.newman/40],
                  ["skyRoom", this.state.skyRoom/24],
                  ["risaLanding", this.state.risaLanding/36],
                  ["room326", this.state.room326/18]
            ]);

            console.log(percentageFull);

            for (let i = 0; i < names.length; i++) {

                  let assignment;
                  if (percentageFull.get(names[i]) > 0.75) {
                        assignment = "w3-high";
                  } else if (percentageFull.get(names[i]) < 0.25) {
                        assignment = "w3-low";
                  } else {
                        assignment = "w3-mid";
                  }

                  document.getElementById(names[i]).className = assignment;
                  document.getElementById(names[i]).style.width = `${percentageFull.get(names[i])*100}%`;
            }

      }

      closeDashboard() {
            ReactDOM.render(
                  <LatestCount />,
                  document.getElementById("mainContent")
            );
      }

      componentDidMount() {
            this.getLatestRoomCounts();

      }
                  
      
      render() {
            return (
                  <>
                        <div className="dashboard">
                              <div className="dashboardHeader">
                                    <img
                                          src={olinCounts}
                                          class="dashboardLogo"
                                          alt="logo"
                                    />
                                    <button
                                          type="button"
                                          class="btn btn-danger dashboardCloseButton"
                                          onClick={this.closeDashboard}
                                    >
                                          X
                                    </button>
                              </div>

                              <div class="dashboardDisplayContainer">
                                    <div class="dashboardDisplay">
                                          <h2> NW Cubbies </h2>
                                          <div class="w3-border">
                                           <div id = "NWCubbies" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                           <h3> SW Cubbies </h3>
                                          <div class="w3-border">
                                           <div id = "SWCubbies" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                    <h3> Gingko Room </h3>
                                          <div class="w3-border">
                                           <div id = "gingkoRoom" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                    <h3> A03 </h3>
                                          <div class="w3-border">
                                           <div id = "roomA03" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                    <h3> A30 </h3>
                                          <div class="w3-border">
                                           <div id = "roomA30" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                    <h3> Newman Exploration Center </h3>
                                          <div class="w3-border">
                                           <div id = "newman" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                    <h3> Risa's Landing </h3>
                                          <div class="w3-border">
                                           <div id = "risaLanding" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    <div class="dashboardDisplay">
                                    <h3> Sky Room </h3>
                                          <div class="w3-border">
                                           <div id = "skyRoom" class="w3-mid"></div>
                                          </div>
                                    </div>

                                    
                                    <div class="dashboardDisplay">
                                    <h3> 326 (Graduate-Study) </h3>
                                          <div class="w3-border">
                                           <div id = "room326" class="w3-mid"></div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Dashboard;
