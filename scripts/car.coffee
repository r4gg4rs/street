
class Car extends THREE.Mesh
  constructor: ->
  
    geometry = new THREE.CubeGeometry(50,50,50)
    material = new THREE.MeshBasicMaterial
      color: 0xff0000
    THREE.Mesh.call @, geometry, material 
  
    @inverseMass
