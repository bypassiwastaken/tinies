var input = document.querySelector("input");
var pre = document.querySelector("pre");
function magic() {
  if (!input.value) {
    alert("no");
  } else if (!input.value.startsWith("{")) {
    pre.textContent =
      'now go to the "search" tab in chrome://sync-internals and search for ' +
      hex(input.value);
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
