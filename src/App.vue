<template>
  <v-app>
    <v-app-bar app class="header-gradient">
      <v-toolbar-title class="headline text-uppercase white--text">
        <span>Transaction Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/new-transaction">Nova Transação</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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

.header-gradient {
  background: $gradient;
}

</style>
