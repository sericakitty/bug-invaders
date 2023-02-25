<template>
  <section>
    <footer class="footer">
      <div v-once>&copy; 2020 - {{ year }} sericakitty.github.io. All Rights Reserved.</div>
    </footer>
  </section>
</template>

<script>
import { computed } from 'vue';
export default {
  data() {
    return {
      year: computed(() =>
        Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(new Date())
      )
    };
  },
};
</script>
