    const eventDate = new Date("2025-06-13T09:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        document.getElementById("countdown").textContent = "00:00:00";
        return;
      }

      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

      document.getElementById("countdown").textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);