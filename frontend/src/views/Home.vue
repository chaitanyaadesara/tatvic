<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card elevation="1">
            <v-card-title>
              <v-row>
                <v-col cols="12">
                  Welcome
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card elevation="1">
            <v-card-title>
              No. of searches performed in last 1 Day
            </v-card-title>
            <v-card-text>
              <h2>{{ oneDayCount }}</h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card elevation="1">
            <v-card-title>
              No. of searches performed in last 1 Hour
            </v-card-title>
            <v-card-text>
              <h2>{{ oneHourCount }}</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <template>
        <v-row>
          <v-col cols="12">
            <GChart type="ColumnChart" :data="chartData" :options="chartOptions" :resizeDebounce="500" />
          </v-col>
        </v-row>
      </template> -->
    </v-container>
  </div>
</template>
<script>
import { API } from "../helper/api";
// import { GChart } from 'vue-google-charts/legacy'
export default {
  name: "Dashboard",
  // components: {
  //   GChart
  // },
  data() {
    return {
      oneHourCount: 0,
      oneDayCount: 0,
      date: null,
      chartData: [
        ['Hour', 'Sales', 'Expenses', 'Profit'],
        ['10', 1000, 400, 200],
        ['9', 1170, 460, 250],
        ['11', 660, 1120, 300]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performanc',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    };
  },
  async mounted() {
    this.oneDayCount = await this.countSearch('1Day');
    this.oneHourCount = await this.countSearch('1Hour');
    // this.getSearchHistory();
  },
  methods: {
    async countSearch(groupBy) {
      try {
        let url = process.env.VUE_APP_API_URL + '/wiki/history/' + groupBy
        let countData = await API.GetAxiosRequest(url)
        console.log(countData.count)
        return +countData.count;
      }
      catch (error) {
        alert('There was error while searching.')
        console.error(error)
      }
    },
    async getSearchHistory() {
      try {
        if (!this.date) {
          this.date = Date.now();
        }
        let url = process.env.VUE_APP_API_URL + '/wiki/history/?date' + this.date
        let countData = await API.GetAxiosRequest(url)
        console.log(countData)
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
h2 {
  text-align: center;
}
</style>
