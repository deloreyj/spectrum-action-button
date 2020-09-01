(function startGoogleReactAppLoading() {
  const currentBaseUrl = document.currentScript.src.split("/loader.js")[0];

  function loadFile(file) {
    const css = file.endsWith("css");
    const node = document.createElement(css ? "link" : "script");
    if (css) {
      node.rel = "stylesheet";
      node.href = file;
    } else {
      node.type = "text/javascript";
      node.src = file;
      node.async = false; // loads in parallel & keeps the execution order of the scripts.
    }
    document.head.appendChild(node);
  }

  if (currentBaseUrl.includes("localhost:3000")) {
    loadFile(currentBaseUrl + "/static/js/bundle.js");
    loadFile(currentBaseUrl + "/static/js/main.chunk.js");
    loadFile(currentBaseUrl + "/static/js/vendors~main.chunk.js");

    window.mageLoadBaseUrl = currentBaseUrl;
  } else {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", currentBaseUrl + "/useful-asset-manifest.json", true);
    xhr.onload = function () {
      if (!this.responseText) {
        console.log("Empty response was received.");
        return;
      }

      var json = JSON.parse(this.responseText);
      for (let i = 0; i < json.css.length; i++) {
        loadFile(currentBaseUrl + json.css[i]);
      }
      for (let i = 0; i < json.js.length; i++) {
        loadFile(currentBaseUrl + json.js[i]);
      }
    };

    xhr.onerror = function () {
      //@TODO: what should we do in that case?
      console.error("There was a problem with the request");
    };

    xhr.send();
  }
})();
