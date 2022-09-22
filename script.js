document.querySelector("input").onchange = function () {
  var files = this.files;
  if (files.length < 1) return;
  var fr = new FileReader();
  fr.onload = function (e) {
    var raw = JSON.stringify(e.target.result).split('\\"');
    raw.forEach(function (e) {
      if (e.includes("QWxsb3dPbmx5UG9saWN5")) {
        var policy=(atob(e))
        document.body.innerHTML=policy
        alert(policy.split('').indexOf('{'))
      }    
    });
  };
  fr.readAsText(files.item(0));
};
