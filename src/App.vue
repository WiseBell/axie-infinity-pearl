<template>
  <el-container class="app__container" direction="vertical">
    <el-row :gutter="12">
      <dashboard />
    </el-row>
    <el-row class="mt-24" :gutter="12">
      <el-col :span="8">
        <scholar-table />
      </el-col>
      <el-col :span="8">
        <h5>Probably Chart</h5>
      </el-col>
      <el-col :span="8">
        <h5>Probably Chart</h5>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import ScholarTable from './components/ScholarTable.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    ScholarTable,
  },
  data: () => ({
    slpEarnings: []
  }),
  mounted() {
    fetch('/schoalrs/get-daily')
      .then((response) => {
        console.log('response: ', response.json());
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('error: ', error)
      })
  },
}
</script>
<style lang="scss" scoped>
.app__container {
  padding: 24px;
  box-sizing: border-box;
  .mt-24 {
    margin-top: 24px;
  }
}
</style>