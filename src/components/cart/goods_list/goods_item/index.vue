<template>
  <div class="goods-item">
    <div>{{ role }}</div>
    <div class="price">￥{{ price }}</div>
    <div class="handle">
      <div @click="reduce" class="btn">-</div>
      <div>{{ msg.count }}</div>
      <div @click="increment" class="btn">+</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['role', 'price', 'msg'],
  components: {},
  methods: {
    reduce() {
      if (this.msg.count < 1) {
        return;
      }
      this.$store.dispatch('set_count', {
        role: this.role,
        count: -1,
      });
    },
    increment() {
      this.$store.dispatch('set_count', {
        role: this.role,
        count: 1,
      });
    },
  },
};
</script>

<style scoped>
.goods-item {
  display: flex;
  margin-top: 10px;
}
.handle {
  display: flex;
}
.price {
  width: 60px;
  margin: 0 20px;
}
.handle {
  padding: 0 10px;
  background-color: #deacf5;
}
.handle div {
  margin-left: 10px;
}
.btn {
  cursor: pointer;
  font-size: 18px;
}
</style>
