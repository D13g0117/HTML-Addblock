var adv_list = ["adv","ads","GoogleActiveViewElement","advertisement","google_ad","googleads"];

function detectAd(ad_key_word) {

    let by_class = document.getElementsByClassName(ad_key_word);
    let by_id = document.getElementById(ad_key_word);

    let spans = by_class;
    console.log(spans);

    if (spans.length == 0) {
        if (by_id != null){
            removeAd(by_id);
        }
    }
    
    for (let i = 0; i < spans.length; ++i) {
        let ad = spans[i];
        removeAd(ad);   
    }
}

function hideAd(element) {
    element.setAttribute("style", "display: none !important;");
    console.log(element + " --> has been hided!");
}

function removeAd(element) {
    element.remove();
    console.log(element + " --> has been removed!");
}

function detectAdKeyWords(){
    var allClasses = [];
    var allAds = [];

    var allElements = document.querySelectorAll('*');

    for (var i = 0; i < allElements.length; i++) {
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
            if (str.includes(adv_list[y])){
                allAds.push(allClasses[x]);
                detectAd(allClasses[x]);
            }
        }
    }
    console.log(allAds);
}

detectAdKeyWords();
//detectAd();

// Ensures ads will be removed as the user scrolls
setInterval(function () {
    detectAdKeyWords();
    //detectAd();
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