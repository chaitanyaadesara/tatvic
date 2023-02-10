<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card elevation="1">
            <v-card-title>
              <v-row>
                <v-col cols="12">
                  Wiki Search
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <template>
        <v-row>
          <v-col cols="12">
            <v-card elevation="1">
              <v-card-title>
                <v-row>
                  <v-col cols="10">
                    <v-text-field placeholder="Enter title or text" v-model="search" solo></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn elevation="2" id="searchBtn" @click="onSearch" block>Search</v-btn>
                  </v-col>
                </v-row>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-for="data in searchData" :key="data.pageid">
          <v-col cols="12">
            <v-card elevation="1">
              <v-card-title>
                {{ data.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>
<script>
import { API } from "../../helper/api";
export default {
  name: "wiki-search",
  data() {
    return {
      search: "Nelson Mandela",
      searchData:"",
    };
  },
  methods: {
    async onSearch() {
      try {
        let url = process.env.VUE_APP_API_URL + '/wiki/' + this.search
        this.searchData = await API.GetAxiosRequest(url)
        this.searchData = this.searchData.query.search;
      }
      catch (error) {
        alert('There was error while searching.')
        console.error(error)
      }
    }
  },
};
</script>

<style scoped>
#searchBtn {
  height: 47px;
}
</style>
