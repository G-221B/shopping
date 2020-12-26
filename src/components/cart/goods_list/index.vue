<template>
  <div class="goods-list">
    <GoodsItem role="男士" :price="source.manPrice" :msg="man" />
    <GoodsItem role="女士" :price="source.womanPrice" :msg="woman" />
    <GoodsItem role="儿童" :price="source.childPrice" :msg="child" />
  </div>
</template>

<script>
import GoodsItem from './goods_item';
export default {
  data() {
    return {
      names: ['男士', '女士', '儿童'],
      child: {},
      man: {},
      woman: {},
    };
  },
  props: ['source'],
  components: {
    GoodsItem,
  },
  methods: {},
  created() {
    this.man = this.$store.state.man;
    this.child = this.$store.state.child;
    this.woman = this.$store.state.woman;
  },
};
</script>

<style scoped>
.goods-list {
  width: 300px;
  padding: 20px;
  background-color: #90caf8;
}
</style>
