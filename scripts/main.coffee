
$game = null
window.onload =->
  $game = new Street()
  $game.init()
  $game.render()
  mainLoop()
mainLoop =->
  requestAnimationFrame(mainLoop)
  $game.render()
