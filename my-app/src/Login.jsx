import React, { Component } from "react";

class Login extends Component {

      render() {
            return (
                  <>
                        <div class="newCountDisplay">

                              <div class="counterForm">
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
                                          />
                                    </div>

                                    <button
                                          type="button"
                                          className="btn btn-primary"
                                    >
                                          Submit{" "}
                                    </button>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Login;
