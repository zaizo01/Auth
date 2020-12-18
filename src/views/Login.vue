<template>
  <div>
      <h1>Login</h1>
      <form @submit.prevent="loginUser({email: email, password: password})">
          <input 
            type="email" 
            placeholder="Email"
            v-model="email">
          <input 
            type="password" 
            placeholder="Password"
            v-model="password">
            <button type="submit">Login</button>
            <p>{{ error }}</p>
      </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['loginUser'])
    },
    computed: {
        ...mapState(['error'])
    },
}
</script>

<style>

</style>