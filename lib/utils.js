(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Utils = Asteroids.Utils = function () {};

  Utils.prototype.inherits = function(ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Utils.prototype.randomVec = function(length) {
    var directions = [-1, 1];
    var x = Math.random() * length;
    var y = Math.random() * length;
    x *= directions[Math.floor(Math.random() * 2)];
    y *= directions[Math.floor(Math.random() * 2)];
    return [x, y];
  };
})();
