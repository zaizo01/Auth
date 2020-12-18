import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    },
    setError(state, payload){
      state.error = payload;
    }
  },
  actions: {
    createUser({commit}, user){
      auth.createUserWithEmailAndPassword(user.email, user.password)
          .then(resp => {
            console.log(resp);
            const userCreated = {
              email: resp.user.email,
              uid: resp.user.uid
            }
            commit('setUser', userCreated);
            router.push('/');
          })
          .catch(error => {
            console.log(error);
            commit('setError', error);
          })
    },
    loginUser({commit}, user){
      auth.signInWithEmailAndPassword(user.email, user.password)
          .then(resp => {
            console.log(resp);
            const userLogged = {
              email: resp.user.email,
              uid: resp.user.uid
            }
            commit('setUser', userLogged);
            router.push('/');
          })
          .catch(error => {
            console.log(error);
            commit('setError', error);
          })
    },
    signOff({commit}){
      auth.signOut()
          .then(() => {
            router.push('/login');
          })
    }
  },
  modules: {
  }
})
