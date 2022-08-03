import React, { Component } from "react";

class CountDisplay extends Component {
      constructor(props) {
            super(props);
            this.loadCounts = this.loadCounts.bind(this);
      }

      loadCounts() {
            let countJSON = JSON.parse(this.props.Level);
            console.log(countJSON.Level3);
      }

      render() {
            return (
                  <>
                        <div className="CountDisplay">
                              <h1> {this.props.count} </h1>
                              <p> {this.props.floor} </p>
                        </div>
                  </>
            );
      }
}

export default CountDisplay;
