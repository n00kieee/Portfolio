<template>
  <section>
    <div class="section-name text-center">
      <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
      >Portfolio
      </h1>
    </div>
    <div class="container">
      <div class="project-card"
           v-for="project in project"
           :key="project"
           data-aos="fade-right"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine"
      >
        <div class="project-top">
          <div class="project-folder">
            <font-awesome-icon
                icon="fa-folder"
                size="2x"
                color="#00C4F0FF"
            />
          </div>
          <div class="project-link">
            <a v-bind:href="project.linkDemo" target="_blank">
              <font-awesome-icon
                  icon="fa-laptop-code"
              />
            </a>
            <a v-bind:href="project.linkGitHub" target="_blank" aria-label="Github">
              <font-awesome-icon
                  icon="fa-brands fa-github"
              />
            </a>
          </div>
        </div>
        <div class="project-name">
          <h1>{{ project.name }}</h1>
        </div>
        <div class="project-info">
          <p>{{ project.info }}</p>
        </div>
        <div class="project-lang">
          <p>{{ project.lang }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import AOS from "aos";

export default {
  name: "PortfolioCard",
  data: () => ({
    project: [
      {
        id: 1,
        name: "Kinopoisk API",
        linkGitHub: "https://github.com/n00kieee/api-kinopoisk",
        linkDemo: "https://n00kieee.github.io/kinopoisk-api",
        info: "Lorem ipsum dolor sit amet",
        lang: "Vue"
      },
      {
        id: 2,
        name: "Budget App",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
        lang: "Vue"
      },
      {
        id: 3,
        name: "Game",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
        lang: "Vue"
      },
    ],
  }),
  mounted() {
    AOS.init();
  }
}
</script>

<style scoped>
.project-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  background: var(--cardColor);
  box-shadow: var(--shadow);
  transition: var(--transition);
  border-radius: 15px;
  margin: 20px;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px;
  padding-left: 10px;
  padding-right: 10px;
}

.project-folder {
  position: relative;
  margin-left: 10px;
  bottom: 55px;
}

.project-link {
  position: relative;
  bottom: 55px;
}

.project-link svg {
  width: 30px;
  height: 30px;
}

.project-link a {
  margin-right: 10px;
}

.project-name {
  font-size: 22px;
}

.project-info {
  font-size: 17px;
}

.project-lang {
  background-color: #2c3e50;
  border: 1px solid var(--mainColor);
  border-radius: 15px;
  padding: 8px;
}
</style>
