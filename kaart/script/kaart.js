let rozeKaart = document.getElementById("roze-kaart");
let rozePopup = document.getElementById("roze-popup");

rozeKaart.addEventListener("click", function () {
    let x = rozeKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = rozeKaart.getBoundingClientRect().top + window.scrollY + 100;

    const adjustedPos = adjustPopupPosition(rozePopup, x, y);

    rozePopup.style.left = adjustedPos.x + "px";
    rozePopup.style.top = adjustedPos.y + "px";

    if (rozePopup.style.display === "none" || rozePopup.style.display === "") {
        rozePopup.style.display = "block";
    } else {
        rozePopup.style.display = "none";
    }
}
);

let blauweKaart = document.getElementById("blauwe-kaart");
let blauwePopup = document.getElementById("blauwe-popup");

blauweKaart.addEventListener("click", function () {
    //ophalen van de positie van de blauwe kaart + scroll + een offset
    let x = blauweKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = blauweKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    blauwePopup.style.left = x + "px";
    blauwePopup.style.top = y + "px";
    // Toggle the display of the popup
    if (blauwePopup.style.display === "none" || blauwePopup.style.display === "") {
        blauwePopup.style.display = "block";
    } else {
        blauwePopup.style.display = "none";
    }
}
);

let groeneKaart = document.getElementById("groene-kaart");
let groenePopup = document.getElementById("groene-popup");

// Update groene kaart listener
groeneKaart.addEventListener("click", function () {
    let x = groeneKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = groeneKaart.getBoundingClientRect().top + window.scrollY + 100;

    // Show popup first to get its dimensions
    groenePopup.style.display = "block";
    groenePopup.style.visibility = "hidden"; // Hide it visually while we position it

    // Now adjust position with actual dimensions
    const adjustedPos = adjustPopupPosition(groenePopup, x, y);

    groenePopup.style.left = adjustedPos.x + "px";
    groenePopup.style.top = adjustedPos.y + "px";
    groenePopup.style.visibility = "visible"; // Make it visible again
}
);

let geleKaart = document.getElementById("gele-kaart");
let gelePopup = document.getElementById("gele-popup");

geleKaart.addEventListener("click", function () {
    //ophalen van de positie van de gele kaart + scroll + een offset
    let x = geleKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = geleKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    gelePopup.style.left = x + "px";
    gelePopup.style.top = y + "px";
    // Toggle the display of the popup
    if (gelePopup.style.display === "none" || gelePopup.style.display === "") {
        gelePopup.style.display = "block";
    } else {
        gelePopup.style.display = "none";
    }
}
);

let rodeKaart = document.getElementById("rode-kaart");
let rodePopup = document.getElementById("rode-popup");

rodeKaart.addEventListener("click", function () {
    //ophalen van de positie van de rode kaart + scroll + een offset
    let x = rodeKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = rodeKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    rodePopup.style.left = x + "px";
    rodePopup.style.top = y + "px";
    // Toggle the display of the popup
    if (rodePopup.style.display === "none" || rodePopup.style.display === "") {
        rodePopup.style.display = "block";
    } else {
        rodePopup.style.display = "none";
    }
}
);

let donkerblauweKaart = document.getElementById("donkerblauwe-kaart");
let donkerblauwePopup = document.getElementById("donkerblauwe-popup");

donkerblauweKaart.addEventListener("click", function () {
    //ophalen van de positie van de donkerblauwe kaart + scroll + een offset
    let x = donkerblauweKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = donkerblauweKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    donkerblauwePopup.style.left = x + "px";
    donkerblauwePopup.style.top = y + "px";
    // Toggle the display of the popup
    if (donkerblauwePopup.style.display === "none" || donkerblauwePopup.style.display === "") {
        donkerblauwePopup.style.display = "block";
    } else {
        donkerblauwePopup.style.display = "none";
    }
}
);

let mintKaart = document.getElementById("mint-kaart");
let mintPopup = document.getElementById("mint-popup");

// Update mint kaart listener
mintKaart.addEventListener("click", function () {
    let x = mintKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = mintKaart.getBoundingClientRect().top + window.scrollY + 100;

    // Adjust position to prevent going off-screen
    const adjustedPos = adjustPopupPosition(mintPopup, x, y);

    mintPopup.style.left = adjustedPos.x + "px";
    mintPopup.style.top = adjustedPos.y + "px";

    if (mintPopup.style.display === "none" || mintPopup.style.display === "") {
        mintPopup.style.display = "block";
    } else {
        mintPopup.style.display = "none";
    }
}
);

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Close popup when clicking outside the content
document.addEventListener('mousedown', function (e) {
    document.querySelectorAll('.popup').forEach(function (popup) {
        if (popup.style.display === "block" && !popup.querySelector('.popup-content').contains(e.target)) {
            popup.style.display = "none";
        }
    });
});

// Close all popups with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll('.popup').forEach(function (popup) {
            popup.style.display = "none";
        });
    }
});

function adjustPopupPosition(popup, x, y) {
    // Temporarily show popup to get dimensions if it's hidden
    const wasHidden = popup.style.display === "none" || popup.style.display === "";
    if (wasHidden) {
        popup.style.display = "block";
        popup.style.visibility = "hidden";
    }

    // Get popup dimensions
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Hide it again if it was hidden
    if (wasHidden) {
        popup.style.display = "none";
        popup.style.visibility = "visible";
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust horizontal position if popup goes off right edge
    if (x + popupWidth > viewportWidth) {
        x = viewportWidth - popupWidth - 20;
    }

    // Adjust horizontal position if popup goes off left edge
    if (x < 20) {
        x = 20;
    }

    // Adjust vertical position if popup goes off bottom edge
    if (y + popupHeight > viewportHeight + window.scrollY) {
        y = viewportHeight + window.scrollY - popupHeight - 20;
    }

    // Adjust vertical position if popup goes off top edge
    if (y < window.scrollY + 20) {
        y = window.scrollY + 20;
    }

    return { x: x, y: y };
}