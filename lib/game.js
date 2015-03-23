(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 5;
    this.addAsteroids(this.NUM_ASTEROIDS);
  };

  Game.prototype.addAsteroids = function(numAsteroids) {
    this.asteroids = [];
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(new Asteroids.Asteroid({pos: this.randomPos(),
                                                  game: this}));
    }
  };

  Game.prototype.randomPos = function() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] > this.DIM_X) {
      pos[0] -= this.DIM_X;
    }
    if (pos[1] > this.DIM_Y) {
      pos[1] -= this.DIM_Y;
    }
    if (pos[0] < 0) {
      pos[0] += this.DIM_X;
    }
    if (pos[1] < 0) {
      pos[1] += this.DIM_Y;
    }
    return pos;
  }

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = 0; j < this.asteroids.length; j++) {
        if (i !== j && this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          alert("COLLISION!!!!!!!!!!!!");
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  };
})();
