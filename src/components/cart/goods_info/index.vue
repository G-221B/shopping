<template>
  <div class="goods-info">
    <span>男士：{{ man.count }}</span>
    <span>女士：{{ woman.count }}</span>
    <span>儿童：{{ child.count }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      man: {},
      child: {},
      woman: {},
    };
  },
  components: {},
  methods: {},
  created() {
    this.man = this.$store.state.man;
    this.child = this.$store.state.child;
    this.woman = this.$store.state.woman;
  },
};
</script>

<style scoped>
.goods-info {
  width: 300px;
  padding: 20px;
  background-color: #33dfc9;
}
</style>
