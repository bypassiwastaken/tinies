var input = document.querySelector("input");
var pre = document.querySelector("pre");
function magic() {
  var value = input.value.trim();
  if (!value) {
    alert("no");
  } else if (!value.startsWith("{")) {
    pre.textContent =
      `now go to the "search" tab in chrome://sync-internals and search for "wifi_"
then click on ` +
      hex(input.value) +
      `
then paste all the code that shows up into the input box and press the magic button`;
  } else if (value.startsWith("{")) {
    var json = JSON.parse(value);
    var name = unhex(json.NON_UNIQUE_NAME.split("<")[0]);
    var pass = json.SPECIFICS.wifi_configuration.passphrase;
    console.log(pass);
    console.log(atob(pass))
  }
}
function hex(wifi) {
  return (
    wifi
      .split("")
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase() + "<||>psk"
  );
}
function unhex(wifi) {
  return wifi
    .split(/(\w\w)/g)
    .filter((c) => !!c)
    .map((c) => String.fromCharCode(parseInt(c, 16)))
    .join("");
}
