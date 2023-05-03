<template>
  <section>
    <div class="content-info">
      <div class="content-social" data-aos="fade-up" data-aos-duration="3000">
        <a href="https://github.com/n00kieee" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://t.me/n00kiee" target="_blank">
          <TelegramIcon />
        </a>
        <a href="https://discord.com/users/n00kie#3461/" target="_blank">
          <DiscordIcon />
        </a>
        <a href="https://www.instagram.com/n00kie_0/" target="_blank">
          <InstagramIcon />
        </a>
      </div>

      <div
        class="info"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1>Hello 👋</h1>

        <h2 class="info-me">
          I'm <span>Stanislav</span>
        </h2>
        <ul class="bio">
          <li>I am Junior - Developer.</li>
          <li>I am a beginner web developer.</li>
          <li>I actively study JS, Ts, Vue and develop in these areas.</li>
          <li>I like to learn new technologies and I'm not afraid of the unknown.</li>
        </ul>
      </div>

      <div class="email" data-aos="fade-up" data-aos-duration="3000">
        <a href="mailto:stak3k@gmail.com">stak3k@gmail.com</a>
      </div>
    </div>
  </section>
</template>

<script>
import GitHubIcon from "@/components/Icons/GitHubIcon.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import DiscordIcon from "@/components/Icons/DiscordIcon.vue";
import InstagramIcon from "@/components/Icons/InstagramIcon.vue";

export default {
  components: {
    GitHubIcon,
    TelegramIcon,
    DiscordIcon,
    InstagramIcon,
  },
  name: "MainContent",
};
</script>

<style scoped>

</style>
