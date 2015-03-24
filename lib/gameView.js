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
    this.bindKeyHandlers();
    setInterval(function() {
      self.game.step();
      self.game.draw(self.ctx);
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.game.ship;
    key('a, left', function() { ship.power([-1, 0]); });
    key('w, up', function() { ship.power([0, -1]) });
    key('s, down', function() { ship.power([0, 1]) });
    key('d, right', function() { ship.power([1, 0]); });
    key('space', function() { ship.fireBullet(); });
  };
})();
