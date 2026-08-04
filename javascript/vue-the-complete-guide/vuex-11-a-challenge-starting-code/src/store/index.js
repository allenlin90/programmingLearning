import { createStore } from 'vuex';

import productModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
    modules: {
        productModule,
        cartModule,
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    getters: {
        loginStatus(state){
            return state.isLoggedIn;
        },
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
    },
    actions: {
        login(context) {
            context.commit('setAuth', {isAuth: true,});
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false,});
        },
    }
});

export default store;