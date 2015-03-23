(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var x1 = this.pos[0];
    var x2 = otherObject.pos[0];
    var y1 = this.pos[1];
    var y2 = otherObject.pos[1];
    var distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    if (distance < (this.radius + otherObject.radius)) {
      return true;
    }
    return false;
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    this.game.remove(this);
    this.game.remove(otherObject);
  };
})();
