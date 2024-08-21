<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="page p-0">
    <NavBar />
    <div class="w-full px-5">
      <div class="flex mb-10 mt-5 justify-between">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          class="w-64 h-10 border-2 rounded-full pl-3"
        />
        <div class="h-11 w-11 rounded-full bg-black"></div>
      </div>
      <h2 class="font-semibold text-3xl mb-5">Welcome, Guide!</h2>
      <p class="ml-5 text-xl mb-5">Your Students:</p>
      <table class="ml-5">
        <thead>
          <tr>
            <th>Register Number</th>
            <th>Name</th>
            <th>Department</th>
            <th>Project Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.id">
            <td>{{ student.RegisterId }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.department }}</td>
            <td>{{ student.projectId }}</td>
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
      searchQuery: '',
      students: [
        {
          id: 1,
          name: 'Sabari S',
          RegisterId: '7376221ME127',
          department: 'Mechanical Engineering',
          projectId: 'P101'
        },
        {
          id: 2,
          name: 'Manoj K',
          RegisterId: '7376222IT193',
          department: 'Information Technology',
          projectId: 'P102'
        },
        {
          id: 3,
          name: 'Abilash G',
          RegisterId: '7376221ME104',
          department: 'Mechanical Engineering',
          projectId: 'P103'
        },
        {
          id: 4,
          name: 'Rahul K',
          RegisterId: '7376221CS274',
          department: 'Computer Science and Engineering',
          projectId: 'P109'
        },
        {
          id: 5,
          name: 'Mughil V',
          RegisterId: '7376221CS233',
          department: 'Computer Science and Engineering',
          projectId: 'P111'
        },
        {
          id: 6,
          name: 'Manoj K',
          RegisterId: '7376222IT193',
          department: 'Information Technology',
          projectId: 'P102'
        }
      ]
    }
  },
  computed: {
    filteredStudents() {
      return this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
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

.teacher-info {
  display: flex;
  align-items: center;
}

.teacher-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid #ccc;
}
</style>
