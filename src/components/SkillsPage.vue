<template>
  <section>
    <div class="section-name text-center">
      <h1
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
      >Skills</h1>
    </div>
    <div class="container">
      <div class="card"
           v-for="skills in skills"
           :key="skills"
           data-aos="fade-left"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine"
      >
        <div class="lang text-center">
          <font-awesome-icon
              :icon="skills.icon"
              size="5x"
              :style="{ color: '#00C4F0'}"
          />
          <p>{{ skills.name }}</p>

          <div class="progress-bar">
            <div class="bar" :style="{ width: skills.progress + '%' }">
              <span>
                {{ skills.progress }}%
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {faVuejs, faJs, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";

export default {
  name: "SkillsPage",
  data: () => ({
    skills: [
      {
        id: 1,
        name: "HTML",
        progress: 80,
        icon: faHtml5
      },
      {
        id: 2,
        name: "CSS",
        progress: 80,
        icon: faCss3
      },
      {
        id: 3,
        name: "JavaScript",
        progress: 70,
        icon: faJs
      },
      {
        id: 4,
        name: "VueJS",
        progress: 60,
        icon: faVuejs
      },
    ],
  }),
  mounted() {
    AOS.init();
  }
}
</script>

<style scoped>

</style>
