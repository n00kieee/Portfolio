<template>
  <section>
    <div class="section-name">
    <!--  TODO: Выносить  -->
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Portfolio
      </h1>
    </div>
    <div class="container">
      <div
        class="project-card"
        v-for="project in project"
        :key="project"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div class="project-top">
          <div class="project-folder">
            <font-awesome-icon :icon="iconFolder" size="2x" color="#00C4F0FF" />
          </div>
          <div class="project-link">
            <a v-bind:href="project.linkDemo" target="_blank">
              <font-awesome-icon :icon="iconLaptop" />
            </a>
            <a
              v-bind:href="project.linkGitHub"
              target="_blank"
              aria-label="Github"
            >
              <font-awesome-icon :icon="iconGitHub" />
            </a>
          </div>
        </div>
        <div class="project-name">
          <h1>{{ project.name }}</h1>
        </div>
        <div class="project-info">
          <p>{{ project.info }}</p>
        </div>
        <div class="project-features">
          <div class="project-lang" v-for="i in project.lang" :key="i.id">
            <p>{{ i.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { faLaptopCode, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "PortfolioCard",
  data: () => ({
    iconLaptop: faLaptopCode,
    iconFolder: faFolder,
    iconGitHub: faGithub,
    project: [
      {
        id: 1,
        name: "Kinopoisk API",
        linkGitHub: "https://github.com/n00kieee/api-kinopoisk",
        linkDemo: "https://n00kieee.github.io/kinopoisk-api",
        info: "Lorem ipsum dolor sit amet",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
          {
            id: Date.now(),
            name: "Axios",
          },
        ],
      },
      {
        id: 2,
        name: "Internet shop",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
          {
            id: Date.now(),
            name: "JS",
          },
        ],
      },
      {
        id: 3,
        name: "Game",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
          {
            id: Date.now(),
            name: "JS",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped></style>
