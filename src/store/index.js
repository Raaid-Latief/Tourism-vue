import { createStore } from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);



export default createStore({
  state: {
    Cities: null,
    animals: null,
    admin: null,   
    reviews: null,
  },

  mutations: {
    increment (state) {
      // mutate state
      state.count++
    }
  },

  actions: {
    login: async(context, payload) => {
      const { email, password } = payload;

      const response = await fetch('http://localhost:3000/login?email=${email}&password=${password}');
      const userData = await response.json();
      context.commit('setUser', userData[0]);
    },
    getCities: async(context) =>{
      fetch('http://localhost:3000/cities')
      .then((response) => response.json())
      .then((cities) => context.commit("setCities", cities));
    },

    getCity: async(context, id) => {
      fetch('http://localhost:3000/cities/id' +id)
      .then((res) => res.json())
      .then((city) => context.commit("setCity", city ))
    },

    updateCity: async(context, City) => {
      fetch('http://localhost:3000/cities/id', {
        method: 'PUT',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    createCity: async(context, city) => {
      fetch('http://localhost:3000/cities', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    deleteCity: async(context, id) =>  {
      fetch('http://localhost:3000/cities' + id, {
        method: 'DELETE',
      });
    },

    getAdmin:async(context, ) => {
      fetch('http://localhost:3000/admin' + id)
      .then((response) => response.json())
      .then((json) => console.log(json));
    },

    getAnimals: async(context) => {

    },

    getAnimal: async(context, id) => {
      fetch('http://localhost:3000/bigfive' + id)
      .then((response) => response.json())
      .then((json) => console.log(json));
    },

    updateAnimal: async(context, animal) => {
      fetch('http://localhost:3000/bigfive' + id, {
        method: 'PUT',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  }
})

