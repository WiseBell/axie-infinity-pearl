<template>
  <el-container direction="vertical">
    <el-row>
      <el-table
        border
        :data="getCurrentPageItems"
      >
        <el-table-column
          header-align="center"
          align="center"
          label="Scholar"
        >
          <template slot-scope="scope">
            {{ `[${scope.row.id}]` }} {{ scope.row.discord}}
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="Claimable SLP"
          width="200"
        >
          <template slot-scope="scope">
            {{ getClaimableSLPStr(scope.row.claimable) }}
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="Visual"
          width="100"
        >
          <template slot-scope="scope">
            <el-button
              type="success"
              icon="el-icon-arrow-right"
              circle
              :loading="loading"
              @click.stop="onClickDrawChart(scope.row)"
            >
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="mt-12" type="flex" justify="center">
      <el-pagination
        v-if="response.table.length"
        background
        layout="prev, pager, next, jumper"
        :current-page="getCurrentPage"
        :page-size="options.table.size"
        :total="response.table.length"
        @current-change="onChangePagination"
      />
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: 'ScholarTable',
  props: {
    list: Array,
    loading: Boolean
  },
  data: () => ({
    response: {
      table: []
    },
    options: {
      table: {
        page: 0,
        size: 10,
        totalElements: 0,
      }
    }
  }),
  computed: {
    getCurrentPageItems() {
      return this.response.table.slice(
        (this.options.table.page * this.options.table.size),
        (this.options.table.page * this.options.table.size) + this.options.table.size,
      );
    },
    getCurrentPage() {
      return this.options.table.page + 1;
    },
  },
  watch: {
    list(newVal) {
      this.response.table = newVal;
    }
  },
  methods: {
    getClaimableSLPStr(payload) {
      if (!payload) {
        return ''
      }
      return payload.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    // getSumOfLast30Days(payload) {
    //   const sum = obj => Object.values(obj)
    //     .reduce((a, b) => a + b)
    //     .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    //   return sum(payload);
    // },
    onChangePagination(value) {
      this.options.table.page = (value - 1);
    },
    onClickDrawChart({ id, discord, performances }) {
      console.log(id, discord, performances);
      this.$emit('update-chart', {
        id,
        discord,
        performances
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.mt-12 {
  margin-top: 12px;
}
</style>