function inputs() {
  return document.querySelectorAll("input");
}
function add(element) {
  element.before(document.createElement("input"));
}
function subtract() {
  if (inputs()[1]) inputs()[inputs().length - 1].remove();
}
function gen() {
  var onc = { Type: "UnencryptedConfiguration", NetworkConfigurations: [] };
  for (var i = 0; i < inputs().length; i++) {
    try {
      var network = JSON.parse(inputs()[i].value);
      if (!network.GUID || !network.Name || !network.WiFi) throw new Error();
      onc.NetworkConfigurations.push({
        GUID: network.GUID,
        Metered: true,
        Name: network.Name,
        Type: "WiFi",
        WiFi: {
          AutoConnect: true,
          SSID: network.Name,
          Security: "None",
        },
      });
      inputs()[i].style.borderColor = "lime";
    } catch (error) {
      console.error(error);
      inputs()[i].style.borderColor = "red";
    }
  }
  if (onc.NetworkConfigurations[0]) download(onc);
}
function download(object) {
  var link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([JSON.stringify(object)]));
  link.download = "caub.onc";
  link.click().remove();
}
