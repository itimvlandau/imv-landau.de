<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app>
    <v-list nav dense>
      <div v-for="(link, i) in links" :key="i">

        <v-list-item v-if="!link.subLinks" :key="i" :to="link.to" class="v-list-item">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="link.text" />
        </v-list-item>

        <v-list-group v-else :key="link.text" no-action :prepend-icon="link.icon" :value="false">
          <template v-slot:activator>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </template>

          <v-list-item v-for="sublink in link.subLinks" :to="sublink.to" :key="sublink.text">
            <v-list-item-icon>
              <v-icon>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="sublink.text" />
          </v-list-item>

        </v-list-group>

      </div>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title :class="['text-caption']">
      IMV-Landau e. V. - Islamischer multikultureller Verein Landau
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>

  <v-main>
    <router-view />
  </v-main>
</v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  watch: {
    group() {
      this.drawer = false
    },
  },

  data: () => ({
    drawer: null,
    group: null,
    links: [{
        to: '/',
        icon: 'mdi-mosque',
        text: 'Startseite',
      },
      {
        to: '/news',
        icon: 'mdi-newspaper-variant-outline',
        text: 'Neuigkeiten',
      },
      {
        icon: 'mdi-star-crescent',
        text: 'Islam',
        subLinks: [{
            icon: 'mdi-star',
            text: 'Der Islam',
            to: '/islam',
          },
          {
            icon: 'mdi-star',
            text: 'Die Propheten',
            to: '/islam/prophets',
          },
          {
            icon: 'mdi-star',
            text: 'Der Sinn des Lebens',
            to: '/islam/sense-of-life',
          },
          {
            icon: 'mdi-star',
            text: 'Frauen im Islam',
            to: '/islam/women-and-islam',
          },
          {
            icon: 'mdi-star',
            text: 'Der edle Koran',
            to: '/islam/noble-quran',
          }
        ]
      },
      {
        to: '/prayer',
        icon: 'mdi-hand-extended-outline',
        text: 'Gebet',
      },
      {
        to: '/donate',
        icon: 'mdi-charity',
        text: 'Spenden',
      },
      {
        to: '/schedule',
        icon: 'mdi-clock-outline',
        text: 'Aktivitäten',
      },
      {
        to: '/location',
        icon: 'mdi-map-marker',
        text: 'Kontakt',
      },
      {
        to: '/statute',
        icon: 'mdi-scale-balance',
        text: 'Satzung',
      },
      {
        to: '/imprint',
        icon: 'mdi-format-section',
        text: 'Impressum',
      }
    ]
  }),

};
</script>

<style scoped>
.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action > .v-list-group__items > .v-list-item {
  padding: 0 32px;
}
</style>
