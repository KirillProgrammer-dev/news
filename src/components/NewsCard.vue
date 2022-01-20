<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="news.urlToImage"
      :lazy-src="lazy_src"
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
    data: () => ({
        lazy_src: "https://xn----7sbbaj8bef8aij.xn--p1ai/image/cache/data/0000/bumaga-paperline-seraya-160-gr-700x700.png"
    }),
    props:{
      news: Object
    }
}
</script>
