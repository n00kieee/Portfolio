<template>
  <footer>
    <div class="social-footer">
      <a href="https://t.me/n00kiee" target="_blank">
        <TelegramIcon/>
      </a>
      <a href="https://discord.com/users/n00kie#3461/" target="_blank">
        <DiscordIcon/>
      </a>
      <a href="https://www.instagram.com/n00kie_0/" target="_blank">
        <InstagramIcon/>
      </a>
    </div>
    <div class="footer-copyright">
      <a href="#">© {{ year }} Designed by Stanislav Kutsenko</a>
    </div>
  </footer>
</template>

<script>
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import DiscordIcon from "@/components/Icons/DiscordIcon.vue";
import InstagramIcon from "@/components/Icons/InstagramIcon.vue";

export default {
  components: {
    TelegramIcon,
    DiscordIcon,
    InstagramIcon
  },
  name: "FooterPage",
  data() {
    return {
      year: "",
    };
  },
  mounted() {
    const newDate = new Date();
    this.year = newDate.getFullYear();
  },
};
</script>

<style>
footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 15px;
  background: linear-gradient(0deg, var(--color-homepage-light), var(--color-homepage-dark));
}

.social-footer {
  margin-top: 10px;
  padding: 10px;
}

.footer-copyright {
  padding: 20px;
}

.social-footer a {
  margin-left: 20px;
}
</style>
