<template>
  <el-container direction="vertical">
    <el-table
      border
      :data="scholarsList"
    >
      <el-table-column
        type="expand"
        label="이번 달 일일 SLP 내역"
        width="150"
      >
        <template slot-scope="props">
          <p v-for="(x, i) in props.row.slpList" :key="i">
            Day: {{ x.day }} / SLP: {{ x.slp }}
          </p>
        </template>
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        label="장학생"
        prop="name"
      />
      <el-table-column
        header-align="center"
        align="center"
        label="이번 달 누적 SLP"
        width="150"
      >
        <template slot-scope="scope">
          {{ getSumOfCurrentMonthSlp(scope.row.slpList) }}
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>
<script>
import { Decimal } from 'decimal.js-light';

export default {
  name: 'ScholarTable',
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
      },
      {
        name: 'scholar 02',
        slpList: [
          {
            day: 1,
            slp: 1620,
          },
          {
            day: 2,
            slp: 1135,
          },
          {
            dat: 31,
            slp: 1427
          }
        ]
      },
      {
        name: 'scholar 03',
        slpList: [
          {
            day: 1,
            slp: 120,
          },
          {
            day: 2,
            slp: 165,
          },
          {
            dat: 31,
            slp: 157
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