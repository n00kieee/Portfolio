<template>
  <PreloaderPage v-if="isLoaded"/>
  <main v-else>
    <HeaderPage/>
    <MainContent id="home"/>
    <SkillsPage id="skills"/>
    <PortfolioCard id="portfolio"/>
    <ContactPage id="contact"/>
    <FooterPage/>
  </main>
</template>

<script>
import PreloaderPage from "@/components/PreloaderPage.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import MainContent from "@/components/MainContent.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import PortfolioCard from "@/components/PortfolioCard.vue";
import ContactPage from "@/components/ContactPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import AOS from "aos";

export default {
  components: {
    PreloaderPage,
    HeaderPage,
    MainContent,
    SkillsPage,
    PortfolioCard,
    ContactPage,
    FooterPage,
  },
  data: () => ({
    isLoaded: true,
  }),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          this.isLoaded = false;
        }, 0);
      }
    }
    AOS.init();
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');

:root {
  --bodyColor: linear-gradient(0deg, #11053b, #1e0b63, #11053b);
  --mainColor: #00C4F0FF;
  --shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  --white: #fff;
  --ligth: #a8b2d1;
  --red: #ff0000;
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  --transform: translateY(-7px);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Chakra Petch', sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
  background: var(--bodyColor);
  background-attachment: fixed;
}

h1 {
  margin: 0 0 30px 4px;
  color: var(--white);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.1;
}

p {
  color: var(--white);
}

a {
  color: var(--white);
  text-decoration: none;
}

a:hover {
  transition: all 0.5s;
  color: var(--mainColor);
}

li {
  list-style: none;
}

img {
  max-width: 100%;
  border-radius: 30px;
}

header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  box-shadow: var(--shadow);
  top: 0;
  width: 100%;
  z-index: 1;
  height: 100px;
  margin: auto;
  padding: 0 15px;
}

header.out {
  transform: translateY(-100%);
}

footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  margin: auto;
  padding: 0 15px;
}

section {
  padding: 100px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 15px;
}

.header-nav {
  font-size: 16px;
  font-weight: 700;
}

.header-nav a {
  text-transform: capitalize;
}

.header-nav a + a {
  margin-left: 30px;
}

.content-info {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: auto;
  padding: 0 15px;
}

.content-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 35px;
  margin: 0;
  padding: 0;
  bottom: 0;
  z-index: 999;
}

.content-social a {
  margin-bottom: 20px;
}

.content-social a:hover {
  transform: scale(1.1);
  box-shadow: 0 0 120px -55px var(--mainColor);
}

.content-social::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color: var(--mainColor);
}

.info-me {
  margin: 0;
  font-size: 45px;
  color: var(--ligth);
}

.bio {
  margin: 20px 0 0;
  max-width: 540px;
  color: var(--white);
}

.content-info span {
  color: var(--mainColor);
}

.email {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 35px;
  bottom: 0;
  z-index: 999;
}

.email a {
  margin: 5px auto;
  padding: 10px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

.email a:hover {
  transform: scale(1.1);
  box-shadow: 0 0 120px -55px var(--mainColor);
}

.email::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color: var(--mainColor);
}

.section-name {
  text-align: center;
  padding-top: 20px;
}

.skills-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 50px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  border-radius: 15px;
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

.project-card {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-basis: 25%;
  width: 500px;
  height: 500px;
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

.project-features {
  display: flex;
}

.project-lang {
  border: 1px solid var(--mainColor);
  border-radius: 8px;
  margin: 5px;
  padding: 8px;
  transition: var(--transition);
  cursor: text;
}

.project-lang:hover {
  background-color: var(--mainColor);
}

.social-footer {
  padding: 10px;
}

.footer-copyright {
  padding: 20px;
}

.social-footer a {
  margin-left: 20px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ebebeb;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #6d6d6d;
}

@media screen and (min-width: 768px) {
  .social-footer {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header-nav {
    display: none;
  }

  header {
    justify-content: flex-start;
  }

  .info {
    text-align: center;
    margin: 80px;
  }

  .content-info {
    flex-wrap: wrap;
    padding: 0 0;
  }

  .content-social {
    display: none;
  }

  .email {
    display: none;
  }

  .footer-nav {
    display: none;
  }

  .social {
    margin: 15px;
  }
}
</style>
