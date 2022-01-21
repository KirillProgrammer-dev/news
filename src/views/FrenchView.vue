<template>
  <div class="french">
    <v-container fluid>
      <v-row dense>
        <v-col 
          v-for="i in news.length"
          :key="i">
          <NewsCard :news="news[i]" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";

export default {
  name: "FrenchVue",
  components: {
    NewsCard
  },
  data: () => ({
    news: []
  }),
  mounted() {
    this.axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=fr&apiKey=d7f41a32c26b4bbfb596d58b1a54c766"
      )
      .then(news => {
        for (let item of news.data.articles) {
          if (
            item.urlToImage != null &&
            item.title != null &&
            item.description != null &&
            item.url != null
          ) {
            this.news.push(item);
          }
        }
      });
  },
  beforeRouteUpdate(to) {
    this.axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=fr&apiKey=d7f41a32c26b4bbfb596d58b1a54c766&q=" +
          to.query.q
      )
      .then(news => {
        this.news = []
        console.log(news)
        for (let item of news.data.articles) {
          if (
            item.urlToImage != null &&
            item.title != null &&
            item.description != null &&
            item.url != null
          ) {
            this.news.push(item);
          }
        }
      });
  }
};
</script>

