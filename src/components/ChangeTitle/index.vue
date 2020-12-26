<template>
  <div>
    <select :value="value">
      <option value="儿童">儿童</option>
      <option value="男士">男士</option>
      <option value="女士">女士</option>
    </select>
    修改title：<input type="text" v-model="title" />
    <button @click="change">修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '女士',
      title: '',
    };
  },
  components: {},
  methods: {
    change() {
      console.log(this.title);
      if (/[A-Z]{1}/.test(this.title)) {
        this.$store.dispatch('set_title', {
          role: this.value,
          title: this.title,
        });
      } else {
        alert('不合法');
      }
      this.title = '';
    },
  },
};
</script>

<style scoped></style>
