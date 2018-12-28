<template>
  <div>
    <button @click="send">点我发送消息</button>
    <p>
      收到消息如下：{{msg.toString()}}
    </p>
  </div>

</template>
<script>
export default {
  data() {
    return {
      id: "",
      msg: []
    };
  },
  mounted() {
    // this.$socket.emit("connect", "触发连接");
  },
  computed: {},
  sockets: {
    // connect() {
    //   this.id = this.$socket.id;
    //   console.log("connect", "连接上了");
    // },
    res(data) {
      this.msg.push(data);
    }
  },
  methods: {
    send() {
      console.log("消息已发出");
      this.$socket.emit("res", "点击发送的消息");
    }
  }
};
</script>
<style>
</style>

