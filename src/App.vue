<template>
  <v-app id="inspire">
    <v-app-bar app light dense color="white">
      <v-toolbar-title class="primary--text font-weight-bold ml-auto">Innov Center DTC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/" small class="mr-3">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon to="/create" small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content class="main-content">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
}
</script>

<style>
</style>


