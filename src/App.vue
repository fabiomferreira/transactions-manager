<template>
  <v-app>
    <v-app-bar app class="header-gradient">
      <v-toolbar-title class="white--text page-title">
        <span>Transaction Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          to="/new-transaction"
          text
          color="white"
        >Nova Transação</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-snackbar
      v-model="snackbar"
      top
    >
      {{ getTextSnackbar }}
      <v-btn
        color="pink"
        text
        @click="closeSnackbar()"
      >
        Fechar
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapGetters(['getSnackbar', 'getTextSnackbar']),
    snackbar: {
      get() {
        return this.getSnackbar
      },
      set() {
        return this.closeSnackbar()
      }
    }
  },
  methods: {
    ...mapActions(['closeSnackbar'])
  }
};
</script>

<style lang="scss">
$color-base: #159ce4;
$color-base-purple: #bc85f7;
$color-base-pink: #e178d7;
$color-button: #e078d6;

$gradient: linear-gradient(
  to right,
  $color-base 0%,
  $color-base-purple 50%,
  $color-base-purple 51%,
  $color-base-pink 100%
  );

.page-title {
  font-family: 'Coiny';
}
.header-gradient {
  background: $gradient;
}

</style>
