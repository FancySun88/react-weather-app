import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];

  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return (
    <div>
      <ul>
        <li>
          {day} {hour}:{minutes}
        </li>
        <li>
          {date} {month} {year}
        </li>
      </ul>
    </div>
  );
}
