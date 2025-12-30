function upDate(previewPic) {
    console.log("Event triggered");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);
    
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Window loaded: addTabFocus function triggered.");
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image " + (i + 1));
    }
}