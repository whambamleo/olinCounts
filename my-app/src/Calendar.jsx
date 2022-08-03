import React, { Component } from "react";

function getTime() {
      var currentTime = new Date();

      var currentHours = currentTime.getHours();
      var currentMinutes = currentTime.getMinutes();
      var currentSeconds = currentTime.getSeconds();

      currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
      currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

      var timeOfDay = currentHours < 12 ? "AM" : "PM";
      currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
      currentHours = currentHours == 0 ? 12 : currentHours;

      return `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;
}

function getDate() {
      let date = new Date();

      let dayNum = Intl.DateTimeFormat("en-US", {
            day: "numeric",
      }).format(date);

      let dayName = Intl.DateTimeFormat("en-US", {
            weekday: "short",
      }).format(date);

      let monthName = Intl.DateTimeFormat("en-US", { month: "long" }).format(
            date
      );

      let dateString = `${monthName} ${dayNum}, ${date.getFullYear()}`;
      return dateString;
}

class Calendar extends Component {
      render() {
            return (
                  <>
                        <div className="card sidebarTimeDate">
                              <div className="card-body time">
                                    <h6> Current Time </h6>
                                    <h6 className="card-title time">
                                          {getTime()}
                                    </h6>
                              </div>
                              <div className="card-body calendar">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text"> {getDate()} </p>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Calendar;
