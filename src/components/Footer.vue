<template>
  <v-footer app id="footer" padless min-height="44">
    <div class="on-air-container">
      <div class="on-air-content">
        <v-icon class="on-air-icon">mdi-radiobox-marked</v-icon>
        <p>NO AR</p>
      </div>
    </div>

    <div class="d-none d-sm-flex">
      <v-icon class="meeting-icon ml-10">mdi-monitor</v-icon>
      <p class="meeting">ENCONTRO - 10:00</p>
    </div>

    <div class="d-none d-sm-none d-md-flex">
      <v-icon class="update-icon ml-10">mdi-clock-time-four-outline</v-icon>
      <p class="last-update">
        Última atualização em
        <strong>10:28</strong>
      </p>
    </div>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-flex">
      <p class="current-date">
        Quinta,
        <strong>30</strong> de
        <strong>Maio</strong> de
        <strong>2019</strong>
      </p>
    </div>

    <p class="current-hour">// 10:30:42</p>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',

  data: () => ({}),
});
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

#footer {
  background-color: #333333;

  p {
    margin: 0px;
    color: #fff;
    font-size: 0.8rem;
  }

  .on-air-container {
    border-bottom: 44px solid #2c2c2c;
    border-right: 25px solid transparent;
    width: 130px;
    position: relative;

    .on-air-content {
      position: absolute;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin: 12px 0px 12px 14px;

      .on-air-icon {
        color: #ff8700;
        font-size: 16px;
      }

      p {
        color: #ff8700;
        font-family: "Audiowide", cursive;
        margin-left: 8px;
        letter-spacing: 0.04rem;
        font-size: 0.9rem;
      }
    }
  }

  .meeting-icon {
    font-size: 16px;
    color: #5c5c5c;
  }

  .meeting {
    margin-left: 8px;
    font-weight: 500;
    letter-spacing: 0.04rem;
    font-size: 0.9rem;
  }

  .update-icon {
    font-size: 16px;
    color: #5c5c5c;
  }

  .last-update {
    font-style: italic;
    font-weight: 300;
    opacity: 0.8;
    margin-left: 8px;
    letter-spacing: 0.04rem;

    strong {
      opacity: 1;
    }
  }

  .current-date {
    font-style: italic;
    font-weight: 200;
    opacity: 0.8;
    letter-spacing: 0.04rem;

    strong {
      font-weight: 400;
      opacity: 1;
    }
  }

  .current-hour {
    font-family: "Audiowide", cursive;
    color: #ff8700;
    font-size: 24px;
    margin: 0px 14px;
  }
}
</style>
