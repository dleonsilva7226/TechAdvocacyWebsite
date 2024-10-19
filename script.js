//Adds event listener for dark mode button
let darkModeButton = document.querySelector("#dark-mode-button");
let isDarkMode = false;

function changeBackgroundInverse () {
    if (isDarkMode) {
        document.querySelector("body").style.backgroundColor = "#B5DBFB";
        document.querySelector("body").style.color = "black";
        darkModeButton.innerHTML = "Toggle Dark Mode";
        isDarkMode = false;
    } else {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        darkModeButton.innerHTML = "Toggle Light Mode";
        isDarkMode = true;
    }
}

darkModeButton.addEventListener("click", changeBackgroundInverse);