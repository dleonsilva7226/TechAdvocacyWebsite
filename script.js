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




//PETITION SIGNING SECTION

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");
const addSignature = () => {
    // Write your code to manipulate the DOM here
    let userFirstName = document.getElementById("fname").value;
    let userHometown = document.getElementById("hometown").value;
    let newSignature = document.createElement("p");
    newSignature.innerHTML = "🖊️ " + userFirstName + " from " + userHometown + " supports this."
    document.querySelector(".signatures").appendChild(newSignature);
}

// Add a click event listener to the sign now button here
// signNowButton.addEventListener("click", addSignature); //DELETE THIS

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

    let containsErrors = false;
  
    var petitionInputs = document.getElementById("sign-petition").elements;
    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {

        // TODO: Validate the value of each input
        if (petitionInputs[i].value.length < 2) { 
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (!containsErrors) {
        addSignature();
        for (let i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = "";
            containsErrors = false;
        }
    }

  
  
    // TODO: Call addSignature() and clear fields if no errors
  
  }
  
  signNowButton.addEventListener('click', validateForm);