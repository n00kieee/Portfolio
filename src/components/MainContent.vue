<template>
  <section>
    <div class="content-info">
      <div class="content-social">
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

      <div class="info">
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

<style>
.content-info {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: auto;
  padding: 0 15px;
  width: 570px;
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
  transform: translateY(-4px);
  box-shadow: 0 0 120px -55px var(--mainColor);
}

.content-social svg {
  font-size: 20px;
}

.content-social::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color: var(--mainColor);
}

.info {
  width: 500px;
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

.bio li {
  margin-bottom: 5px;
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
  font-size: 15px;
  margin: 5px auto;
  padding: 10px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

.email a:hover {
  transform: translateY(-4px);
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
</style>
