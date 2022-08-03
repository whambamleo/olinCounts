import React, { Component } from "react";
import CountDisplay from "./CountDisplay";

class LatestCount extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  floor3: 0,
                  floor2: 0,
                  floor1: 0,
                  floorA: 0,
                  floorB: 0
                  };

            this.getLatestFloorCounts = this.getLatestFloorCounts.bind(this);
            this.getLatestRoomCounts = this.getLatestRoomCounts.bind(this);
            this.displayLatestFloorCounts = this.displayLatestFloorCounts.bind(this);
            this.displayLatestRoomCounts = this.displayLatestRoomCounts.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this);
      }


      getLatestFloorCounts() {
            fetch("http://localhost:5000/sendLatestFloorCounts")
                  .then(res => res.text())
                  .then(res => this.displayLatestFloorCounts(res));   
            }

      getLatestRoomCounts() {
            fetch("http://localhost:5000/sendLatestRoomCounts")
                  .then(res => res.text())
                  .then(res => this.displayLatestRoomCounts(res)); 
      }

      displayLatestFloorCounts(response) {
            let responseArray = JSON.parse(response);
            let length = responseArray.length;
            let latestCount = responseArray[length-1];

            this.setState({
                  floor3: latestCount.floor3,
                  floor2: latestCount.floor2,
                  floor1: latestCount.floor1,
                  floorA: latestCount.floorA,
                  floorB: latestCount.floorB
            });
      }

      displayLatestRoomCounts(response) {
            let responseArray = JSON.parse(response);
            let length = responseArray.length;
            let latestCount = responseArray[length-1];

            console.log(sort(latestCount));

      }

      componentDidMount() {
            this.getLatestFloorCounts();
            this.getLatestRoomCounts();
                  }


      render() {
            return (
                  <>
                        <div className="redBanner"> Latest Counts </div>
                        <div id="latestCounts"> 
                              <CountDisplay floor="Floor 3" count={this.state.floor3}/>
                              <CountDisplay floor="Floor 2" count={this.state.floor2}/>
                              <CountDisplay floor="Floor 1" count={this.state.floor1}/>
                              <CountDisplay floor="Floor A" count={this.state.floorA}/>
                              <CountDisplay floor="Floor B" count={this.state.floorB}/>
                              
                        </div>
                        <div className="redBanner"> Busiest Rooms</div>
                        <div id="busiestRooms">
                              <CountDisplay floor="Floor 3" count={this.state.floor3}/>
                              <CountDisplay floor="Floor 2" count={this.state.floor2}/>
                              <CountDisplay floor="Floor 1" count={this.state.floor1}/>
                              <CountDisplay floor="Floor A" count={this.state.floorA}/>
                              <CountDisplay floor="Floor B" count={this.state.floorB}/>

                        </div>
                  </>
            );
      }
}

export default LatestCount;