<template>
  <TheNavBar />
  <main class='footerfixer'>
    <div id="header">
      <h1>Bug Invaders</h1>
      <div class="sourcecode">
        <a href="https://github.com/sericakitty/bug-invaders" class="sourcecodelink" target="_blank">Source code link</a>
      </div>
    </div>
    <PageGame />
  </main>
  <TheFooter />
</template>

<script>

import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import PageGame from '@/pages/PageGame.vue'


export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
    PageGame
  },

}
</script>

<style>
@import url('https://sericakitty.github.io/styles.css');

.container {
  text-align: center;
  height: 400px;
}

#header {
  text-align: center;
}

h1 {
  margin-bottom: 0px;
}

.sourcecode {
  display: inline-block;
  text-align: center;
}

.sourcecodelink {
  color: var(--src-code-color);
}

.sourcecodelink:hover {
  color: var(--src-code-hover);
}

.footerfixer {
  min-height: 100vh
}
</style>
