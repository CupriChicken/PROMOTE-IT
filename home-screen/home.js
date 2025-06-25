/* ==========================================
   COUNTDOWN TIMER FUNCTIONALITY
   ==========================================
   Creates a live countdown timer to the convention start date
*/

// Set the target date and time for the convention
// Format: "Month Day, Year Hours:Minutes:Seconds"
var countDownDate = new Date("November 22, 2025 10:00:00").getTime();

// Update the countdown every second (1000 milliseconds)
var x = setInterval(function () {

  // Get current date and time
  var now = new Date().getTime();

  // Calculate the time difference between now and the target date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // Math.floor() rounds down to the nearest whole number
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the format "XdXhXmXs"
  // Updates the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // Check if the countdown has reached zero (convention has started)
  if (distance < 0) {
    // Stop the countdown timer
    clearInterval(x);
    // Display celebration message
    document.getElementById("countdown").innerHTML = "HET IS AAN DE GANG!";
  }
}, 1000); // Execute this function every 1000 milliseconds (1 second)