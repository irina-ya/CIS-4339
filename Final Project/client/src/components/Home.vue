<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Worried about how your furry or human loved ones will fare in the end of times? Don't worry, we got you covered!</p>
    
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Apocalypse Now! Insurance Welcome You'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
