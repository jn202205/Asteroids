(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Utils = new Asteroids.Utils();

  var Asteroid = Asteroids.Asteroid = function(options) {
    this.COLOR = 'black';
    this.RADIUS = 10;
    this.vel = Utils.randomVec(10);
    Asteroids.MovingObject.call(this, { pos: options.pos, vel: this.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });
  };

  Utils.inherits(Asteroid, Asteroids.MovingObject);
})();
