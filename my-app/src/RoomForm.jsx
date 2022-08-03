import React, { Component } from "react";
import axios from "axios";

class RoomForm extends Component {
      constructor(props) {
            super(props);
            this.state = { apiResponse: "" };

            this.sendRoomCounts = this.sendRoomCounts.bind(this);
            // this.componentWillMount = this.componentWillMount.bind(this);
      }

      sendRoomCounts() {
            console.log("room counts");

            let time = document.getElementById("time").value;
            let date = document.getElementById("date").value;
            let skyRoom = document.getElementById("skyRoom").value;
            let room323 = document.getElementById("room323").value;
            let room326 = document.getElementById("room326").value;
            let serenityRoom = document.getElementById("serenityRoom").value;
            let risaLanding = document.getElementById("risaLanding").value;
            let room218 = document.getElementById("room218").value;
            let room217 = document.getElementById("room217").value;
            let room216 = document.getElementById("room216").value;
            let room215 = document.getElementById("room215").value;
            let room214 = document.getElementById("room214").value;
            let room213 = document.getElementById("room213").value;
            let room212 = document.getElementById("room212").value;
            let room211 = document.getElementById("room211").value;
            let room210 = document.getElementById("room210").value;
            let room209 = document.getElementById("room209").value;
            let room208 = document.getElementById("room208").value;
            let room207 = document.getElementById("room207").value;
            let room206 = document.getElementById("room206").value;
            let room205 = document.getElementById("room205").value;
            let room204 = document.getElementById("room204").value;
            let gingkoRoom = document.getElementById("gingkoRoom").value;
            let NWCubbies = document.getElementById("NWCubbies").value;
            let SWCubbies = document.getElementById("room207").value;
            let newman = document.getElementById("newman").value;
            let roomA03 = document.getElementById("roomA03").value;
            let roomA30 = document.getElementById("roomA30").value;
            let roomB24 = document.getElementById("roomB24").value;
            let roomB25 = document.getElementById("roomB25").value;

            let data = {
                  time: time,
                  date: date,
                  skyRoom: skyRoom,
                  room323: room323,
                  room326: room326,
                  serenityRoom: serenityRoom,
                  risaLanding: risaLanding,
                  room218: room218,
                  room217: room217,
                  room216: room216,
                  room215: room215,
                  room214: room214,
                  room213: room213,
                  room212: room212,
                  room211: room211,
                  room210: room210,
                  room209: room209,
                  room208: room208,
                  room207: room207,
                  room206: room206,
                  room205: room205,
                  room204: room204,
                  gingkoRoom: gingkoRoom,
                  NWCubbies: NWCubbies,
                  SWCubbies,
                  SWCubbies,
                  newman: newman,
                  roomA03,
                  roomA03,
                  roomA30: roomA30,
                  roomB24: roomB24,
                  roomB25: roomB25,
            };
            //console.log(data);
            //console.log(JSON.stringify(data));

            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                     console.log(xhttp.responseText);
                     console.log("Success");
                  }
              };

            const url = "http://localhost:5000/getLatestRoomCounts";

            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(data));
      
      }

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
                                    id="time"
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
                                    id="date"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Sky Room{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="skyRoom"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    323{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room323"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    326{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room326"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Risa's Landing{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="risaLanding"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Serenity Room{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="serenityRoom"
                              />
                        </div>
                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    218{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room218"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    217{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room217"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    216{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room216"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    215{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room215"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    214{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room214"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    213{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room213"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    212{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room212"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    211{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room211"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    210{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room210"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    209{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room209"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    208{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room208"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    207{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room207"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    206{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room206"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    205{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room205"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    204{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="room204"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Gingko Room{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="gingkoRoom"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    NW Cubbies{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="NWCubbies"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    SW Cubbies{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="SWCubbies"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    Newman Exploration Center{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="newman"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    A03{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="roomA03"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    A30{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="roomA30"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    B24{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="roomB24"
                              />
                        </div>

                        <div className="input-group mb-3">
                              <span
                                    className="input-group-text counterFormInputBoxes"
                                    id="basic-addon1"
                              >
                                    B25{" "}
                              </span>
                              <input
                                    type="text"
                                    className="form-control counterFormInputBoxes"
                                    placeholder="Count"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="roomB25"
                              />
                        </div>

                        <button
                              type="button"
                              className="btn btn-primary"
                              onClick={this.sendRoomCounts}
                        >
                              Submit{" "}
                        </button>
                  </>
            );
      }
}

export default RoomForm;
