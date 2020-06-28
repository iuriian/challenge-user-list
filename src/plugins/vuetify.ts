import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        gray: '#f5f5f5',
        violet: '#d83367',
      },
    },
  },
});
