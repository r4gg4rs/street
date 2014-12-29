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
      var car, plane, planegeo, planemat;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 300;
      this.camera.position.y = 300;
      this.camera.lookAt(this.scene.position);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setClearColor(0x333333);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      $("#render").append(this.renderer.domElement);
      car = new Car();
      car.position.y = 10;
      car.position.z = 0;
      car.position.x = 0;
      this.camera.lookAt(car.position);
      this.scene.add(car);
      planegeo = new THREE.PlaneGeometry(250, 250, 50, 50);
      planemat = new THREE.MeshBasicMaterial({
        color: 0x00dd00
      });
      plane = new THREE.Mesh(planegeo, planemat);
      plane.rotation.x = -0.5 * Math.PI;
      return this.scene.add(plane);
    };

    Street.prototype.render = function() {
      return this.renderer.render(this.scene, this.camera);
    };

    Street.prototype.update = function() {};

    return Street;

  })();

}).call(this);
