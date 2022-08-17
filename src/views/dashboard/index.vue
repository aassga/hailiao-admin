<template>
  <div class="dashboard-editor-container">
    <img class="home-logo" :src="homeImg" alt="">
    <span class="title green-text">嗨聊 后台管理系统</span>
  </div>
</template>

<script>

export default {
  name: 'DashboardAdmin',
  data() {
    return {
      homeImg: require('./../../assets/home_images/material_ic_logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
$light_green:#10686e;
.dashboard-editor-container {
  position: relative;
  top: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .home-logo{
    height: 10em;
    margin-right: 1.5em;
  }
  .title{
    font-size: 2.5em;
  }
  .green-text{
    color:$light_green
  }
}

</style>
