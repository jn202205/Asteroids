(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    this.COLOR = 'pink';
    this.RADIUS = 10;
    this.vel = [0, 0];
    Asteroids.MovingObject.call(this, { pos: options.pos, vel: this.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });
  };

  Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPos();
    this.vel = [0, 0];
  };

})();
