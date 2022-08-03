import React, { Component } from "react";
import ReactDOM from "react-dom";
import FullBuildingForm from "./FullBuildingForm";
import RoomForm from "./RoomForm";

class Counter extends Component {
      constructor(props) {
            super(props);
            this.state = { count: 0, countType: "full-building" };

            this.increaseCount = this.increaseCount.bind(this);
            this.decreaseCount = this.decreaseCount.bind(this);
            this.resetCount = this.resetCount.bind(this);
            this.displayFullBuildingForm = this.displayFullBuildingForm.bind(this);
            this.displayRoomForm = this.displayRoomForm.bind(this);
      }

      increaseCount() {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
      }

      decreaseCount() {
            if (this.state.count != 0) {
                  this.setState({ count: this.state.count - 1 });
                  console.log(this.state.count);
            }
      }

      resetCount() {
            this.setState({ count: 0 });
            console.log(this.state.count);
      }

      displayFullBuildingForm() {
            ReactDOM.render(<FullBuildingForm />, document.getElementById("formSpace"));
      }

      displayRoomForm() {
            ReactDOM.render(<RoomForm />, document.getElementById("formSpace"));
      }
      render() {
            return (
                  <>
                        <div className="newCountDisplay">
                              <div className="counterWidget">
                                    <div className="d-grid countTypeButtonGroup">
                                          <button
                                                className="btn btn-primary countTypeButton"
                                                type="button"
                                                onClick={
                                                      this.displayFullBuildingForm
                                                }
                                          >
                                                Full Building
                                          </button>
                                          <button
                                                className="btn btn-primary countTypeButton"
                                                type="button"
                                                onClick={
                                                      this.displayRoomForm
                                                }
                                          >
                                                Room Specific
                                          </button>
                                    </div>
                                    <div className="widgetCountDisplay">
                                          <p className="widgetCountDisplayText">
                                                {" "}
                                                {this.state.count}{" "}
                                          </p>
                                    </div>

                                    <div className="widgetButtons">
                                          <div
                                                className="btn-group"
                                                role="group"
                                                aria-label="Basic mixed styles example"
                                          >
                                                <button
                                                      type="button"
                                                      className="btn btn-danger  counterActionButton"
                                                      onClick={
                                                            this.decreaseCount
                                                      }
                                                >
                                                      -
                                                </button>
                                                <button
                                                      type="button"
                                                      className="btn btn-warning  counterActionButton"
                                                      onClick={this.resetCount}
                                                >
                                                      Reset
                                                </button>
                                                <button
                                                      type="button"
                                                      className="btn btn-success  counterActionButton"
                                                      onClick={
                                                            this.increaseCount
                                                      }
                                                >
                                                      +
                                                </button>
                                          </div>
                                    </div>
                              </div>
                              <div className="counterForm" id = "formSpace">
                              </div>
                        </div>
                  </>
            );
      }
}

export default Counter;
