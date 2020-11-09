// Wait for the page to load
window.addEventListener('load', event => {
    // Grab all of the mobile links
    var links = document.querySelectorAll(".menu li a");
    links.forEach(link => {
        link.addEventListener('mouseenter', event => {
            // Grab a hex color value
            var colorHex = Math.floor(Math.random()*16777215).toString(16);

            // Change the color of the link
            link.style.color = "#" + colorHex;
            var spanChildIcon = link.children;
            spanChildIcon[0].style.color = "#" + colorHex;
        });
        link.addEventListener('mouseleave', event => {
            link.style.color = "#645e4f";
            var spanChildIcon = link.children;
            spanChildIcon[0].style.color = "#645e4f";
        });

        // Event listener for the button click
        link.addEventListener('click', event => {
            document.getElementsByClassName('toggler')[0].checked = false;
        });
    });

    var overlay = document.getElementsByClassName("overlay")[0];
    overlay.addEventListener('click', event => {
        document.getElementsByClassName('toggler')[0].checked = false;
    });

});
