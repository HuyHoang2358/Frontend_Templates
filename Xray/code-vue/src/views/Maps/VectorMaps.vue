<template>
  <div></div>
</template>
<script>
import { xray } from '../../config/pluginInit'

export default {
  name: 'VectorMaps',
  mounted () {
    xray.index()
  }
}
</script>
