
class Street
  constructor:()->
    @scene = null
    @camera = null
    @renderer = null

  init:()=>
    @scene = new THREE.Scene()
    @camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000)
    @renderer = new THREE.WebGLRendeer()
    @renderer.setClearColor(0x333333)
    @renderer.setSize(window.innerWidth,window.innerHeight)
    $("#render").append(@renderer.domElement)
    car = new Car()
    @scene.add(car.geometry)
  render:()=>
    @renderer.render(@scene,@camera)
  update:()=>
