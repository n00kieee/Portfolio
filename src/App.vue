<template>
  <PreloaderPage v-if="isLoaded"/>
  <main v-else>
    <HeaderPage/>
    <MainContent id="home"/>
    <SkillsPage id="skills"/>
    <PortfolioCard id="portfolio"/>
    <FooterPage/>
  </main>
</template>

<script>
import PreloaderPage from "@/components/PreloaderPage.vue";
import HeaderPage from "@/components/HeaderPage.vue";
import MainContent from "@/components/MainContent.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import PortfolioCard from "@/components/PortfolioCard.vue";
import FooterPage from "@/components/FooterPage.vue";


export default {
  components: {
    PreloaderPage,
    HeaderPage,
    MainContent,
    SkillsPage,
    PortfolioCard,
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
        }, 2000);
      }
    }
  },
}
</script>

<style>
:root {
  --bodyColor: linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%);
  --mainColor: #00C4F0FF;
  --gradColor: #456abd;
  --white: #fff;
  --headColor: rgba(75, 81, 94, 0.56);
  --footColor: #4b515e;
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
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
  background: var(--bodyColor);
}

h1 {
  margin: 0 0 30px 4px;
  color: var(--white);
  font-size: 24px;
  font-weight: 400;
}

p {
  color: var(--white);
}

a {
  color: rgba(255, 255, 255, 0.99);
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

/* Default class */
.text-center {
  text-align: center;
}

/* Default class end */

header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--headColor);
  position: fixed;
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
  background-color: var(--footColor);
  flex-wrap: wrap;
  margin: auto;
  padding: 0 15px;
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
  color: var(--white);
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
  padding-top: 20px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  margin: 50px;
  background: linear-gradient(130.68deg, #414141 0%, #2D2D2D 100.52%);
  box-shadow: 0 4px 15px rgba(27, 27, 27, 0.28);
  border-radius: 5px;
}

.card:hover {
  transform: scale(1.02);
  transition: all .4s;
  box-shadow: 0 0 120px -55px var(--mainColor);
}

.progress-bar {
  width: 160px;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 3px;
  margin: 10px;
}

.bar {
  background: linear-gradient(to right, var(--mainColor), var(--gradColor));
  height: 20px;
  width: 15px;
  border-radius: 5px;
}

.bar span {
  float: right;
  padding: 4px 5px;
  color: #fff;
  font-size: 0.7em;
}


/*portfolio-card*/



/*portfolio-card-end*/


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

  /*.port-card {*/
  /*  flex-wrap: wrap;*/
  /*  justify-content: center;*/
  /*}*/

  /*.port-links {*/
  /*  justify-content: center;*/
  /*  margin-bottom: 30px;*/
  /*}*/

  .footer-nav {
    display: none;
  }

  .social {
    margin: 15px;
  }
}
</style>
