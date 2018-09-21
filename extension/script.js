const editor = document.querySelector(".CodeMirror").CodeMirror;

document.addEventListener("startCodePrettification", e => {
  console.log("start code prettification");
  const currCode = editor.getValue();

  var event = new CustomEvent("receiveCodeToBePrettified", {
    detail: currCode
  });

  // Dispatch the event.
  document.dispatchEvent(event);
});

document.addEventListener("receivePrettifiedCode", e => {
  console.log("received prettified code");
  const prettifiedCode = e.detail;
  editor.setValue(prettifiedCode);
});
