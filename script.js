var pre = document.querySelector("pre");
pre.textContent =
  "upload your chrome://net-export file which was active while reloading chrome policies";
document.querySelector("input").onchange = function () {
  if (this.length < 1) return;
  var fr = new FileReader();
  fr.readAsText(this.files.item(0));
  fr.onload = function (e) {
    var raw = JSON.stringify(e.target.result).split('\\"');
    raw.forEach(function (e) {
      if (
        e.includes("IlR5cGUiOiAiV2lGaSIs") ||
        e.includes("VHlwZSI6ICJXaUZpIiw") ||
        e.includes("eXBlIjogIldpRmkiLA")
      ) {
        throw (pre.textContent = atob(e)
          .replace(/\s\s+/g, " ")
          .split('"WiFi": {')
          .join("youtu.be/dQw4w9WgXcQ")
          .split(', "AutoConnect"')
          .join("youtu.be/dQw4w9WgXcQ")
          .split("youtu.be/dQw4w9WgXcQ")
          .filter(function (el, index) {
            return index % 2 === 1;
          })
          .join("\n")
          .replace(/\\u([\d\w]{4})/gi, function (a, b) {
            return String.fromCharCode(parseInt(b, 16));
          }));
      }
      pre.textContent =
        "no passwords were found; make sure you were importing the right file and have a DeviceOpenNetworkConfiguration in chrome://policy";
    });
  };
};
