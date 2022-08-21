<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'PageAdvancedAccount',
  components: {
    SwitchRoles
  },
  mounted() {
  },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/advancedAccount/index?' + +new Date() })
    }
  }
}
</script>
