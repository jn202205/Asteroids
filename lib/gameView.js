(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(ctx) {
    this.ctx = document.getElementById('game-canvas').getContext('2d');
    this.game = new Asteroids.Game();
  };

  GameView.prototype.start = function() {
    var self = this;
    setInterval(function() {
      self.game.step();
      self.game.draw(self.ctx);
    }, 20);
  };
})();
