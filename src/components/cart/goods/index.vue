<template>
  <div class="goods">
    <div v-for="(id, i) in childIds" :key="i">{{ id }}</div>
    <div v-for="(id, i) in manIds" :key="i">{{ id }}</div>
    <div v-for="(id, i) in womanIds" :key="i">{{ id }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childIds: [],
      manIds: [],
      womanIds: [],
    };
  },
  components: {},
  methods: {},
  created() {
    this.childIds = this.$store.state.child.ids;
    this.manIds = this.$store.state.man.ids;
    this.womanIds = this.$store.state.woman.ids;
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding: 20px;
  background-color: #7cee74;
}
.goods div {
  margin: 5px;
}
</style>
