(function() {
  var Car;

  Car = (function() {
    function Car() {}

    return Car;

  })();

  ({
    constructor: function() {
      var geometry, material;
      geometry = new THREE.CubeGeometry(200, 200, 200);
      material = new THREE.MeshBasicMaterial({
        color: 0xffffff
      });
      return this.graphics = new THREE.Mesh(geometry, material);
    }
  });

}).call(this);
