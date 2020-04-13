<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({})
};
</script>

<style scoped>
.app > a {
  font-size: 30px;
  font-weight: 700;
  color: #2c2c2c;
}
</style>
