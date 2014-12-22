
class Car
constructor: ->
  geometry = new THREE.CubeGeometry(200,200,200)
  material = new THREE.MeshBasicMaterial
    color: 0xffffff
  @graphics = new THREE.Mesh(geometry, material)
