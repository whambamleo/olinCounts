import React, { Component } from "react";

class Welcome extends Component {
      constructor(props) {
            super(props);
//            this.updateGoogleSheet = this.updateGoogleSheet.bind(this);
      }

      render() {
            return (
                  <>
                    <h5> Welcome! {this.props.username}</h5>
                  </>
            );
      }
}

export default Welcome;
