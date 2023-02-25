<script>
import LevelHandler from '@/components/buginvaders/LevelHandler.vue';

export default class EndMenu extends LevelHandler {
  constructor() {
    super({ key: 'End Menu' });
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

    this.add.text(this.width * 0.25, this.height * 0.6, 'Thank you for playing!', { fill: '#000000', fontSize: '30px' }).scale = this.ratio
    this.add.text(this.width * 0.35, this.height * 0.75, 'Click for', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio
    this.add.text(this.width * 0.35, this.height * 0.80, 'play again!', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).scale = this.ratio

    this.goNextLevel();
  }

}
</script>