<script>
import LevelHandler from '@/components/buginvaders/LevelHandler.vue';

export default class Level1 extends LevelHandler {
  constructor() {
    super('Level 1');
    this.gameState.enemyGroups = ['bug1'];
    this.gameState.numOfEnemiesPerXLine = 5;
    this.gameState.numOfEnemiesPerYLine = 1;

    this.nextLevel = 'Level 2';
  }
}

</script>