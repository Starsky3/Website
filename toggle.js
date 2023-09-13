// THESE JAVASCRIPT FUNCTIONS ALLOW FOR THE TOGGLE BETWEEN DIFFERENT STYLES

function toggleSheet(){                                     // TOGGLE FUNCTION
    ref = document.getElementById("css-type");              // GET STYLE ELEMENT BY ID
    fileName = ref.getAttribute("href");                    // GET CURRENT CSS STYLESHEET NAME BY href ATTRIBUTE
    if(fileName == "Style.css"){                            // CHOOSE NEW STYLESHEET NAME - SWITCH TO OTHER CSS
        newFile = "StyleSwitch.css";
    }
    else{                                                   // OTHERWISE, SWITCH TO NORMAL CSS
        newFile = "Style.css";
    }    

    ref.setAttribute("href", newFile);                      // REPLACE OLD STYLESHEET WITH NEW STYLESHEET
    localStorage.setItem("style", newFile);                 // SAVE FILESHEET NAME TO PERSISTENT STORAGE FOR WHEN PAGE REFRESHES
}

window.onload = function(){
    newStyle = localStorage.getItem("style");               // GET NEW STYLESHEET FROM LOCAL STORAGE
    newStyleLink = document.getElementById("css-type");   // GET HTML STYLE ELEMENT BY ID
    newStyleLink.setAttribute("href", newStyle);            // REPLACE href ELEMENT IN HTML TO NEW STYLESHEET
}