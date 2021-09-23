// List of key words to remove
var adv_list = ["adv","ads","GoogleActiveViewElement","advertisement","google_ad","googleads", "-ad-", "advertising", "publi", "publicidad", "-web-ad-"];

// Deletes all the specified classes from the html document
function detectAd(ad_key_word) {

    let by_class = document.getElementsByClassName(ad_key_word);
    let by_id = document.getElementById(ad_key_word);

    let spans = by_class;
    console.log(spans);

    if (spans.length == 0) {
        if (by_id != null){
            hideAd(by_id);
        }
    }
    
    for (let i = 0; i < spans.length; ++i) {
        let ad = spans[i];
        hideAd(ad);   
    }
}

// Hides the specified element
function hideAd(element) {
    element.setAttribute("style", "display: none !important;");
    console.log(element + " --> has been hided!");
}

// Removes the specified element
function removeAd(element) {
    element.remove();
    console.log(element + " --> has been removed!");
}

// Detects all the classes that might haver ads on them
function detectAdKeyWords(){
    var allClasses = [];
    var allAds = [];
    var allIds = [];
    var allElements = document.querySelectorAll('*');

    for (var i = 0; i < allElements.length; i++) {
        var ids = allElements[i];
        if (ids.id) {
             allIds.push(ids.id.toString()); 
            }
        var classes = allElements[i].className.toString().split(/\s+/);
        for (var j = 0; j < classes.length; j++) {
                var cls = classes[j];
            if (cls && allClasses.indexOf(cls) === -1)
                allClasses.push(cls);
            }
    }
    
    for (var x = 0; x < allClasses.length; x++) {
        let str = allClasses[x];
        for (var y = 0; y < adv_list.length; y++){
            if (str.includes(adv_list[y]) || str.localeCompare(adv_list[y]) == 0){
                allAds.push(allClasses[x]);
                detectAd(allClasses[x]);
            }
        }
    }

    for (var w = 0; w < allIds.length; w++) {
        let ids = allIds[w];
        if (ids.includes("google_ads")){
            detectAd(ids);
        } 
    }
}

detectAdKeyWords();

/*
    Ensures ads will be removed periodically in case new ads appear after the page has been loaded, 
    e.g., if the user scrolls the page, script that generates ads, etc.
*/
setInterval(function () {
    detectAdKeyWords();
}, 200)



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