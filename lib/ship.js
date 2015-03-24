(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    this.COLOR = 'pink';
    this.RADIUS = 10;
    this.vel = [0, 0];
    Asteroids.MovingObject.call(this, { pos: options.pos,
                                        vel: this.vel,
                                        color: this.COLOR,
                                        radius: this.RADIUS,
                                        game: options.game });
  };

  Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPos();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    var newVel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
    if (Math.abs(newVel[0]) <= 4) {
      this.vel[0] = newVel[0];
    }
    if (Math.abs(newVel[1]) <= 4) {
      this.vel[1] = newVel[1];
    }
  };

  Ship.prototype.fireBullet = function() {
    var vel = [this.vel[0] * 2, this.vel[1] * 2];
    if (vel[0] === 0 && vel[1] === 0) {
      vel[1] = -2;
    }
    var pos = [this.pos[0], this.pos[1]];
    var bullet = new Asteroids.Bullet({ pos: pos,
                                        vel: vel,
                                        game: this.game });
    this.game.bullets.push(bullet);
  };

})();
