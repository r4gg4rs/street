
class Car extends THREE.Mesh
constructor: ->
  geometry = new THREE.CubeGeometry(200,200,200)
  material = new THREE.MeshBasicMaterial
    color: 0xffffff

  THREE.Mesh.call @, geometry, material
