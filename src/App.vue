<template>
  <div id="app">

    <router-view name="header"></router-view>
    <router-view name="default"></router-view>
    <router-view name="footer"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>
