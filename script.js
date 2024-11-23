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
const addSignature = (person) => {
    // Write your code to manipulate the DOM here
    // let userFirstName = document.getElementById("fname").value;
    // let userHometown = document.getElementById("hometown").value;
    let newSignature = document.createElement("p");
    // newSignature.innerHTML = "🖊️ " + userFirstName + " from " + userHometown + " supports this."

    newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this cause.`;
    document.querySelector(".signatures").appendChild(newSignature);
}

// Person object

const validateForm = () => {

    // Person object
    let person = {
        name: document.getElementById("fname").value,
        hometown: document.getElementById("hometown").value,
        email: document.getElementById("email").value
    };

    let containsErrors = false;
  
    var petitionInputs = document.getElementById("sign-petition").elements;
    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {

        // TODO: Validate the value of each input
        if (person.hometown.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (!containsErrors) {
        addSignature(person);
        toggleModal(person);
        for (let i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = "";
            containsErrors = false;
        }
    }

  
  
    // TODO: Call addSignature() and clear fields if no errors
  
  }
  
  signNowButton.addEventListener('click', validateForm);



//   Animations Section


let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
};


// Add the active logic here
let revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            /* add the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.add("active");

          } else {
            /* remove the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.remove("active");
          }
    }
};

window.addEventListener("scroll", reveal);




const toggleModal = (person) => {
    let modal = document.getElementById("thanks-modal");
    let modalContent = document.getElementById("thanks-modal-content");
    modal.style.display = "flex";
    modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`


    let intervalId = setInterval(scaleImage, 500);

    setTimeout(()=>{
        modal.style.display = "none"; 
        clearInterval(intervalId);
    }, 4000);
    
};


let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");
const scaleImage = () => {
    if (scaleFactor === 1) {
        scaleFactor = 0.8;
    } else {
        scaleFactor = 1;
    }

    modalImage.style.transform = `scale(${scaleFactor})`;
};

