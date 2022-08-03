import React, { Component } from "react";

class AdminTools extends Component {
      constructor(props) {
            super(props);
            this.updateGoogleSheet = this.updateGoogleSheet.bind(this);
      }

      updateGoogleSheet() {
            alert("Counts logged to your Google Spreadsheet!");

            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                  if (this.readyState == 4 && this.status == 200) {
                        console.log(xhttp.responseText);
                        console.log("Success");
                  }
            };

            const url = "http://localhost:5000/updateGoogleSheet";

            xhttp.open("POST", url, true);
            xhttp.send("Update the Google Sheet");
      }

      render() {
            return (
                  <>
                        <br></br>
                        <h5> Admin Tools </h5>
                        <button
                              type="button"
                              className="btn btn-success"
                              onClick={this.updateGoogleSheet}
                        >
                              Log Weekly Spreadsheet
                        </button>
                        <br></br>

                        <input
                              type="text"
                              className="form-control messageWidgetInputBoxes"
                              placeholder="Student"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="messageUsername"
                        />
                        <input
                              type="text"
                              className="form-control messageWidgetInputBoxes"
                              placeholder="Message"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="message"
                        />
                        <button type="button" class="btn btn-success">
                              Pin
                        </button>
                  </>
            );
      }
}

export default AdminTools;
