<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="flex">
    <NavBar />
    <div class="w-full">
      <div class="flex mb-10 mt-5 justify-between">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          class="w-64 h-10 border-2 rounded-full pl-3"
        />
        <div class="h-11 w-11 mr-8 rounded-full bg-black"></div>
      </div>
      <h2 class="font-semibold text-3xl mb-5">Welcome, Kowshick Raj!</h2>
      <p class="ml-5 text-xl mb-5">Your Marks:</p>
      <table class="ml-5">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Review 1</th>
            <th>Review 2</th>
            <th>Review 3</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S7</td>
            <td>P102</td>
            <td>Blood Donor Website</td>
            <td>100</td>
            <td>90</td>
            <td>95</td>
            <td>95</td>
          </tr>
          <tr>
            <td>S7</td>
            <td>P112</td>
            <td>Regional Image and Video Sharing Platform</td>
            <td>91</td>
            <td>90</td>
            <td>95</td>
            <td>92</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: 'Kowshick',
        totalMarks: 100,
        marks: []
      },
      loading: false
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  width: 100%;
}

table {
  width: 95%;
  border-collapse: collapse;
  background-color: #f9f9f9;
}

th,
td {
  padding: 15px 10px;
  border: 1px solid #e0e0e0;
  text-align: left;
  font-size: 14px;
}

th {
  background-color: #f1f1f1;
  color: #555;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
