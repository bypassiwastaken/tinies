var input = document.querySelector("input");
var pre = document.querySelector("pre");
input.onkeydown = function (e) {
  if (e.key === "Enter") magic();
};
function magic() {
  var value = input.value.trim();
  if (!value.startsWith("{")) {
    pre.textContent = `now go to chrome://sync-internals
and click on the "search" tab
and search for "wifi_"

then click on:
${value ? hex(value, true) : "the wifi of your choice"}

then paste all the code that shows up into the input box
and press the magic button`;
  } else
    try {
      var json = JSON.parse(value);
      pre.textContent = `data successfully found:

wifi name: ${hex(json.NON_UNIQUE_NAME.split("<")[0])}
wifi pass: ${atob(json.SPECIFICS.wifi_configuration.passphrase)}`;
    } catch (e) {
      pre.textContent = e.toString().toLowerCase();
    }
}
function hex(wifi, way) {
  return way
    ? wifi
        .split("")
        .map((e) => e.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase() + "<||>psk"
    : wifi
        .split(/(\w\w)/g)
        .filter((e) => !!e)
        .map((e) => String.fromCharCode(parseInt(e, 16)))
        .join("");
}
