<template>
  <el-container direction="vertical">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header" class="card__header clearfix">
            <span>이번 달 누적 SLP</span>
          </div>
          <div class="card__contents">
            $10,525.3 / 157,295
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header" class="card__header clearfix">
            <span>매니저 SLP</span>
          </div>
          <div class="card__contents">
            $10,525.3 / 157,295
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header" class="card__header clearfix">
            <span>장학생 SLP</span>
          </div>
          <div class="card__contents">
            $10,525.3 / 157,295
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header" class="card__header clearfix">
            <span>투자자 SLP</span>
          </div>
          <div class="card__contents">
            $10,525.3 / 157,295
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: 'Dashboard'
}
</script>
<style lang="scss" scoped>
.mt-12 {
  margin-top: 12px;
}
.card__header,
.card__contents {
  text-align: center;
}
.card__header {
  font-weight: bold;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both
}
</style>
