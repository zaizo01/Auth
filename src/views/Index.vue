<template>
  <div>
      <h1>Welcome {{ user.email }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Index',
    computed: {
      ...mapState(['user'])
    },
}
</script>

<style>

</style>