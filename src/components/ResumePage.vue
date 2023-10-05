<template>
  <div class="resume">
    <h2 class="title">My Resume</h2>
    <section>
      <h3 class="section-title">Personal Information</h3>
      <p><strong>Name:</strong> Yash Anand</p>
      <p><strong>Languages:</strong> Hindi, Punjabi, English</p>
    </section>
    <section>
      <h3 class="section-title">Skills</h3>
      <ul class="skills-list">
        <li>C++</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>
    <section>
      <h3 class="section-title">Work Experience</h3>
      <p><strong>Gas Station Attendant at 711</strong></p>
      <p class="location"><strong>Location:</strong> Geelong, Victoria</p>
      <ul>
        <li>Provided excellent customer service and maintained a clean and safe environment.</li>
        <li>Managed inventory and operated cash registers efficiently.</li>
      </ul>
    </section>
    <section>
      <h3 class="section-title">Education</h3>
      <p><strong>Bachelor of IT</strong></p>
      <p class="location"><strong>Location:</strong> Waurn Ponds, Deakin University</p>
      <p><strong>Expected Graduation:</strong> December 2025</p>
    </section>
  </div>
</template>

<style scoped>


.resume {
  background-color: #ca9544;
  padding: 20px;
  border-radius: 15px;
  margin: 20px;
  box-shadow: 022px 13px 10px rgba(27, 0, 0, 0.1);
}

.title {
  color: #5c0606;
  text-align: center;
}

.section-title {
  color: #2048ac;
  margin-top: 20px;
}

.skills-list {
  list-style: none;
  padding: 20px;
}

.skills-list li {
  margin-left: 30px;
}

.location {
  font-style: italic;
}
</style>
