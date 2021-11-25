<template>
  <el-container class="app__container" direction="vertical">
    <el-row :gutter="12">
      <dashboard />
    </el-row>
    <el-row class="mt-24" :gutter="12">
      <el-col :span="12">
        <scholar-table
          :list="scholarData"
          :loading="loading"
          @update-chart="updateFromTable"
        />
      </el-col>
      <el-col :span="12">
        <template v-if="chartTitle">
          <el-row type="flex" justify="center">
            <h3>{{ chartTitle }}</h3>
          </el-row>
          <el-row class="mt-24" type="flex" justify="center">
            <vue-bar-graph
              :points="chartData"
              :width="900"
              :height="500"
              :show-y-axis="true"
              :show-x-axis="true"
              :show-values="true"
              :bar-color="'darkcyan'"
              :text-color="'white'"
              :text-alt-color="'white'"
            />
          </el-row>
        </template>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import VueBarGraph from 'vue-bar-graph';
import Dashboard from './components/Dashboard.vue';
import ScholarTable from './components/ScholarTable.vue';

export default {
  name: 'App',
  components: {
    VueBarGraph,
    Dashboard,
    ScholarTable,
  },
  data: () => ({
    loading: false,
    scholarData: [],
    chartTitle: null,
    chartData: [],
  }),
  computed: {
    getChartData() {
      return []
    }
  },
  mounted() {
    fetch('http://13.209.43.228:5000/scholars/get-daily')
      .then(response => response.json())
      .then((data) => {
        this.scholarData = data?.data;
      })
      .catch((error) => {
        const message = '[FAILED] GET: /scholars/get-daily/';

        console.error(message, error);

        this.$message({
          showClose: true,
          duration: 0,
          message,
          type: 'error'
        });
      })
  },
  methods: {
    updateFromTable({ id, discord, performances = [] }) {
      this.loading = true;

      window.setTimeout(() =>{
        this.chartTitle = `[${id}] ${discord}`;
        this.chartData = [];

        for (let key in performances) {
          this.chartData.push({
            label: key,
            value: performances[key]
          })
        }

        this.loading = false;
      }, 1500);

    }
  }
}
</script>
<style lang="scss" scoped>
.app__container {
  padding: 24px;
  box-sizing: border-box;
}
.mt-24 {
  margin-top: 24px;
}
</style>
