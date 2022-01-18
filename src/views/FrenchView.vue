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
import NewsCard from "../components/NewsCard.vue"


export default {
  name: "FrenchVue",
  components: {
    NewsCard
  },
  data: () => ({
    news: [
      
    ]
  }),
  mounted() {
    this.axios.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=d7f41a32c26b4bbfb596d58b1a54c766").then((news) => {
      for(let i in news.data.articles){
        this.news.push(news.data.articles[i])
      }
      for(let i in this.news){
        let item = this.news[i]
        console.log(1)
        try{
          if (item.urlToImage == null || item.title == null || item.description == null || item.url == null){
            this.news.splice(i, i)
            console.log(1)
          }
        }
        catch(e){this.news.splice(i, i)}
      }
    });
  },
};
</script>

