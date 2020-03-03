<template>
  <div class="home">
    <input type="text"
           v-model="msg">
    <p>{{msg}}</p>
    <button @click="handleTick">nextTick</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: ''
  }),
  methods: {
    async handleTick () {
      this.msg = 'hello nextTick'
      console.log('1. ' + document.querySelector('p').textContent);

      setTimeout(() => {
        console.log('5. from timeout');
      }, 0)

      process.nextTick(() => {
        console.log('4. from nextTick');
      })

      setImmediate(() => {
        console.log('3. from immediate');
      })

      await this.$nextTick()
        .then(function () {
          console.log('2. ' + document.querySelector('p').textContent);
        })
    }
  }
}
</script>
