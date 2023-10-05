<template>
  <div class="contact">
    <h2 class="section-title">Contact Me</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name" class="label">Name:</label>
        <input type="text" id="name" v-model="name" class="input" required />
      </div>

      <div class="form-group">
        <label for="email" class="label">Email:</label>
        <input type="email" id="email" v-model="email" class="input" required />
      </div>

      <div class="form-group">
        <label for="message" class="label">Message:</label>
        <textarea id="message" v-model="message" class="textarea" required></textarea>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
    <!-- Display the success message when submitSuccess is true -->
    <div v-if="submitSuccess" class="success-message">
      <i class="fas fa-check-circle"></i> Message submitted successfully!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitSuccess: false, 
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.message) {
        this.submitSuccess = true;
      }
    },
  },
};
</script>

<style scoped>
/* Add my site contact page styles here */

.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.section-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.contact-form {
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.input,
.textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.submit-button {
  background-color: #0078d4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #005a9e;
}

.success-message {
  color: #27ae60;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-message i {
  font-size: 24px;
  margin-right: 10px;
  color: #27ae60;
}
</style>
