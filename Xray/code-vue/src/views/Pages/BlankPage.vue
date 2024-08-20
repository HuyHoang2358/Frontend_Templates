<template>
  <div></div>
</template>
<script>
import { xray } from '../../config/pluginInit'

export default {
  name: 'BlankPage',
  mounted () {
    xray.index()
  }
}
</script>
