(function() {
  var Car,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Car = (function(_super) {
    __extends(Car, _super);

    function Car() {
      return Car.__super__.constructor.apply(this, arguments);
    }

    return Car;

  })(THREE.Mesh);

  ({
    constructor: function() {
      this.geometry = new THREE.CubeGeometry(200, 200, 200);
      this.material = new THREE.MeshBasicMaterial({
        color: 0xff0000
      });
      return THREE.Mesh.call(this);
    }
  });

}).call(this);
