<template>
  <v-app>
    <v-app-bar app class="header-gradient">
      <v-toolbar-title class="headline text-uppercase white--text">
        <span>Transaction Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
$color-base: #159ce4;
$color-base-purple: #bc85f7;
$color-base-pink: #e178d7;
$color-button: #e078d6;

$gradient: linear-gradient(to right, $color-base 0%, $color-base-purple 50%, $color-base-purple 51%, $color-base-pink 100%);

.header-gradient {
  background: $gradient
}
</style>