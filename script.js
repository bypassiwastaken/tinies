var additionalStars, canvas, context, drawStar, height, i, initialStars, ref, stars, timedStars, width, color=["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"], selection;

$(function() {
  width = screen.width;
  height = screen.height;
  stars = 1;
  additionalStars = Math.round((width * height));
  initialStars = Math.round((width * height) / 15000);

  console.log(initialStars);

  canvas = $('#stars');
  context = canvas[0].getContext("2d");

  context.canvas.width = width;
  context.canvas.height = height;

  drawStar = function(color) {
    var min, x, y;
    context.fillStyle = color;
    min = 15;
    x = Math.random() * (width - min) + min;
    y = Math.random() * (height - min) + min;
    return context.fillRect(x, y, 2, 2);
  };

  for (i = 1, ref = initialStars; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
    drawStar('black');
  }

  timedStars = function() {
    if (stars < additionalStars) {
      selection = Math.floor(Math.random()*8)
      drawStar(color[selection]);
      return stars++;
    }
  };

  setInterval(timedStars, 1);
});
