<template>
  <div class="overlay">
    <div class="card">
      <img src="https://bip.bitsathy.ac.in/images/login-logo-light-mode.png" alt="" width="250px" />
      <a href="/"
        ><button class="login-btn">
          <img src="@/assets/google.svg" alt="" />Login with Google
        </button></a
      >
    </div>
  </div>
</template>

<style scoped>
.login-btn {
  border: 2px solid black;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 38px;
  margin-top: -10px;
  background-color: white;
}

.card {
  width: 25%;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
}

.overlay {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
