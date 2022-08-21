<template>
  <div>
    <el-button
      icon="el-icon-back"
      style="margin-left: 10px; font-weight: bold; color: #f60"
      @click="retrunBack"
    >
      {{ $t("dashboard.return_back") }}
    </el-button>
    <span class="green-text pl15"> {{statusType === 'check' ?accountMemberInfo.accountNumber : $t("dashboard.transcend_advanced_group_account")}}</span>
    <div class="form-table">
      <template v-if="statusType === 'add'">
        <!-- 創建帳號 -->
        <div class="el-form">
          <span>{{ $t("dashboard.create_an_account") }}</span>
          <span>{{ accountMemberInfo.create_an_account }}</span>
        </div>
        <!-- 帳號類別 -->
        <div class="el-form">
          <span>{{ $t("dashboard.account_type") }}</span>
          <span>
            <el-select v-model="addAccount.accountType" :placeholder="$t('dashboard.please_select_create_account_category')">
              <el-option :label="$t('dashboard.advanced_group_account')" value="advancedGroup"></el-option>
              <el-option :label="$t('dashboard.advanced_sales_account')" value="advancedSales"></el-option>
            </el-select>  
          </span>
        </div>
      </template>
      
      <!-- 帳號 -->
      <div class="el-form">
        <span>{{ $t("dashboard.accountNumber") }}</span>
        <span>{{ accountMemberInfo.accountNumber }}</span>
      </div>
      <!-- 帳號ID -->
      <div class="el-form">
        <span>{{ $t("dashboard.accountNumber_id") }}</span>
        <span>{{ accountMemberInfo.accountNumberID }}</span>
      </div>
      <!-- 暱稱 -->
      <div class="el-form">
        <span>{{ $t("dashboard.nick_name") }}</span>
        <span>{{ accountMemberInfo.nickName }}</span>
      </div>
      <template v-if="statusType !== 'add'">
        <!-- 所屬群組 -->
        <div class="el-form">
          <span>{{ $t("dashboard.group") }}</span>
          <span>
            <el-button type="primary" size="mini">
              {{ $t('dashboard.check') }}
            </el-button>
          </span>
        </div>
        <!-- 變更密碼 -->
        <div class="el-form">
          <span>{{ $t("dashboard.edit_password") }}</span>
          <span v-if="accountRevise">
            <el-input v-model="accountMemberInfo.password" show-password class="edit-input" size="mini"  />
          </span>
          <span>
            <template v-if="accountRevise">
            <el-button
                class="cancel-btn"
                size="mini"
                type="warning"
                @click="cancelEdit()"
              >
                {{ $t('dashboard.cancel') }}
            </el-button>
            <el-button
              type="success"
              size="mini"
              @click="confirmEdit(accountRevise)"
            >
              {{ $t('dashboard.store') }}
            </el-button>
            </template>

            <el-button
              v-else
              type="primary"
              size="mini"
              @click="accountRevise=!accountRevise"
            >
              {{ $t('dashboard.revise') }}
            </el-button>
          </span>
        </div>
        <!-- 禁用帳號 -->
        <div class="el-form">
          <span>{{ $t("dashboard.disable_account") }}</span>
          <span>
            <el-switch
              v-model="disableAccount"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </span>
        </div>
      </template>

    </div>

  </div>
</template>

<script>

export default {
  name: "PublicUserForm",
  props: {
    accountMemberInfo: {
      type: Object,
    },
    statusType:{
      type:String
    }
  },
  data() {
    return {
      memberDataList:{},
      routerKey: "",
      disableAccount: true,
      accountRevise:false,
      addAccount:{
        accountType:'',
      }
    };
  },
  created() {
    this.routerKey = this.$route.name;
  },
  methods: {
    cancelEdit() {
      this.accountRevise = false
      this.$message({
        message: this.$t("dashboard.cancel_success"),
        type: 'warning'
      })
    },
    retrunBack(){
      this.$emit('returnBack',false)
    },
  },
};
</script>

<style lang="scss" scoped>
$light-green:#10686e;

.green-text{
  color: $light-green;
}
.pl15{
  padding-left: 15px;
}

.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}

.form-table {
  border: 0.05em solid #b3b3b3;
  width: 50%;
  margin-top: 2em;
  border-radius: 10px;
  background-color: #faf1d338;
  margin: 0 auto;
  margin-top: 4em;
  .el-form {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    margin: 0 0.6em;
    padding: 0.7em 3em;
    border-bottom: 0.01em solid #b3b3b3;
    &:last-child {
      border-bottom: 0;
    }
    span {
      width: 300px;
      font-size: 14px;
      // text-align: center;
      color: #666666;
      &:last-child {
        padding-left:10px;
      }
    }
  }
}
.el-dialog__wrapper {
  ::v-deep.el-dialog {
    border-radius: 10px;
    .el-dialog__header {
      width: 95%;
      margin: 0 auto;
      border-bottom: 0.05em solid #b3b3b3;
    }
    .el-dialog__body {
      text-align: center;
      .dialog-content {
        font-size: 15px;
      }
      .avatar-box {
        margin: 0 auto;
        img {
          width: 200px;
          border: 0.5px solid #b3b3b3;
          border-radius: 10px;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
      .advancedModify-style {
        .el-form-item__content {
          text-align: left;
        }
      }
    }
  }
}
.bank-message-style {
  ::v-deep.el-dialog {
    .el-dialog__body {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
