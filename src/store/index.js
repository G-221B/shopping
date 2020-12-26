import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    source: {
      man: 'N304',
      woman: 'V304',
      child: 'E304',
      manPrice: 15,
      womanPrice: 15,
      childPrice: 7,
    },
    child: {
      count: 0,
      title: 'E',
      ids: [],
    },
    woman: {
      count: 0,
      title: 'V',
      ids: [],
    },
    man: {
      count: 0,
      title: 'N',
      ids: [],
    },
  },
  actions: {
    set_count({ commit }, { role, count }) {
      commit('set_count', { role, count });
    },
    set_title({ commit }, { title, role }) {
      commit('set_title', { title, role });
    },
  },
  mutations: {
    set_title(state, { title, role }) {
      switch (role) {
        case '儿童':
          state.child.title = title;
          state.source.child = title + state.source.woman.slice(1);
          break;
        case '男士':
          state.man.title = title;
          state.source.man = title + state.source.woman.slice(1);
          break;
        case '女士':
          state.woman.title = title;
          state.source.woman = title + state.source.woman.slice(1);
          break;
        default:
          break;
      }
    },

    set_count(state, { role, count }) {
      switch (role) {
        case '儿童':
          if (count > 0) {
            state.child.ids.push(state.source.child);
            const title = state.source.child.slice(0, 1);
            let num = parseInt(state.source.child.slice(1));
            num += 1;
            state.source.child = title + num;
          } else {
            state.child.ids.pop();
            const index = state.child.ids.length - 1;
            state.source.child = state.child.ids[index];
          }
          state.child.count += count;

          break;
        case '男士':
          if (count > 0) {
            state.man.ids.push(state.source.man);
            const title = state.source.man.slice(0, 1);
            let num = parseInt(state.source.man.slice(1));
            num += 1;
            state.source.man = title + num;
          } else {
            state.man.ids.pop();
            const index = state.man.ids.length - 1;
            state.source.man = state.man.ids[index];
          }
          state.man.count += count;
          break;
        case '女士':
          if (count > 0) {
            state.woman.ids.push(state.source.woman);
            const title = state.source.woman.slice(0, 1);
            let num = parseInt(state.source.woman.slice(1));
            num += 1;
            state.source.woman = title + num;
          } else {
            state.woman.ids.pop();
            const index = state.woman.ids.length - 1;
            state.source.woman = state.woman.ids[index];
          }
          state.woman.count += count;
          break;
        default:
          break;
      }
    },
  },
});
