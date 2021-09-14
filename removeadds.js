function removeAds() {
    /*
    // Get all 'span' elements on the page
    let spans = document.getElementsByTagName("voc-area-container");
    console.log(spans);
    for (let i = 0; i < spans.length; ++i) {
        // Check if they contain the text 'Promoted'
        
        if (spans[i].innerHTML === "Promoted") {
            // Get the div that wraps around the entire ad
            let card = spans[i].closest(".feed-shared-update-v2");

            // If the class changed and we can't find it with closest(), get the 6th parent
            if (card === null) {
                // Could also be card.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode :D
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }

            // Make the ad disappear!
            card.setAttribute("style", "display: none !important;");
        }
    }
    */
    let byid = document.getElementById("test");
    //let byclass = document.getElementsByClassName("pnetContVid");
    //let byname = document.getElementsByName("pnetContVid");
    //let bytag = document.getElementsByTagName("pnetContVid");
    console.log(byid);
    console.log(document.baseURI);
    //console.log(byclass);
    //console.log(byname);
    //console.log(bytag);
    let card = byid[0].closest(".feed-shared-update-v2");
    card.setAttribute("style", "display: none !important;");
}


removeAds();

// Ensures ads will be removed as the user scrolls
setInterval(function () {
    removeAds();
}, 200)