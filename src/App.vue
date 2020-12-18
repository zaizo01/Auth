<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-if="exitUser">Home</router-link> |
      <router-link to="/register" v-if="!exitUser">Register</router-link> |
      <router-link to="/login" v-if="!exitUser">Login</router-link>
      <button @click="signOff" v-if="exitUser">Sign Off</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['signOff'])
  },
  computed: {
    ...mapGetters(['exitUser'])
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
