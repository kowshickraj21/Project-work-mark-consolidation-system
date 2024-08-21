<script setup>
import StudentDashboard from './StudentDashboard.vue'
import GuideDashboard from './GuideDashboard.vue'
import AdminDashboard from './AdminDashboard.vue'
import { useAuthStore } from '../stores/userStore'

const userStore = useAuthStore()
const userType = userStore.user.type
</script>

<template>
  <div class="container mx-auto">
    <div v-if="userType === 'student'">
      <StudentDashboard />
    </div>
    <div v-else-if="userType === 'guide'">
      <GuideDashboard />
    </div>
    <div v-else-if="userType === 'admin'">
      <AdminDashboard />
    </div>
  </div>
</template>
