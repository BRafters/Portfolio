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

// Changes the color of the page from dark mode to light mode
function changeTheme(element){
    // Body elements
    const body = document.getElementsByTagName("body")[0];
    const linkBtns = document.querySelectorAll(".link"); // Array
    const titleText = document.getElementsByTagName("h1")[0];
    const darkThemeText = document.getElementsByTagName("h6")[0];
    const profilePic = document.getElementById("profile-img");
    const slider = document.getElementById("slider-round");

    // Light & dark theme color
    const darkColor = "#2b3c55";
    const lightColor = "#e0e5ec";

    // Light & dark text color
    const darkText = "#484349";
    const lightText = "#f4efe6";

    if(element.checked){
        // Set to dark mode
        body.style.backgroundColor = darkColor;
        
        // Lighting up text and fixing shadows for links
        linkBtns.forEach(button => {
            button.style.backgroundColor = darkColor;
            button.style.color = lightText;
            setNewMouseOverStyle(button);
        });

        darkThemeText.style.color = lightText;
        titleText.style.color = lightText;

        // Setting the profile picture shadow
        profilePic.style.boxShadow = "8px 8px 20px #1c2737, -8px -8px 20px #3a5173";
        slider.style.boxShadow = "5px 5px 9px #1c2737, -5px -5px 9px #3a5173";
    }
    else{
        body.style.backgroundColor = lightColor;

        // Darkening text and fixing shadows for links
        linkBtns.forEach(button => {
            button.style.backgroundColor = lightColor;
            button.style.color = darkText;
            setInitialMouseOverStyle(button);
        });

        darkThemeText.style.color = darkText;
        titleText.style.color = darkText;

        // Setting the profile picture shadow
        profilePic.style.boxShadow = "8px 8px 20px #acb0b6, -8px -8px 20px #ffffff";
        slider.style.boxShadow = "5px 5px 9px #9fa3a8, -5px -5px 9px #ffffff";
    }

}

function setNewMouseOverStyle(element){
    element.addEventListener("mouseover", event => {
        element.style.boxShadow = "8px 8px 20px #1c2737, -8px -8px 20px #3a5173";
    });
    element.addEventListener("mouseout", event => {
        element.style.boxShadow = "none";
    });
}

function setInitialMouseOverStyle(element){
    element.addEventListener("mouseover", event => {
        element.style.boxShadow = "8px 8px 20px #acb0b6, -8px -8px 20px #ffffff";
    });
    element.addEventListener("mouseout", event => {
        element.style.boxShadow = "none";
    });
}