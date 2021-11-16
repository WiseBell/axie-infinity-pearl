<template>
  <el-container class="app__container" direction="vertical">
    <el-row :gutter="12">
      <dashboard />
    </el-row>
    <el-row class="mt-24" :gutter="12">
      <el-col :span="12">
        <el-table
          border
          :data="scholarsList"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <p v-for="(x, i) in props.row.slpList" :key="i">
                Day: {{ x.day }} / SLP: {{ x.slp }}
              </p>
            </template>
          </el-table-column>
          <el-table-column
            header-align="center"
            align="center"
            label="Scholar"
            prop="name"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="Current Month SLP"
          >
            <template slot-scope="scope">
              {{ getSumOfCurrentMonthSlp(scope.row.slpList) }}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <h5>Probably Chart</h5>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { Decimal } from 'decimal.js-light';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  data: () => ({
    scholarsList: [
      {
        name: 'scholar 01',
        slpList: [
          {
            day: 1,
            slp: 1220,
          },
          {
            day: 2,
            slp: 115,
          },
          {
            dat: 31,
            slp: 147
          }
        ]
      }
    ]
  }),
  methods: {
    getSumOfCurrentMonthSlp(list = []) {
      return list
        .map(x => new Decimal(x.slp).toNumber())
        .reduce((a, b) => a + b)
        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
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