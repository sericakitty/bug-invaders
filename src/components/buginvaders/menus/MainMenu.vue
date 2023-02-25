<script>
import LevelHandler from '@/components/buginvaders/LevelHandler.vue';

export default class MainMenu extends LevelHandler {
  constructor() {
    super({ key: 'Main Menu' });
    this.key = 'Main Menu'
    this.nextLevel = 'Level 1';
  }

  init() {
    console.log(`This is ${this.key}`);
  }


  create() {

    this.add.text(this.width * 0.35, this.height * 0.20, 'Bug Invaders', { fill: '#d660ff', fontSize: '30px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio

    this.add.image(this.width * 0.25, this.height * 0.50, 'bug1').scale = this.ratio

    this.add.image(this.width * 0.50, this.height * 0.33, 'bug2').scale = this.ratio
    this.add.image(this.width * 0.75, this.height * 0.50, 'bug3').scale = this.ratio

    this.add.image(this.width * 0.50, this.height * 0.94, 'codey').scale = this.ratio

    this.add.image(this.width * 0.5, this.height * 0.99, 'platform').setDisplaySize(this.width, 15)

    this.add.triangle(this.width * 0.5, this.height * 0.5, 0, 100, 100, 50, 0, 0, 0xe47fff).scale = this.ratio
    this.add.text(this.width * 0.3, this.height * 0.5, 'Click to start!', { fill: '#000000', fontSize: '30px' }).scale = this.ratio

    this.add.text(this.width * 0.3, this.height * 0.65, 'Move with arrow keys', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio
    this.add.text(this.width * 0.3, this.height * 0.70, 'Shoot with spacebar', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio
    this.add.text(this.width * 0.3, this.height * 0.75, 'Kill all invaders and do', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio
    this.add.text(this.width * 0.3, this.height * 0.80, 'not let them reach you', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio

    this.goNextLevel();
  }

  update() {
    // this.resizeWold()

    // this.gameState.text1.x = this.width * 0.5;
    // this.gameState.text1.y = this.height * 0.20;
    // this.gameState.text1.setOrigin(0.5);
    // this.gameState.text1.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.bug1.x = this.width * 0.3;
    // this.gameState.bug1.y = this.height * 0.50;
    // this.gameState.bug1.setOrigin(1);
    // this.gameState.bug1.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.bug2.x = this.width * 0.55;
    // this.gameState.bug2.y = this.height * 0.33;
    // this.gameState.bug2.setOrigin(1);
    // this.gameState.bug2.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.bug3.x = this.width * 0.8;
    // this.gameState.bug3.y = this.height * 0.50;
    // this.gameState.bug3.setOrigin(1);
    // this.gameState.bug3.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.player.x = this.width * 0.55;
    // this.gameState.player.y = this.height * 0.94;
    // this.gameState.player.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.platform.x = this.width * 0.5;
    // this.gameState.platform.y = this.height * 0.99;
    // this.gameState.platform.setDisplaySize(this.width, 15);

    // this.gameState.triangle.x = this.width * 0.55;
    // this.gameState.triangle.y = this.height * 0.5;
    // this.gameState.triangle.setOrigin(0.5);
    // this.gameState.triangle.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.text2.x = this.width * 0.55;
    // this.gameState.text2.y = this.height * 0.5;
    // this.gameState.text2.setOrigin(0.5);
    // this.gameState.text2.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.text3.x = this.width * 0.55;
    // this.gameState.text3.y = this.height * 0.65;
    // this.gameState.text3.setOrigin(0.5);
    // this.gameState.text3.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.text4.x = this.width * 0.55;
    // this.gameState.text4.y = this.height * 0.7;
    // this.gameState.text4.setOrigin(0.5);
    // this.gameState.text4.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.text5.x = this.width * 0.55;
    // this.gameState.text5.y = this.height * 0.75;
    // this.gameState.text5.setOrigin(0.5);
    // this.gameState.text5.scale = this.ratio > 1 ? 1 : this.ratio;

    // this.gameState.text6.x = this.width * 0.55;
    // this.gameState.text6.y = this.height * 0.8;
    // this.gameState.text6.setOrigin(0.5);
    // this.gameState.text6.scale = this.ratio > 1 ? 1 : this.ratio;
  }
}
</script>