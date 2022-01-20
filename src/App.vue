<template>
  <v-app>
    <v-app-bar app color="primary" dark fixed v-if="width >= 1000">
      <v-row align="center" class="justify-center">
        <!-- Ссылки для роутера -->
        <v-col>
          <v-btn to="/"> Русские новости </v-btn>
        </v-col>
        <v-col>
          <v-btn to="/french"> Французские новости </v-btn>
        </v-col>
        <v-col>
          <v-btn to="/german"> Немецкие новости </v-btn>
        </v-col>
        <v-col>
          <v-text-field keydown="search(this.value)">
            <v-icon
              slot="append"
              color="white"
            >
              mdi-magnify
            </v-icon>
          </v-text-field>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-app-bar color="primary" dark v-else>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Новости</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary fixed width="300px">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-flag</v-icon>
            </v-list-item-icon>
            <v-list-item-title><v-btn plain to="/"> Российские новости </v-btn></v-list-item-title>
          </v-list-item>
          <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-title to="/french"><v-btn plain to="/french"> Французские новости </v-btn></v-list-item-title>
        </v-list-item>
          <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <v-list-item-title to="/german"><v-btn plain to="/german"> Немецкие новости </v-btn></v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () =>({
    width: window.innerWidth,
    drawer: false,
    group: null,
  }),
  methods:{
    search(value) {
      console.log(value)
      this.$router.push('home?q=1')
    },

    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
      window.addEventListener('resize', this.updateWidth);
    }
};
</script>
