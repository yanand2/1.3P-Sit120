<template>
  <header class="main-header">
    <div class="header-content">
      <h1 class="header-title">SIT120 - Introduction to Responsive Web Apps</h1>
      <nav class="main-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/resume" class="nav-link">Resume</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Added my header styles here */

.main-header {
  background-color: #0e1398;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 5px 20px;
}

.header-title {
  font-size: 28px;
  margin: 0;
}

.main-nav {
  margin-top: 25px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 5px 20px;
  font-size: 18px;
  transition: color 0.3s;
}

.nav-link:hover {
  text-decoration: underline;
  color: #ffca28;
}

</style>
