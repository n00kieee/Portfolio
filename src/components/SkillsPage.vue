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

<style>
.skills-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 50px;
  background: linear-gradient(0deg, var(--color-dark), var(--color-light));
  border-radius: 15px;
}

.skills-card:hover {
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.skills-lang {
  text-align: center;
}

.skills-progress-bar {
  width: 160px;
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 3px;
  margin: 10px;
}

.skills-bar {
  background: linear-gradient(to right, var(--mainColor), var(--ligth));
  height: 20px;
  width: 15px;
  border-radius: 7px;
}

.skills-bar span {
  float: right;
  padding: 4px 5px;
  color: #fff;
  font-size: 0.7em;
}
</style>
