<template>
  <footer class="main-footer">
    <!-- Contact Information -->
    <div class="contact-info">
      <p><i class="fas fa-envelope"></i> Email: <a href="mailto:anandyash121@gmail.com" class="link">anandyash121@gmail.com</a></p>
      <p><i class="fas fa-phone"></i> Phone: <a href="tel:+61045641376" class="link">+61045641376</a></p>
    </div>
    <!-- Social Media Links -->
    <div class="social-links">
      <p><i class="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/feed/" class="link" target="_blank">Visit LinkedIn</a></p>
      <p><i class="fab fa-instagram"></i> Instagram: <a href="https://www.instagram.com/yashanand02/" class="link" target="_blank">Visit Instagram</a></p>
    </div>
  </footer>
</template>

<style scoped>
/* Added our footer styles here */

.main-footer {
  background-color: #0078d4;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.contact-info p,
.social-links p {
  margin: 10px 0;
}

.link {
  color: #fff;
  text-decoration: none;
  transition: text-decoration 0.3s;
}

.link:hover {
  text-decoration: underline;
}

/* ADDED Styles for Icons */
i {
  font-size: 20px;
  margin-right: 5px;
}

</style>
