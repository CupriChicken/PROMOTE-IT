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

rozeKaart.addEventListener("click", function() {
    //ophalen van de positie van de roze kaart + scroll + een offset
    let x = rozeKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = rozeKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    rozePopup.style.left = x + "px";
    rozePopup.style.top = y + "px";
    // Toggle the display of the popup
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

blauweKaart.addEventListener("click", function() {
    //ophalen van de positie van de blauwe kaart + scroll + een offset
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

/* ==========================================
   YELLOW AREA - OUTDOOR SPACE
   ==========================================
   Handles clicks on the yellow outdoor area
*/
let geleKaart = document.getElementById("gele-kaart");
let gelePopup = document.getElementById("gele-popup"); 

geleKaart.addEventListener("click", function() {
    //ophalen van de positie van de gele kaart + scroll + een offset
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

rodeKaart.addEventListener("click", function() {
    //ophalen van de positie van de rode kaart + scroll + een offset
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

donkerblauweKaart.addEventListener("click", function() {
    //ophalen van de positie van de donkerblauwe kaart + scroll + een offset
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

mintKaart.addEventListener("click", function() {
    //ophalen van de positie van de mint kaart + scroll + een offset
    let x = mintKaart.getBoundingClientRect().left + window.scrollX + 200;
    let y = mintKaart.getBoundingClientRect().top + window.scrollY + 100;
    // Zet de positie van de popup
    mintPopup.style.left = x + "px";
    mintPopup.style.top = y + "px";
    // Toggle the display of the popup
    if (mintPopup.style.display === "none" || mintPopup.style.display === "") {
        mintPopup.style.display = "block";
    } else {
        mintPopup.style.display = "none";
    }
}
);