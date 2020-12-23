<template>
  <div>
      <h1>Welcome {{ user.email }}</h1>
      <ul>
        <li v-for="(item, index) in tareas" :key="index">
          {{item.id}} - {{item.name}}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Index',
    computed: {
      ...mapState(['user','tareas'])
    },
    methods: {
      ...mapActions(['getTareas'])
    },
     created() {
      this.getTareas
    },
}
</script>

<style>

</style>