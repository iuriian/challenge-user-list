<template>
  <div>
    <v-app-bar app id="navbar" color="gray" :height="isTablet() ? '60' : '92'">
      <v-app-bar-nav-icon class="d-flex d-sm-flex d-md-none"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-btn class="label-page">
          <v-icon class="icon-page">mdi-poll</v-icon>
        </v-btn>
      </div>

      <div class="d-none d-sm-flex">
        <v-divider inset vertical class="separator"></v-divider>
        <v-btn-toggle class="group-buttons" mandatory :borderless="true">
          <v-btn class="btn-select-page" color="white">
            <v-icon class="icon">mdi-shield-half-full</v-icon>
          </v-btn>
          <v-btn class="btn-select-page" color="white">
            <v-icon class="icon">mdi-account</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>

      <div
        class="d-flex align-end search-container"
        :style="{ width: isTablet() ? '100%' : '26%' }"
      >
        <v-text-field
          class="search-field"
          append-icon="mdi-magnify"
          placeholder="Pesquisar..."
          hide-details="true"
        ></v-text-field>
      </div>

      <v-spacer class="d-none d-sm-none d-md-flex"></v-spacer>

      <div class="d-none d-sm-none d-md-flex">
        <v-btn :borderless="true" class="filter" min-width="40" color="white">
          <v-icon>mdi-chart-gantt</v-icon>
        </v-btn>
        <v-btn class="add-user" color="violet">
          <v-icon>mdi-account</v-icon>
          <span class="d-sm-none d-md-flex">INCLUIR USUÁRIO</span>
          <v-icon class="d-sm-flex d-md-none">mdi-plus</v-icon>
        </v-btn>
        <v-divider inset vertical class="separator"></v-divider>
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-power</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',

  data: () => ({}),

  methods: {
    isTablet() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
});
</script>
<style scoped lang="scss">
#navbar {
  background-color: #f5f5f5;
  box-shadow: 0px 0px 14px 4px #7171713d;
}

.label-page {
  margin-right: 20px;
  background-image: linear-gradient(210deg, #fa7d0b, #dc3c5b);

  .icon-page.v-icon {
    color: #fff;
  }
}

.separator.v-divider {
  height: 24px;
  border-width: 0.01rem;
  align-self: center;
  margin: 0px;
}

.search-container {
  margin-top: 0.25rem;

  .search-field.v-input {
    font-style: italic;
    font-size: 14px;
    font-weight: 300;
    width: 100%;

    [class^="v-input"]::before {
      border-color: rgba(0, 0, 0, 0.12);
    }

    ::placeholder {
      opacity: 1;
      color: #000;
    }
  }
}

.filter.v-btn {
  min-height: 48px;
  box-shadow: 0px 0px 10px 0px #7171713d;
}

.group-buttons.v-btn-toggle {
  box-shadow: 0px 0px 10px 0px #7171713d;
  margin: 0px 34px 0px 20px;

  .btn-select-page[class*="active"] {
    background-image: linear-gradient(210deg, #fa7d0b, #dc3c5b);
    border-radius: 4px;

    [class$="content"] .v-icon.icon.mdi {
      color: #fff;
    }
  }
}

.add-user.v-btn {
  color: #fff;
  min-height: 48px;
  margin: 0px 20px 0px 10px;

  .v-icon {
    margin-right: 8px;
  }
}
</style>
