<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app>
    <!--  -->
  </v-navigation-drawer>

  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>
      <v-text :class="['text-caption']">
        IMV-Landau e. V. - Islamischer multikultureller Verein Landau
      </v-text>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>

  <v-main>
    <HelloWorld />
  </v-main>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({ drawer: null }),

};
</script>
