<template>
  <div>
    <GoodsList :source="source" />
    <GoodsInfo />
    <Goods />
  </div>
</template>

<script>
import GoodsList from './goods_list';
import GoodsInfo from './goods_info';
import Goods from './goods';

export default {
  data() {
    return {
      source: {},
    };
  },
  components: {
    GoodsList,
    GoodsInfo,
    Goods,
  },
  methods: {},
  created() {
    this.source = this.$store.state.source;
  },
};
</script>

<style scoped></style>
