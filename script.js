var net;
var button = document.querySelector("button");
var pre = document.querySelector("pre");
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
        button.removeAttribute("disabled");
        net = atob(e)
          .replace(/\s\s+/g, " ")
          .replace(/\\u([\d\w]{4})/gi, function (a, b) {
            return String.fromCharCode(parseInt(b, 16));
          })
          .replace(/\\\\/g, "\\");
        throw (pre.textContent = net
          .split('"WiFi": {')
          .join("youtu.be/dQw4w9WgXcQ")
          .split('"AutoConnect"')
          .join("youtu.be/dQw4w9WgXcQ")
          .split("youtu.be/dQw4w9WgXcQ")
          .filter(function (el, index) {
            return index % 2 === 1;
          })
          .join("\n"));
      } else button.disabled = true;
      pre.textContent =
        "no passwords were found; make sure you were importing the right file and have a DeviceOpenNetworkConfiguration in chrome://policy";
    });
  };
};
function raw() {
  open().document.write(net);
}
