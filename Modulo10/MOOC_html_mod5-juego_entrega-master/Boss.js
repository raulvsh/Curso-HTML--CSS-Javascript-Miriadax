/**
 * Jefe al que tenemos que destruir
 */
class Boss extends Opponent {
  /**
   * @param game {Game} La instancia del juego al que pertenece el oponente
   */
  constructor(game) {
    const myImage = BOSS_PICTURE;
    const myImageDead = BOSS_PICTURE_DEAD;
    const width = (BOSS_WIDTH * game.width) / 100;
    const height = (BOSS_HEIGHT * game.height) / 100;

    super(game, width, height);
    this.opponent = "Boss";
    this.speed = 2 * OPPONENT_SPEED;
    this.myImage = myImage;
    this.myImageDead = myImageDead;
    this.image.src = this.opponent.dead === true ? myImageDead : myImage;
    this.direction = "R"; // Dirección hacia la que se mueve el oponente
    setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
  }
}
