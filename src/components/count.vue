<template>
<div>
    <h2>{{msg}}</h2>
  <hr>
  <h3>{{$store.state.count}}</h3>
  <h3>计算属性1：{{count}}</h3>
  <button @click="$store.commit('add',10)">+</button>
  <button @click="$store.commit('reduce')">-</button>
  <p>mapMutations获取：</p>
  <button @click="add(10)">+</button>
  <button @click="reduce">-</button>
</div>
 
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
    // count2() {
    //   return this.$store.getters.count;
    // }
  },
  // computed: mapState({ count: state => state.count }),
  // computed: mapState(["count"]),
  methods: mapMutations(["add", "reduce"]),
  store
};
</script>
<style>

</style>

