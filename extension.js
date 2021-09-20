/*
    This extension starts when the browser has completed loading a webpage, to ensure that
    we remove all the ads, and make sure that we dont remove legitimate content of the page.
    Another option is to use webNavigation.onCommitted, this will run when the browser has 
    committed to loading a webpage, this will start to run early so that we can begin to remove 
    ads as soon as possible, however, this may result in legitimate parts of the website's 
    content being deleted.
*/
chrome.webNavigation.onCompleted.addListener(function (tab) {
    // Prevents script from running when other frames load, to be able to remove the ads on those frames
    if (tab.frameId == 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            try {
                runLinkedinScript();
                return;
            } catch (err) {
                throw err;
            }
        });
    }
});


function runLinkedinScript() {
    // Inject the script to remove ads from file into the webpage
    chrome.tabs.executeScript({
        file: 'removeads.js'
    });
    return true;
}

/*
            // Get the URL of the webpage
            let url = tabs[0].url;
            // Remove unnecessary protocol definitions and www subdomain from the URL
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")

            // Remove path and queries e.g. linkedin.com/feed or linkedin.com?query=value
            // We only want the base domain
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));
            console.log(domain);
*/