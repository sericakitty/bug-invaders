<script>
import LevelHandler from '@/components/buginvaders/LevelHandler.vue';

export default class Level3 extends LevelHandler {
  constructor() {
    super('Level 3');
    this.gameState.enemyGroups = ['bug3'];
    this.gameState.numOfEnemiesPerXLine = 5;
    this.gameState.numOfEnemiesPerYLine = 3;

    this.nextLevel = 'Level Bonus';
  }
}

</script>