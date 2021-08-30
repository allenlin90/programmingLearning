export default {
    namespaced: true,
    state() {
        return {
            cart: { 
                items: [], 
                total: 0, 
                qty: 0 
            },
        }
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        products(state) { return state.cart.items },
        totalSum(state) { return state.cart.total },
        quantity(state) { return state.cart.qty },
    },
    mutations: {
        addToCart(state, payload) {
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.productId === payload.id
            );
    
            if (productInCartIndex >= 0) {
                state.cart.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: payload.id,
                    title: payload.title,
                    image: payload.image,
                    price: payload.price,
                    qty: 1,
                };
                state.cart.items.push(newItem);
            }
            state.cart.qty++;
            state.cart.total += payload.price;
        },
        removeFromCart(state, payload) {
            const productId = payload.prodId
            const productInCartIndex = state.cart.items.findIndex(
                (cartItem) => cartItem.productId === productId
            );
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCart(context, payload) {
            context.commit('addToCart', payload);
        },
        removeFromCart(context, payload) {
            context.commit('removeFromCart', payload);
        },
    }
}