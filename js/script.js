const menu = document.querySelector("#menu");
const header = document.querySelector("header");
menu.onclick = function () {
  // header = document.getElementsByTagName(header);
  this.classList.toggle("fa-times");
  header.classList.toggle("toggle");
};
document.onscroll = function () {
  menu.removeClass("fa-times");
  header.removeClass("toggle");
}; // Function to update the current date and time in UTC
function updateDateTime() {
  // Get current date object in UTC
  const now = new Date();

  // Format date
  const options = {
    weekday: "long",

    timeZone: "UTC",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);

  // Format time
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  });

  // Update HTML elements
  document.getElementById("current-time").textContent = formattedTime;
  document.getElementById("current-day").textContent = formattedDate;
}

// Update date and time on page load
updateDateTime();

// Update date and time every second (optional, for real-time update)
setInterval(updateDateTime, 1000);
