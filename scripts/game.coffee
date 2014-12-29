
class Street
  constructor:()->
    @scene = null
    @camera = null
    @renderer = null

  init:()=>
    @scene = new THREE.Scene()
    @camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000)
    @camera.position.z = 300
    @camera.position.y = 300

    @camera.lookAt(@scene.position)
    @renderer = new THREE.WebGLRenderer()
    @renderer.setClearColor(0x333333)
    @renderer.setSize(window.innerWidth,window.innerHeight)
    $("#render").append(@renderer.domElement)
    car = new Car()
    car.position.y = 10
    car.position.z = 0
    car.position.x = 0
    @camera.lookAt(car.position)
    @scene.add(car)

    planegeo = new THREE.PlaneGeometry(250,250,50,50);
    planemat = new THREE.MeshBasicMaterial
      color : 0x00dd00
    plane = new THREE.Mesh(planegeo,planemat)
    plane.rotation.x = -0.5 *Math.PI
    @scene.add(plane)
  render:()=>

    @renderer.render(@scene,@camera)
  update:()=>
