<template>
  <router-view/>
</template>
<script>
import { xray } from './config/pluginInit'

export default {
  name: 'App',
  components: {
  },
  mounted () {
    xray.mainIndex()
  }
}
</script>
<style lang="scss">
  @import "assets/scss/style.scss";
</style>
