var pre = document.querySelector("pre");
pre.textContent =
  "upload your chrome://net-export file that was active while reloading chrome policies";
document.querySelector("input").onchange = function () {
  if (this.length < 1) return;
  var fr = new FileReader();
  fr.readAsText(this.files.item(0));
  fr.onload = function (e) {
    open().document.write(
      e.target.result
        .replace(
          "aGFsZGxnbGRwbGduZ2dramFhZmhlbGdpYWdsYWZhbmg",
          "aGFsZGxnbGRwbGduZ2dramFhZmhlbGdpYWdsYWZhbmh"
        )
        .replace(
          "YWxkbGdsZHBsZ25nZ2tqYWFmaGVsZ2lhZ2xhZmFuaA",
          "YWxkbGdsZHBsZ25nZ2tqYWFmaGVsZ2lhZ2xhZmFuaB"
        )
        .replace(
          "bGRsZ2xkcGxnbmdna2phYWZoZWxnaWFnbGFmYW5o",
          "bGRsZ2xkcGxnbmdna2phYWZoZWxnaWFnbGFmYW5p"
        )
    );
    // var raw = JSON.stringify(e.target.result).split('\\"');
    // raw.forEach(function (e) {
    //   if (
    //     e.includes("aGFsZGxnbGRwbGduZ2c") ||
    //     e.includes("YWxkbGdsZHBsZ25nZw") ||
    //     e.includes("bGRsZ2xkcGxnbmdn")
    //   ) {
    //     throw (pre.textContent = atob(e));
    //   }
    // });
  };
};
