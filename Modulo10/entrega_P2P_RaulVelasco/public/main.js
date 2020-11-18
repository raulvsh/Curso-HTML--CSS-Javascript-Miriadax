const OPPONENT_HEIGHT = 5,
  OPPONENT_PICTURE = "assets/img/malo.png",
  OPPONENT_PICTURE_DEAD = "assets/img/malo_muerto.png",
  OPPONENT_SPEED = 1.6, //Por defecto a 5, ajustada a los nuevos fps
  OPPONENT_WIDTH = 5,
  GAME_OVER_PICTURE = "assets/game_over.png",
  KEY_LEFT = "LEFT",
  KEY_RIGHT = "RIGHT",
  KEY_SHOOT = "SHOOT",
  MIN_TOUCHMOVE = 20,
  PLAYER_HEIGHT = 5,
  PLAYER_PICTURE = "assets/img/bueno.png",
  PLAYER_PICTURE_DEAD = "assets/img/bueno_muerto.png",
  PLAYER_SPEED = 6.4, //Por defecto a 20, ajustada a los nuevos fps
  PLAYER_WIDTH = 5,
  SHOT_HEIGHT = 1.5,
  SHOT_SPEED = 6.4, //Por defecto a 20, ajustada a los nuevos fps
  SHOT_PICTURE_PLAYER = "assets/img/shot1.png",
  SHOT_PICTURE_OPPONENT = "assets/img/shot2.png",
  SHOT_WIDTH = 1.5,
  NUM_LIVES = 3,
  BOSS_PICTURE = "assets/img/jefe.png",
  BOSS_PICTURE_DEAD = "assets/img/jefe_muerto.png"
  YOU_WIN_PICTURE = "assets/img/you_win.png";
  BOSS_WIDTH = 20;
  BOSS_HEIGHT = 20;

function getRandomNumber(range) {
  return Math.floor(Math.random() * range);
}

function collision(div1, div2) {
  const a = div1.getBoundingClientRect(),
    b = div2.getBoundingClientRect();
  return !(
    a.bottom < b.top ||
    a.top > b.bottom ||
    a.right < b.left ||
    a.left > b.right
  );
}
var game;
document.addEventListener("DOMContentLoaded", () => {
  game = new Game();
  game.start();
});
