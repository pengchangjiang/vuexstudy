<template>
<div>
    <h2>{{msg}}</h2>
  <hr>
  <h3>{{$store.state.count}}</h3>
  <h3>计算属性1：{{count}}</h3>
  <button @click="$store.commit('add',10)">+</button>
  <button @click="$store.commit('reduce')">-</button>
  <p>mapMutations获取：</p>
  <button @click="mutationTest">+</button>
  <button @click="reduce">-</button>
  <p>mapActions获取：</p>
  <button @click="actionTest">+</button>
  <button @click="reduceAction">-</button>
</div>
 
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  computed: {
    ...mapState(["count"])
    // ...mapGetters(["count"]),

    // count2() {
    //   return this.$store.getters.count;
    // }
  },
  // computed: mapState({ count: state => state.count }),
  // computed: mapState(["count"]),
  methods: {
    actionTest() {
      this.addAction(100);
      console.log("action");
    },
    mutationTest() {
      this.add(1);
      console.log("mutations");
    },
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"])
  },
  store
};
</script>
<style>

</style>

