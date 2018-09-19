/*global chrome*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    console.log("hello prettier extension!");
    
    var containerDiv = $("<div>");

    containerDiv.attr('id', 'page-scraper')
    containerDiv.css({
      position: 'fixed',
      left: '0px',
      bottom: '0px',
      width: '100%',
      height: '20vh',
      border: '1px solid black',
      backgroundColor: 'white'
    });
    containerDiv.text('hello from Lincoln and Sheridan')
    
    containerDiv.appendTo(document.body);
    
    var scriptDiv = $('<script>');
    scriptDiv.src = 'https://unpkg.com/prettier@1.13.0/standalone.js';
    
    scriptDiv.appendTo(document.head);
      
    const setUpPrettier = async () => {
      const prettierRequest = await fetch('https://unpkg.com/prettier@1.13.0/standalone.js');
      const babylonRequest = await fetch('https://unpkg.com/prettier@1.13.0/parser-babylon.js');
      const prettierJS = await prettierRequest.text()
      const prettier = await eval(prettierJS)
      console.log("Prettier",prettier)
    }
    setUpPrettier()

  }
});
