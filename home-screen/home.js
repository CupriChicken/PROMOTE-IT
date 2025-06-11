// Stel de datum in waarnaar we aftellen
var countDownDate = new Date("June 11, 2026 11:57:00").getTime();

// Update de countdown elke seconde
var x = setInterval(function() {

  // Haal de huidige datum en tijd op
  var now = new Date().getTime();
    
  // Bereken het verschil tussen de countdown datum en nu
  var distance = countDownDate - now;
    
  // Bereken het aantal dagen, uren, minuten en seconden
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Toon het resultaat in het element met id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "u "
  + minutes + "m " + seconds + "s ";
    
  // Als de countdown voorbij is, stop de interval en toon bericht
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "De countdown is over!";
  }
}, 1000);
