function updateDynamic() {
  let date = new Date();
  // nc -> nc means not calculated
  let nc_hour = date.getHours();
  let nc_minute = date.getMinutes();
  let nc_second = date.getSeconds();

  // FOR TIME
  let hr;
  let minute = nc_minute < 10 ? "0" + nc_minute : nc_minute;
  let second = nc_second < 10 ? "0" + nc_second : nc_second;
  let ampm = nc_hour >= 12 ? "PM" : "AM";

  // FOR DATE
  let currentdate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let year = date.getFullYear();
  let moth_arr = [
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
    "Novemver",
    "December",
  ];
  let date_arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = moth_arr[date.getMonth()];
  let day_of_week = date_arr[date.getDay()];

  // hour
  if (nc_hour > 12) {
    let realHr = nc_hour - 12;
    hr = "0" + realHr;
  } else if (nc_hour === 0) {
    hr = 12;
  } else if (nc_hour < 12) {
    hr = "0" + nc_hour;
  }

  // ---------------------------------------------------------------

  let timeDiv = document.querySelector(".hms");
  timeDiv.innerHTML = `<p>${hr} : ${minute} : ${second}<span>${ampm}</span></p>`;

  document.querySelector(
    ".dmy"
  ).innerHTML = `<p>${currentdate}, ${month}, ${year} ${day_of_week}</p>`;
}

setInterval(updateDynamic, 1000);
