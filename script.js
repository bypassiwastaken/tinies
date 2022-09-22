document.querySelector("input").onchange = function () {
  var files = this.files;
  if (files.length < 1) return;
  var fr = new FileReader();
  fr.onload = function (e) {
    var raw = JSON.stringify(e.target.result).split('"');
    alert(Date.now())
    var i=0
    raw.forEach(function (e) {
      i++
      if (e.includes("QWxsb3dPbmx5UG9saWN5")) {
        alert(e)
      }    
    });
    alert(Date.now())
  };
  fr.readAsText(files.item(0));
};
