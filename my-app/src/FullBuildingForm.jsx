import React, { Component } from "react";
import ReactDOM from "react-dom";
import LatestCount from "./LatestCount";

class FullBuildingForm extends Component {

      constructor(props) {
            super(props);
            this.state = {updateReceived: true};

            this.sendFloorCounts = this.sendFloorCounts.bind(this);
           // this.componentWillMount = this.componentWillMount.bind(this);
      }

      sendFloorCounts() {
            let time = document.getElementById("time").value;
            let date = document.getElementById("date").value;
            let floor3 = document.getElementById("floor3").value;
            let floor2 = document.getElementById("floor2").value;
            let floor1 = document.getElementById("floor1").value;
            let floorA = document.getElementById("floorA").value;
            let floorB = document.getElementById("floorB").value;

            let data = {
                  time: time,
                  date: date,
                  floor3: floor3,
                  floor2: floor2,
                  floor1: floor1,
                  floorA: floorA,
                  floorB: floorB
            }
            console.log(data);

            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                     console.log(xhttp.responseText);
                     console.log("Success");
                  }
              };

            const url = "http://localhost:5000/getLatestFloorCounts";

            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(data));

            console.log("nhatty man");
            ReactDOM.render(<LatestCount />, document.getElementById("mainContent"));
      }

      /*
      componentWillMount() {
            this.sendFloorCounts();
            }
            */

      render() {
            return (
                  <>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text  counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Time{" "}
                              </span>
                              <input
                                    type="time"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "time"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Date{" "}
                              </span>
                              <input
                                    type="date"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "date"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Level 3{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "floor3"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Level 2{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "floor2"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Level 1{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "floor1"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Level A{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "floorA"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Level B{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id = "floorB"
                              />
                        </div>

                        <button type="button" className="btn btn-primary" onClick = {this.sendFloorCounts}>
                              Submit{" "}
                        </button>
                  </>
            );
      }
}

export default FullBuildingForm;
