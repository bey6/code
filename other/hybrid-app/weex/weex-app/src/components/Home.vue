<template>
  <div class="home">
    <label>评论</label>
    <input type="text" placeholder="输入点什么" />
    <button>提交</button>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
* {
  margin: 15px;
}

.home {
  background-color: #fafafa;
  border-radius: 3px;
}

.home > input[type="radio"] {
  display: inline-block;
}

.home > input[type="text"] {
  height: 30px;
  border-radius: 3px;
  padding: 2px 10px;
  box-shadow: 0px 0px 5px 0px #999;
  margin: 15px;
}

.home > button {
  border-radius: 3px;
  text-align: center;
  box-shadow: 0px 0px 5px -1px crimson;
  margin: 15px;
  line-height: 30px;
  align-items: center;
  background-color: crimson;
  color: #fff;
}
</style>