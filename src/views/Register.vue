<template>
    <div>
        <h1>Register</h1>
        <form>
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
            <button type="submit">Sign in</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            firstPass: '',
            secondPass: ''
        }
    },
}
</script>

<style>

</style>