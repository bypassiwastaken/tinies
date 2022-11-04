var input = document.querySelector("input");
var pre = document.querySelector("pre");
function magic() {
  pre.textContent = "now go to chrome://sync-internals and" + input.value;
}
function hex(e) {
  return e
    .split("")
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase() + "<||>psk";
}