<template>
  <PreloaderPage v-if="isLoaded" />
  <main v-else>
    <HeaderPage />
    <MainContent id="home" />
    <SkillsPage id="skills" />
    <PortfolioCard id="portfolio" />
    <ContactPage id="contact" />
    <FooterPage />
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
        }, 100);
      }
    };
  },
};
</script>

<style src="./assets/css/main.css"></style>
