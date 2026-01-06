
<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderPortofolio />
    
  </div>
  <router-view />
</template>

<script>
import HeaderPortofolio from '@/components/HeaderPortofolio.vue';
export default { name: 'App', components: { HeaderPortofolio } };
</script>

