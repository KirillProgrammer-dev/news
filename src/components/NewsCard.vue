<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="news.urlToImage"
      height="200px"
    ></v-img>

    <v-card-title>
      {{news.title}}
    </v-card-title>

    <v-card-subtitle>
      {{news.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        :href="news.url"
        target="_blank"
      >
        Дальше
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "NewsCard",
    props:{
      news: Object
    }
}
</script>
