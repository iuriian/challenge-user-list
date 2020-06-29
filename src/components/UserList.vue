<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="true"
      :items-per-page="6"
      :hide-default-footer="true"
      item-key="name"
      show-select
      id="table"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon @click="item">mdi-dots-horizontal</v-icon>
      </template>
    </v-data-table>
    <div class="text-center">
      <v-pagination
        :page="page"
        :prev-icon="'Anterior'"
        :next-icon="'Próximo'"
        :length="1"
        class="custom-pagination"
      ></v-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'UserList',

  data: () => ({
    page: 0,
    selected: [],
    headers: [
      { text: 'USUÁRIO', sortable: false, value: 'name' },
      { text: 'EMAIL', sortable: false, value: 'email' },
      { text: 'DATA DE INCLUSÃO', sortable: false, value: 'includeDate' },
      { text: 'DATA DE ALTERAÇÃO', sortable: false, value: 'alterDate' },
      { text: 'REGRAS', sortable: false, value: 'rules' },
      { text: 'STATUS', sortable: false, value: 'status' },
      { text: 'AÇÕES', sortable: false, value: 'actions' },
    ],
    desserts: [],
  }),

  methods: {
    getUsers() {
      axios.get('http://localhost:4200/users').then((users) => {
        this.desserts = users.data;
      });
    },
  },

  mounted() {
    this.getUsers();
  },
});
</script>
<style lang="scss">
#table {
  margin: 24px 38px;
  border-radius: 4px;
  box-shadow: 0px -6px 24px 2px #afa7a76e;

  thead th {
    text-align: left;

    &.text-start {
      color: #000;

      &:last-child {
        text-align: right !important;
      }
    }
  }

  tbody tr {
    background-color: #f5f5f5;

    &:nth-child(even) {
      background-color: #e9e9e9;
    }

    td:nth-child(7) {
      color: #31ba1f;
      font-weight: 500;
    }

    .text-start {
      color: #000;

      &:last-child {
        text-align: right !important;
      }
    }
  }
}

.custom-pagination {
  .v-pagination {
    button {
      min-height: 44px;

      &[class$="item"] {
        min-width: 44px;
        color: #fff;
        background-color: #d83367;
      }

      &[class*="navigation"] {
        min-width: 80px;

        .v-icon {
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
