(function() {
  var Street,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Street = (function() {
    function Street() {
      this.update = __bind(this.update, this);
      this.render = __bind(this.render, this);
      this.init = __bind(this.init, this);
      this.scene = null;
      this.camera = null;
      this.renderer = null;
    }

    Street.prototype.init = function() {
      var car;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRendeer();
      this.renderer.setClearColor(0x333333);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      $("#render").append(this.renderer.domElement);
      car = new Car();
      return this.scene.add(car.geometry);
    };

    Street.prototype.render = function() {
      return this.renderer.render(this.scene, this.camera);
    };

    Street.prototype.update = function() {};

    return Street;

  })();

}).call(this);
