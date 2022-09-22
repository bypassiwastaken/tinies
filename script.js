document.querySelector("input").onchange = function () {
  var files = this.files;
  if (files.length < 1) return;
  var fr = new FileReader();
  fr.onload = function (e) {
    var raw = JSON.stringify(e.target.result).split('\\"');
    raw.forEach(function (e) {
      if (e.includes("QWxsb3dPbmx5UG9saWN5")) {
        document.body.textContent = atob(e)
          .split('"WiFi": {')
          .join("Fortnite")
          .split('"AutoConnect"')
          .join("Fortnite")
          .split("\nFortnite")
          .filter(function (el, index) {
            return index % 2 === 0;
          });
      }
    });
  };
  fr.readAsText(files.item(0));
};
