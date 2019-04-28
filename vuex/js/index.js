const Counter = {
    template: '<div>{{name}}:{{count}}</div>',
    // computed: {
    //     count(){
    //         return this.$store.state.count;
    //     }
    // }
    computed: Vuex.mapState(['count', 'name'])
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        name: 'zero'
    },
    mutations: {
        increment(state){
            state.count ++;
        },
        mapNum2Str(state){
            state.name += state.count;
        }
    }
});

const app = new Vue({
    el: '#app',
    components: {
        Counter
    },
    store,
    template: `
        <div id="app">
            <counter></counter>
            <button @click="increment">increment</button>
        </div>
    `,
    methods: {
        increment(){
            this.$store.commit('mapNum2Str');
            this.$store.commit('increment');
        }
    }
});