<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'PageAdvancedGroup',
  components: {
    SwitchRoles
  },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/advancedGroup/index?' + +new Date() })
    }
  }
}
</script>
