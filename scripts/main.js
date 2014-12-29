(function() {
  var $game, mainLoop;

  $game = null;

  window.onload = function() {
    $game = new Street();
    $game.init();
    $game.render();
    return mainLoop();
  };

  mainLoop = function() {
    requestAnimationFrame(mainLoop);
    return $game.render();
  };

}).call(this);
