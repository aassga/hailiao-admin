<template>
  <div>
    <el-table
      v-loading="listLoading"
      :data="accountInfoData"
      :key="tableKey"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column :label="$t('table.create_an_account')" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.create_an_account }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.accountNumber')" min-width="230px">
        <template slot-scope="{row}">
          <span>{{ row.accountNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.accountNumber_id')" align="center" width="150px">
        <template slot-scope="{row}">
          <span>{{ row.accountNumberID }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.nick_name')" class-name="status-col" width="150px">
        <template slot-scope="{row}">
          <span>{{ row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.group_info')" align="center" width="150px" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleCheck(row)">
            {{ $t('table.check') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ComplexTable',
  props: {
    accountInfoData: {
      type: Array,
    },
  },
  watch:{
    accountInfoData(val){
      val ? this.getAccountInfoData():false
    }
  },
  data() {
    return {
      tableKey: 0,
      listLoading: true,
    }
  },
  created() {
    this.getAccountInfoData()
  },
  methods: {
    getAccountInfoData(){
      this.listLoading = true
      setTimeout(() => {
        this.listLoading = false
      }, 700)
    },
    handleCheck(row) {
      this.$emit('checkData',row)
    },
  }
}
</script>
