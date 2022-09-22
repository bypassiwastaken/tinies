document.querySelector("input").onchange = function () {
  var files = this.files;
  if (files.length < 1) return;
  var fr = new FileReader();
  fr.onload = function (e) {
    var formatted = JSON.stringify(e.target.result);
    document.body.textContent += formatted;
  };
  fr.readAsText(files.item(0));
};
