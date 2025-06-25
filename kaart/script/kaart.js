/* ==========================================
   INTERACTIVE MAP FUNCTIONALITY
   ==========================================
   This file handles all click events for the convention map areas
   and manages popup positioning and display
*/

/* ==========================================
   PINK AREA - EXPERIENCE HALL
   ==========================================
   Handles clicks on the pink/rose colored area of the map
*/
let rozeKaart = document.getElementById("roze-kaart");
let rozePopup = document.getElementById("roze-popup"); 

<<<<<<< HEAD
rozeKaart.addEventListener("click", function () {
    // Calculate popup position relative to clicked area
    let x = rozeKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = rozeKaart.getBoundingClientRect().top + window.scrollY + 100;

    // Adjust position to prevent popup from going off-screen
    const adjustedPos = adjustPopupPosition(rozePopup, x, y);

    // Set popup position
    rozePopup.style.left = adjustedPos.x + "px";
    rozePopup.style.top = adjustedPos.y + "px";

    // Toggle popup visibility
=======
rozeKaart.addEventListener("click", function() {
    //ophalen van de positie van de roze kaart + scroll + een offset
    let x = rozeKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = rozeKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    rozePopup.style.left = x + "px";
    rozePopup.style.top = y + "px";
    // Toggle the display of the popup
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
    if (rozePopup.style.display === "none" || rozePopup.style.display === "") {
        rozePopup.style.display = "block";
    } else {
        rozePopup.style.display = "none";
    }
});

/* ==========================================
   BLUE AREA - GAMING ZONE
   ==========================================
   Handles clicks on the blue gaming area
*/
let blauweKaart = document.getElementById("blauwe-kaart");
let blauwePopup = document.getElementById("blauwe-popup"); 

<<<<<<< HEAD
blauweKaart.addEventListener("click", function () {
    // Get position of the blue area + scroll offset + visual offset
=======
blauweKaart.addEventListener("click", function() {
    //ophalen van de positie van de blauwe kaart + scroll + een offset
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
    let x = blauweKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = blauweKaart.getBoundingClientRect().top + window.scrollY + 100;
    
    // Set popup position
    blauwePopup.style.left = x + "px";
    blauwePopup.style.top = y + "px";
    
    // Toggle popup display
    if (blauwePopup.style.display === "none" || blauwePopup.style.display === "") {
        blauwePopup.style.display = "block";
    } else {
        blauwePopup.style.display = "none";
    }
});

/* ==========================================
   GREEN AREA - ACTIVITIES ZONE
   ==========================================
   Handles clicks on the green activities area
   Uses special positioning logic to prevent off-screen display
*/
let groeneKaart = document.getElementById("groene-kaart");
let groenePopup = document.getElementById("groene-popup"); 

<<<<<<< HEAD
groeneKaart.addEventListener("click", function () {
    // Calculate initial position
    let x = groeneKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = groeneKaart.getBoundingClientRect().top + window.scrollY + 100;

    // Show popup temporarily to measure dimensions
    groenePopup.style.display = "block";
    groenePopup.style.visibility = "hidden"; // Hide visually while positioning

    // Adjust position based on actual popup dimensions
    const adjustedPos = adjustPopupPosition(groenePopup, x, y);

    // Apply final position and make visible
    groenePopup.style.left = adjustedPos.x + "px";
    groenePopup.style.top = adjustedPos.y + "px";
    groenePopup.style.visibility = "visible";
});
=======
groeneKaart.addEventListener("click", function() {
    //ophalen van de positie van de groene kaart + scroll + een offset
    let x = groeneKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = groeneKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    groenePopup.style.left = x + "px";
    groenePopup.style.top = y + "px";
    // Toggle the display of the popup
    if (groenePopup.style.display === "none" || groenePopup.style.display === "") {
        groenePopup.style.display = "block";
    } else {
        groenePopup.style.display = "none";
    }
}
);
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)

/* ==========================================
   YELLOW AREA - OUTDOOR SPACE
   ==========================================
   Handles clicks on the yellow outdoor area
*/
let geleKaart = document.getElementById("gele-kaart");
let gelePopup = document.getElementById("gele-popup"); 

<<<<<<< HEAD
geleKaart.addEventListener("click", function () {
    // Get position of yellow area + scroll + offset
=======
geleKaart.addEventListener("click", function() {
    //ophalen van de positie van de gele kaart + scroll + een offset
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
    let x = geleKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = geleKaart.getBoundingClientRect().top + window.scrollY + 100;
    
    // Position the popup
    gelePopup.style.left = x + "px";
    gelePopup.style.top = y + "px";
    
    // Toggle popup visibility
    if (gelePopup.style.display === "none" || gelePopup.style.display === "") {
        gelePopup.style.display = "block";
    } else {
        gelePopup.style.display = "none";
    }
});

/* ==========================================
   RED AREA - COMIC ZONE
   ==========================================
   Handles clicks on the red comic area
*/
let rodeKaart = document.getElementById("rode-kaart");
let rodePopup = document.getElementById("rode-popup"); 

<<<<<<< HEAD
rodeKaart.addEventListener("click", function () {
    // Get position of red area + scroll + offset
=======
rodeKaart.addEventListener("click", function() {
    //ophalen van de positie van de rode kaart + scroll + een offset
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
    let x = rodeKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = rodeKaart.getBoundingClientRect().top + window.scrollY + 100;
    
    // Position the popup
    rodePopup.style.left = x + "px";
    rodePopup.style.top = y + "px";
    
    // Toggle popup visibility
    if (rodePopup.style.display === "none" || rodePopup.style.display === "") {
        rodePopup.style.display = "block";
    } else {
        rodePopup.style.display = "none";
    }
});

/* ==========================================
   DARK BLUE AREA - ENTERTAINMENT STAGE
   ==========================================
   Handles clicks on the dark blue entertainment area
*/
let donkerblauweKaart = document.getElementById("donkerblauwe-kaart");
let donkerblauwePopup = document.getElementById("donkerblauwe-popup"); 

<<<<<<< HEAD
donkerblauweKaart.addEventListener("click", function () {
    // Get position of dark blue area + scroll + offset
=======
donkerblauweKaart.addEventListener("click", function() {
    //ophalen van de positie van de donkerblauwe kaart + scroll + een offset
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
    let x = donkerblauweKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = donkerblauweKaart.getBoundingClientRect().top + window.scrollY + 100;
    
    // Position the popup
    donkerblauwePopup.style.left = x + "px";
    donkerblauwePopup.style.top = y + "px";
    
    // Toggle popup visibility
    if (donkerblauwePopup.style.display === "none" || donkerblauwePopup.style.display === "") {
        donkerblauwePopup.style.display = "block";
    } else {
        donkerblauwePopup.style.display = "none";
    }
});

/* ==========================================
   MINT AREA - DEALER HALL
   ==========================================
   Handles clicks on the mint green dealer hall area
   Uses smart positioning to prevent off-screen display
*/
let mintKaart = document.getElementById("mint-kaart");
let mintPopup = document.getElementById("mint-popup"); 

<<<<<<< HEAD
mintKaart.addEventListener("click", function () {
    // Calculate initial position
    let x = mintKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = mintKaart.getBoundingClientRect().top + window.scrollY + 100;

    // Adjust position to prevent going off-screen
    const adjustedPos = adjustPopupPosition(mintPopup, x, y);

    // Apply position
    mintPopup.style.left = adjustedPos.x + "px";
    mintPopup.style.top = adjustedPos.y + "px";

    // Toggle visibility
=======
mintKaart.addEventListener("click", function() {
    //ophalen van de positie van de mint kaart + scroll + een offset
    let x = mintKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = mintKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    mintPopup.style.left = x + "px";
    mintPopup.style.top = y + "px";
    // Toggle the display of the popup
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
    if (mintPopup.style.display === "none" || mintPopup.style.display === "") {
        mintPopup.style.display = "block";
    } else {
        mintPopup.style.display = "none";
    }
<<<<<<< HEAD
});

/* ==========================================
   POPUP UTILITY FUNCTIONS
   ==========================================
*/

/**
 * Closes a specific popup by ID
 * Called by the close button (×) in each popup
 * @param {string} id - The ID of the popup to close
 */
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

/**
 * Closes popups when clicking outside of them
 * Improves user experience by allowing easy dismissal
 */
document.addEventListener('mousedown', function (e) {
    document.querySelectorAll('.popup').forEach(function (popup) {
        // Check if popup is open and click target is outside popup content
        if (popup.style.display === "block" && !popup.querySelector('.popup-content').contains(e.target)) {
            popup.style.display = "none";
        }
    });
});

/**
 * Closes all popups when Escape key is pressed
 * Standard UX pattern for modal dialogs
 */
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll('.popup').forEach(function (popup) {
            popup.style.display = "none";
        });
    }
});

/* ==========================================
   SMART POPUP POSITIONING
   ==========================================
   Prevents popups from appearing off-screen by adjusting their position
*/

/**
 * Adjusts popup position to ensure it stays within viewport bounds
 * @param {HTMLElement} popup - The popup element to position
 * @param {number} x - Desired X coordinate
 * @param {number} y - Desired Y coordinate
 * @returns {Object} Adjusted coordinates {x, y}
 */
function adjustPopupPosition(popup, x, y) {
    // Temporarily show popup to measure its dimensions
    const wasHidden = popup.style.display === "none" || popup.style.display === "";
    if (wasHidden) {
        popup.style.display = "block";
        popup.style.visibility = "hidden";
    }

    // Get actual popup dimensions
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    // Hide popup again if it was hidden initially
    if (wasHidden) {
        popup.style.display = "none";
        popup.style.visibility = "visible";
    }

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust horizontal position if popup would go off right edge
    if (x + popupWidth > viewportWidth) {
        x = viewportWidth - popupWidth - 20; // 20px margin from edge
    }

    // Adjust horizontal position if popup would go off left edge
    if (x < 20) {
        x = 20;
    }

    // Adjust vertical position if popup would go off bottom edge
    if (y + popupHeight > viewportHeight + window.scrollY) {
        y = viewportHeight + window.scrollY - popupHeight - 20;
    }

    // Adjust vertical position if popup would go off top edge
    if (y < window.scrollY + 20) {
        y = window.scrollY + 20;
    }

    // Return adjusted coordinates
    return { x: x, y: y };
}
=======
}
);
>>>>>>> parent of 94ea380 (Pop-ups succesvol afgerond)
