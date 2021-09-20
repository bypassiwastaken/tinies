var images = [
  "https://cdn.glitch.com/dc9ee42b-96d0-4681-872d-2ed8d00b2ba8%2Fc73c517f-3904-4e0e-b8b9-415b5d85a0a1.image.png?v=1591739830828"
];
var token = 0;
document.body.onclick = function() {
  document.body.style.backgroundImage = "url('" + images[token] + "')";
  if (token < images.length - 1) token += 1;
};
