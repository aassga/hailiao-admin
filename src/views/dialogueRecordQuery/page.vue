<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'PageDialogueRecordQuery',
  components: {
    SwitchRoles
  },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/dialogueRecordQuery/index?' + +new Date() })
    }
  }
}
</script>
