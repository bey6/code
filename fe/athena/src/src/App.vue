<template>
  <div id="app">
    <nav class="nav">
      <ul>
        <li>Athena</li>
        <li>dashboard</li>
      </ul>
    </nav>
    <div class="view">
      <h1>Athena</h1>

      <p>Athena is an assistant you need to help your work.</p>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: "微软 雅黑", sans-serif;
  color: #333;
  font-size: 1em;
  font-weight: 500;

  nav,
  .view {
    float: left;
    height: 100%;
  }

  nav {
    width: 256px;
    background-color: #333;
  }

  .view {
    text-align: center;
  }
}
</style>
