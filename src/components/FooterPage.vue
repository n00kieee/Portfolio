<template>
  <footer>
    <div class="social-footer">
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
    <div class="footer-copyright">
      <a href="#">Designed by Stanislav Kutsenko {{ year }}</a>
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

<style scoped></style>
