<template>
  <section>
    <div class="section-name">
      <h1><span>02. </span>Skills</h1>
    </div>
    <div class="container">
      <div
          class="skills-card"
          v-for="skills in skills"
          :key="skills"
      >
        <div class="skills-lang">
          <font-awesome-icon
              :icon="skills.icon"
              size="5x"
              :style="{ color: '#00C4F0' }"
          />
          <p>{{ skills.name }}</p>

          <div class="skills-progress-bar">
            <div class="skills-bar" :style="{ width: skills.progress + '%' }">
              <span> {{ skills.progress }}% </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  faVuejs,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

export default {
  name: "SkillsPage",
  data: () => ({
    skills: [
      {
        id: 1,
        name: "HTML",
        progress: 70,
        icon: faHtml5,
      },
      {
        id: 2,
        name: "CSS",
        progress: 70,
        icon: faCss3,
      },
      {
        id: 3,
        name: "JavaScript",
        progress: 60,
        icon: faJs,
      },
      {
        id: 4,
        name: "VueJS",
        progress: 50,
        icon: faVuejs,
      },
    ],
  }),
};
</script>

<style scoped></style>
