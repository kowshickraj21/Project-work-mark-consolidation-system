<script setup>
import { useAuthStore } from '@/stores/userStore'

const userStore = useAuthStore()
const userType = userStore.user.type
</script>

<template>
  <nav class="bg-gray-300 h-svh p-8 mr-5">
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <div class="container mx-auto flex flex-col justify-between items-center mt-10">
      <router-link to="/" class="">Home</router-link>
      <router-link to="/Import" class="mt-5" v-if="userType === 'admin'">Import File</router-link>

      <router-link to="/login" class="mt-10">Logout</router-link>
    </div>
  </nav>
</template>

<style scoped></style>
