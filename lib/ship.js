(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    this.COLOR = 'pink';
    this.RADIUS = 10;
    this.velocity = [0, 0];
    Asteroids.MovingObject.call(this, { pos: options.pos,
                                        velocity: this.velocity,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });
  };

  Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPos();
    this.velocity = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    var newVelocity = [this.velocity[0] + impulse[0],
                       this.velocity[1] + impulse[1]];
    if (Math.abs(newVelocity[0]) <= 4) {
      this.velocity[0] = newVelocity[0];
    }
    if (Math.abs(newVelocity[1]) <= 4) {
      this.velocity[1] = newVelocity[1];
    }
  };

  Ship.prototype.fireBullet = function() {
    var velocity = [this.velocity[0] * 2, this.velocity[1] * 2];
    if (velocity[0] === 0 && velocity[1] === 0) {
      velocity[1] = -2;
    }
    var pos = [this.pos[0], this.pos[1]];
    var bullet = new Asteroids.Bullet({ pos: pos,
                                        velocity: velocity,
                                        game: this.game });
    this.game.bullets.push(bullet);
  };

})();
