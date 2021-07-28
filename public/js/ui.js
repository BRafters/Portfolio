// Light & dark text color
const darkText = "#484349";
const lightText = "#f4efe6";

// Event listener for the dark mode toggler
window.addEventListener('load', event => {
    // Retrieve the dark mode toggle button
    var darkModeToggler = document.getElementById("dmt");
    changeTheme(darkModeToggler);

    // Do onclick listener for checkbox
    darkModeToggler.addEventListener("click", event => {
        console.log("clicked");
        changeTheme(darkModeToggler);
    });
});

// // // Changes the color of the page from dark mode to light mode
function changeTheme(element){
    // Body elements
    const lyr1 = document.getElementById("lyr1");
    const linkBtns = document.querySelectorAll(".link"); // Array
    const linkTxt = document.querySelectorAll(".linkTxt");
    const titleText = document.getElementsByTagName("h1")[0];
    const darkThemeText = document.getElementsByTagName("h6")[0];
    const profilePic = document.getElementById("profile-img");
    const slider = document.getElementById("slider-round");

    // Light & dark theme color
    const darkColor = "linear-gradient(rgba(43, 60, 85, 1), rgba(43, 60, 85, 0.7))";
    const lightColor = "linear-gradient(rgba(224, 229, 236, 1), rgba(224, 229, 236, 0.7))";

    // Light & dark text color
    const darkText = "#484349";
    const lightText = "#f4efe6";

    if(element.checked){

        // Set to dark mode
        lyr1.style.background = darkColor;

        
        // Lighting up text and fixing shadows for links
        for(var i = 0; i < linkBtns.length; i++){
            linkBtns[i].style.backgroundColor = "inherit";
            linkBtns[i].style.boxShadow = "none";
            linkTxt[i].style.color = lightText;
            setNewMouseOverStyle(linkBtns[i], linkTxt[i]);
        }

        darkThemeText.style.color = lightText;
        titleText.style.color = lightText;

        // Setting the profile picture shadow
        profilePic.style.boxShadow = "8px 8px 20px #1c2737, -8px -8px 20px #3a5173";
        slider.style.boxShadow = "5px 5px 9px #1c2737, -5px -5px 9px #3a5173";
    }
    else{
        lyr1.style.background = lightColor;

        // Darkening text and fixing shadows for links
        for(var i = 0; i < linkBtns.length; i++){
            linkBtns[i].style.backgroundColor = "inherit";
            linkBtns[i].style.boxShadow = "none";
            linkBtns[i].style.color = darkText;
            setInitialMouseOverStyle(linkBtns[i], linkTxt[i]);
        }

        darkThemeText.style.color = darkText;
        titleText.style.color = darkText;

        // Setting the profile picture shadow
        profilePic.style.boxShadow = "8px 8px 20px #acb0b6, -8px -8px 20px #ffffff";
        slider.style.boxShadow = "5px 5px 9px #9fa3a8, -5px -5px 9px #ffffff";
    }

}

function setNewMouseOverStyle(elementOne, elementTwo){
    elementOne.addEventListener("mouseover", event => {
        elementOne.style.boxShadow = "0px 0px 20px -5px #222f42";
        elementTwo.style.color = darkText;
    });
    elementOne.addEventListener("mouseout", event => {
        elementOne.style.boxShadow = "none";
        elementTwo.style.color = lightText;
    });
}

function setInitialMouseOverStyle(elementOne, elementTwo){
    elementOne.addEventListener("mouseover", event => {
        elementOne.style.boxShadow = "0px 0px 20px -5px #8E8E8E";
        elementTwo.style.color = darkText;
    });
    elementOne.addEventListener("mouseout", event => {
        elementOne.style.boxShadow = "none";
        elementTwo.style.color = darkText;
    });
}