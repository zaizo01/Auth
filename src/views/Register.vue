<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="createUser({email: email, password: firstPass})">
            <input 
                type="text"
                placeholder="Email"
                v-model="email"
            >
            <input 
                type="password"
                placeholder="Password"
                v-model="firstPass"
            >
            <input 
                type="password"
                placeholder="Password"
                v-model="secondPass"
            >
            <button type="submit" :disabled="!deactivate">Sign in</button>
        </form>
        <p v-if="error">{{ error }}</p>
        
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            firstPass: '',
            secondPass: ''
        }
    },
    methods: {
        ...mapActions(['createUser'])
    },
    computed: {
        ...mapState(['error']),
        deactivate(){
            return this.firstPass === this.secondPass && this.firstPass !== '' && this.firstPass > 5;
        }
    },
    
}
</script>

<style>

</style>