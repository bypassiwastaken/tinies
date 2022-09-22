document.querySelector("input").onchange = function () {
  if (this.length < 1) return;
  var fr = new FileReader();
  fr.readAsText(this.files.item(0));
  fr.onload = function (e) {
    var raw = JSON.stringify(e.target.result).split('\\"');
    onclick = function () {
      open().document.write(raw);
    };
    raw.forEach(function (e) {
      if (
        e.includes("IlR5cGUiOiAiV2lGaSIs") ||
        e.includes("VHlwZSI6ICJXaUZpIiw") ||
        e.includes("eXBlIjogIldpRmkiLA")
      ) {
        throw (document.querySelector("pre").textContent = atob(e)
          .replace(/\s\s+/g, " ")
          .split('"WiFi": {')
          .join("youtu.be/dQw4w9WgXcQ")
          .split(', "AutoConnect"')
          .join("youtu.be/dQw4w9WgXcQ")
          .split("youtu.be/dQw4w9WgXcQ")
          .filter(function (el, index) {
            return index % 2 === 1;
          })
          .join("\n"));
      }
    });
  };
};
