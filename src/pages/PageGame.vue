<template>
  <section>
    <div class='container'>
      <div class='gamecenteringcontainer' id='game'>
      </div>
    </div>
  </section>
</template>

<script>
import { Game } from 'phaser';
import gameConfig from '@/components/buginvaders/GameConfig.vue';



export default {

  mounted() {
    this.initializePhaser()
  },

  methods: {
    initializePhaser() {
      const config = gameConfig;
      new Game(config);
    },
  },
};
</script>