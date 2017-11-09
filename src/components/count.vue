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

  <button @click="promise">promise测试</button>
</div>
 
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex",
      pro: null
    };
  },
  mounted() {
    let p = new Promise(function(resolve, reject) {
      setTimeout(resolve, 2000, "done");
    });
    this.pro = p;
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
    promise() {
      let p = new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000, "done");
      });
      p.then(v => {
        // console.log(v);
        alert(v);
      });
    },
    actionTest() {
      this.addAction(100);
      console.log("action");
    },
    mutationTest() {
      // setTimeout(() => {
      //   this.add(1);
      // }, 1000);
      store.commit({ type: "priceAll", price: 10, count: 3 });
      console.log("mutations");
      this.priceAll([3, 4]);
      this.priceAll({ 1: "kk", 2: "909" });
    },
    ...mapMutations(["add", "reduce", "priceAll"]),
    ...mapActions(["addAction", "reduceAction"])
  },
  store
};
</script>
<style>

</style>

