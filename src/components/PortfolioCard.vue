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
           v-for="slides in slides"
           :key="slides">

        <div class="project-header">
          <div class="project-top">
            <div class="project-folder">
              <a v-bind:href="slides.linkDemo" target="_blank">
                <font-awesome-icon
                    icon="fa-folder"
                    size="2x"
                />
              </a>
            </div>
            <div class="project-link">
              <a v-bind:href="slides.linkDemo" target="_blank">
                <font-awesome-icon
                    icon="fa-laptop-code"
                    size="2x"
                />
              </a>
              <a v-bind:href="slides.linkGitHub" target="_blank" aria-label="Github">
                <font-awesome-icon
                    icon="fa-brands fa-github"
                    size="2x"
                />
              </a>
            </div>
          </div>
        </div>


        <div class="project-name">
          <h1>{{ slides.name }}</h1>
        </div>

        <div class="project-info">
          <p>{{ slides.info }}</p>
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
    slides: [
      {
        id: 1,
        name: "Kinopoisk API",
        linkGitHub: "https://github.com/",
        linkDemo: "https://n00kieee.github.io/kinopoisk-api",
        info: "Lorem ipsum dolor sit amet",
      },
      {
        id: 2,
        name: "Budget App",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
      },
      {
        id: 3,
        name: "Game",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
      },
      {
        id: 4,
        name: "app",
        linkGitHub: "https://github.com/",
        linkDemo: "https://github.com/",
        info: "Lorem ipsum dolor sit amet",
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
  background-color: black;
  margin: 20px;
  border-radius: 10px;
}

.project-header {
  display: flex;
  justify-content: center;
  width: 100%;
}

.project-top {
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-items: center;*/
  /*width: 100%;*/
  /*margin: 30px;*/
  /*padding-left: 10px;*/
  /*padding-right: 10px;*/
}

.project-folder {
  color: #30ff00;
}

.project-link {

}

.project-name {

}

.project-info {

}
</style>
