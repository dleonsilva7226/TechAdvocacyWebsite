//Adds event listener for dark mode button
let darkModeButton = document.querySelector("#dark-mode-button");
let isDarkMode = false;

function changeBackgroundInverse () {
    if (isDarkMode) {
        document.querySelector("body").style.backgroundColor = "#284574";
        document.querySelector(".header-section").style.backgroundColor = "#edc967";
        // document.querySelector("body").style.color = "black";
        darkModeButton.innerHTML = "Dark Mode";
        isDarkMode = false;
    } else {
        document.querySelector("body").style.backgroundColor = "rgb(30,30,30)";
        // document.querySelector("body").style.color = "white";
        document.querySelector(".header-section").style.backgroundColor = "#4A4A4A";
        darkModeButton.innerHTML = "Light Mode";
        
        isDarkMode = true;
    }
}

darkModeButton.addEventListener("click", changeBackgroundInverse);