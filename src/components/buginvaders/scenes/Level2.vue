<script>
import LevelHandler from '@/components/buginvaders/LevelHandler.vue';

export default class Level2 extends LevelHandler {
  constructor() {
    super('Level 2');
    this.gameState.enemyGroups = ['bug2'];
    this.gameState.numOfEnemiesPerXLine = 5;
    this.gameState.numOfEnemiesPerYLine = 2;

    this.nextLevel = 'Level 3';
  }
}
</script>