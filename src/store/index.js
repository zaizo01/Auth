import Vue from 'vue'
import Vuex from 'vuex'

import { auth, db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    tareas: []
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    },
    setError(state, payload){
      state.error = payload;
    },
    setTareas(state, payload){
      state.tareas = payload;
    }
  },
  actions: {
    getTareas({commit, state}){
      const tareas = []
      db.collection(state.user.email).get()
      .then(resp => {
          resp.forEach(doc => {
              console.log(doc.id)
              console.log(doc.data())
              let tarea = doc.data()
              tarea.id = doc.id
              tareas.push(tarea)
          })
          commit('setTareas', tareas)
      })
    },
    createUser({commit}, user){
      auth.createUserWithEmailAndPassword(user.email, user.password)
          .then(resp => {
            console.log(resp);
            const userCreated = {
              email: resp.user.email,
              uid: resp.user.uid
            }

            db.collection(resp.user.email).add({
              name: 'example'
            }).then(doc => {
              commit('setUser', userCreated);
              router.push('/');
            }).catch(error => console.log(error)) 
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
    },
    detectUser({commit}, user){
      commit('setUser', user);
    }
  },
  getters: {
    exitUser(state){
      if (state.user === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})
