<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>test example_home</h2>
    <ul>
      <li>
        <a
          href="https://www.baidu.com"
          target="_blank"
        >
          go to baidu ~
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'example_home',
  data () {
    return {
      test: null
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
