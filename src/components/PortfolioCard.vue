<template>
  <section>
    <div class="section-name">
      <h1>
        <span>03. </span>
        Portfolio
      </h1>
    </div>
    <div class="container">
      <div
          class="project-card"
          v-for="project in project"
          :key="project"
      >
        <div class="project-top">
          <div class="project-folder">
            <FolderIcon/>
          </div>
          <div class="project-link">
            <a v-bind:href="project.linkDemo"
               target="_blank"
               :class="{'tooltip left': project.toolTip}"
               :tooltip-text="project.toolTip"
            >
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
        name: "re:Store clone",
        linkGitHub: "https://github.com/n00kieee/web-shop",
        // linkDemo: "https://github.com/",
        info: "re:Store clone.",
        toolTip: 'Developing',
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
          {
            id: Date.now(),
            name: "TypeScript",
          },
          {
            id: Date.now(),
            name: "MockServer",
          },
          {
            id: Date.now(),
            name: "Axios",
          },
          {
            id: Date.now(),
            name: "Pinia",
          },
        ],
      },
      {
        id: 3,
        name: "Budget App",
        linkGitHub: "https://github.com/n00kieee/budgetApp",
        linkDemo: "https://github.com/",
        info: "Simple budget app.",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
        ],
      },
      {
        id: 4,
        name: "Weather App",
        linkGitHub: "https://github.com/n00kieee/weatherApp",
        linkDemo: "https://n00kieee.github.io/weather-app/",
        info: "Weather Api",
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
        id: 5,
        name: "Task-App",
        linkGitHub: "https://github.com/n00kieee/TaskApp",
        linkDemo: "https://n00kieee.github.io/task-app/",
        info: "Task-App",
        lang: [
          {
            id: Date.now(),
            name: "Vue",
          },
          {
            id: Date.now(),
            name: "Vuex",
          },
          {
            id: Date.now(),
            name: "Router",
          },
          {
            id: Date.now(),
            name: "Firebase",
          },
          {
            id: Date.now(),
            name: "TypeScript",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.tooltip {
  position: relative;
  font-size: 18px;
  padding: 5px;
}

.tooltip:hover::before {
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}

.tooltip::before {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  min-width: max-content;
  background: var(--mainColor);
  color: var(--white);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 15px;
  content: attr(tooltip-text);
  transition: all 0.3s ease;
}

.tooltip.left::before {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
