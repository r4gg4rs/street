(function() {
  window.onload = function() {
    var game;
    game = new Street();
    game.init();
    return game.render();
  };

}).call(this);
