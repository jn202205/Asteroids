(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    this.COLOR = 'blue';
    this.RADIUS = 2;
    Asteroids.MovingObject.call(this, { pos: options.pos,
                                        vel: options.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });

  };

  Utils.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  };
})();
