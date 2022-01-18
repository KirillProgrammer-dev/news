<template>
  <v-app>
    <v-app-bar app color="primary" dark fixed>
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
          <v-text-field #keydown="search(this.value)">
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

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods:{
    search(value) {
      console.log(value)
      this.$router.puch('home?q=1')
    },
  }
};
</script>
