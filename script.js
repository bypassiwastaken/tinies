document.querySelector("input").onchange = function () {
  var files = this.files;
  if (files.length < 1) return;
  var fr = new FileReader();
  fr.onload = function (e) {
    var raw = JSON.stringify(e.target.result).split('\\"');
    document.body.innerHTML+=raw
    raw.forEach(function (e) {
      if (
        e.includes("R2xvYmFsTmV0d29yaw") ||
        e.includes("bG9iYWxOZXR3b3Jr") ||
        e.includes("b2JhbE5ldHdvcms")
      ) {
        throw (document.querySelector("pre").textContent = atob(e)
          .replace(/\s\s+/g, " ")
          .split('"WiFi": {')
          .join("Fortnite")
          .split(', "AutoConnect"')
          .join("Fortnite")
          .split("Fortnite")
          .filter(function (el, index) {
            return index % 2 === 1;
          })
          .join("\n"));
      }
    });
  };
  fr.readAsText(files.item(0));
};
