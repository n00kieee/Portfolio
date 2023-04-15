<template>
  <section>
    <div class="section-name">
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
            <FolderIcon/>
          </div>
          <div class="project-link">
            <a v-bind:href="project.linkDemo" target="_blank">
              <ExternalLinkIcon/>
            </a>
            <a
              v-bind:href="project.linkGitHub"
              target="_blank"
              aria-label="Github"
            >
              <GitHubIcon/>
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
import GitHubIcon from "@/components/Icons/GitHubIcon.vue";
import ExternalLinkIcon from "@/components/Icons/ExternalLinkIcon.vue";
import FolderIcon from "@/components/Icons/FolderIcon.vue";

export default {
  components: {
    GitHubIcon,
    ExternalLinkIcon,
    FolderIcon
  },
  name: "PortfolioCard",
  data: () => ({
    project: [
      {
        id: 1,
        name: "Kinopoisk API",
        linkGitHub: "https://github.com/n00kieee/api-kinopoisk",
        linkDemo: "https://n00kieee.github.io/kinopoisk-api",
        info: `Unofficial api kinopoisk.ru. Getting top 20 movies.`,
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
        info: "A simple online store with registration and adding products to the cart.",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
          {
            id: Date.now(),
            name: "FakeApi",
          },
        ],
      },
      {
        id: 3,
        name: "Budget App",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Simple budget app.",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped></style>
