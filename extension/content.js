/*global chrome*/

const injectPrettificationScript = async scriptURL => {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = chrome.extension.getURL(scriptURL);
    (document.head || document.documentElement).appendChild(s);
    s.onload = () => resolve(s);
    s.onerror = reject;
  });
};

const firstRun = async () => {
  document.addEventListener("receiveCodeToBePrettified", e => {
    console.log("received code to prettify");
    const codeToPrettify = e.detail;
    const prettifiedCode = prettier.format(codeToPrettify, {
      parser: "babylon",
      plugins: prettierPlugins
    });

    var event = new CustomEvent("receivePrettifiedCode", {
      detail: prettifiedCode
    });

    document.dispatchEvent(event);
  });

  await injectPrettificationScript("script.js");
  runPrettification();
};

const runPrettification = () => {
  var event = new CustomEvent("startCodePrettification");

  document.dispatchEvent(event);
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    console.log("hello prettier extension!");
    if (!window.hasRun) {
      window.hasRun = true;
      firstRun();
    } else {
      runPrettification();
    }
  }
});
