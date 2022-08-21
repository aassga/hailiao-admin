<template>
  <div class="app-container">
    <div v-if="!checkAccountInfo">
      <el-form
        ref="listSearchKey"
        :inline="true"
        :model="listSearchKey"
        :rules="listSearchKeyRules"
        @submit.native.prevent
        
      >
        <el-form-item label-width="40px" prop="region">
          <el-select
            v-model="listSearchKey.region"
            clearable
            style="width: 120px"
            placeholder="请选择类别"
          >
            <el-option
              v-for="(item, index) in listSearchOptions"
              :key="index"
              :label="item.name"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label-width="80px" prop="searchKey">
          <el-input
            ref="searchKey"
            v-model="listSearchKey.searchKey"
            :placeholder="$t('dashboard.searchKey')"
            name="searchKey"
            type="text"
            style="width: 400px"
            @keyup.enter.native="handleFilter('listSearchKey')"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button
            icon="el-icon-search"
            style="margin-left: 10px; font-weight: bold; color: #f60"
            @click="handleFilter('listSearchKey')"
          >
            {{ $t("dashboard.check") }}
          </el-button>
        </el-form-item>
        <el-button
          icon="el-icon-plus"
          style="margin-left: 10px; font-weight: bold; color: #f60"
          @click="addAccount"
        />
      </el-form> 
      <complex-table 
      v-if="accountInfoData.length !==0"
      :account-info-data="accountInfoData"
      @checkData="checkData"
      />
      
    </div> 
    <div v-else>
      <publicUser-Form
        @returnBack="returnBack"
        :status-type="statusType"
        :account-member-info="accountMemberInfo"
      />
    </div>
  </div>
</template>

<script>
import { getAccountInfo } from "@/api/role";
import PublicUserForm from "@/views/components/publicUserForm.vue";
import ComplexTable from "@/views/table/complex-table.vue";

export default {
  name: "AdvancedAccount",
  components: {
    PublicUserForm,
    ComplexTable,
  },
  data() {
    return {
      statusType:'',
      accountInfoData: [],
      accountMemberInfo:{},
      listSearchKey: {
        searchKey: "",
        region: "",
      },
      listSearchKeyRules: {
        searchKey: [
          {
            required: true,
            message: this.$t("dashboard.please_enter_the_full_account_number"),
            trigger: "blur",
          },
        ],
        region: [{ required: true, message: "请选择类别", trigger: "change" }],
      },
      listSearchOptions: [
        {
          name: "帐号",
          value: "accountNumber",
        },
        {
          name: "帐号ID",
          value: "accountNumberID",
        },
        {
          name: "昵称",
          value: "nickName",
        },
        {
          name: "群组名称",
          value: "groupName",
        },
      ],
      checkAccountInfo: false,
    };
  },
  methods: {
    returnBack(status){
      this.accountInfoData = []
      this.listSearchKey.searchKey = ""
      this.listSearchKey.region = ""
      this.checkAccountInfo = status
    },
    checkData(data){
      this.accountMemberInfo = data
      this.checkAccountInfo = JSON.stringify(data) !== "{}"
      this.statusType = "check"
    },
    addAccount(){
      this.checkAccountInfo = true
      this.statusType = "add"
    },
    // 獲取表格資料
    getMemberList() {
      getAccountInfo().then((res) => {
        if (res.code === 20000) { 
          this.accountInfoData = res.data;
        }
      });
    },
    // 示意搜尋
    handleFilter(rules) {
      if (this.listSearchKey.searchKey.trim() === "")
        this.listSearchKey.searchKey = "";
      this.$refs[rules].validate((valid) => {
        if (!valid){
          return
        } 
        this.getMemberList();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>