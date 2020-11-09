function resizeLeft(x){
    // Create variables for elements
    var skillsContainer = document.getElementsByClassName("skillsInfo")[0];
    var eduContainers = document.getElementsByClassName("educationInfo")[0];
    var parentContainer = document.getElementsByClassName("left-column")[0];

    // Create variables for creating new elements
    var newDiv;
    if(x.matches){
        // Create a new div container
        newDiv = document.createElement("div");
        newDiv.className = "eduSkillInfo";

        // Appending children nodes to the new div container
        newDiv.appendChild(skillsContainer);
        newDiv.appendChild(eduContainers);

        // Append the new node to the parent node
        parentContainer.appendChild(newDiv);
    }
    else{
        var newDivs = document.getElementsByClassName("eduSkillInfo");
        for(var i = 0; i < newDivs.length; ++i){
            newDivs[i].parentNode.removeChild(newDivs[i]);
        }

        parentContainer.appendChild(skillsContainer);
        parentContainer.appendChild(eduContainers);
        console.log("here");
    }
}

// Resizes at 560px
// function resizeLeftMore(y){
//     if(y.matches){
//         var skillsContainer = document.getElementsByClassName("skillsInfo")[0];
//         var eduContainers = document.getElementsByClassName("educationInfo")[0];
//         var parentContainer = document.getElementsByClassName("left-column")[0];
//         var newDivs = document.getElementsByClassName("eduSkillInfo");
//         for(var i = 0; i < newDivs.length; ++i){
//             newDivs[i].parentNode.removeChild(newDivs[i]);
//         }

//         parentContainer.appendChild(skillsContainer);
//         parentContainer.appendChild(eduContainers);
//         console.log("here");
//     }
//     else{
//         if(newDiv){
//         newDiv = document.createElement("div");
//         newDiv.className = "eduSkillInfo";

//         // Appending children nodes to the new div container
//         newDiv.appendChild(skillsContainer);
//         newDiv.appendChild(eduContainers);

//         // Append the new node to the parent node
//         parentContainer.appendChild(newDiv);
//     }
// }



// Determining if the page width is within a threshold
var x = window.matchMedia("(max-width: 800px)");
resizeLeft(x);
x.addListener(resizeLeft);

var y = window.matchMedia("(max-width: 560px");
resizeLeftMore(y);
y.addListener(resizeLeftMore);