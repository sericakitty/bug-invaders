<script>
import Phaser from 'phaser';

import MainMenu from '@/components/buginvaders/menus/MainMenu.vue';
import Level1 from '@/components/buginvaders/scenes/Level1.vue';
import Level2 from '@/components/buginvaders/scenes/Level2.vue';
import Level3 from '@/components/buginvaders/scenes/Level3.vue';
import LevelBonus from '@/components/buginvaders/scenes/LevelBonus.vue';
import EndMenu from '@/components/buginvaders/menus/EndMenu.vue';

export default {
  type: Phaser.Canvas,
  backgroundColor: 'b9eaff',

  scale: {
    mode: Phaser.Scale.NONE,
    width: window.innerWidth <= 320 ? 290 : window.innerWidth <= 425 ? 390 : 490,

    height: 650,
  },

  fps: { target: 60 },
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [MainMenu, Level1, Level2, Level3, LevelBonus, EndMenu],
};
</script>
