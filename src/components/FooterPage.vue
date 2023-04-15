<template>
  <footer>
    <div class="social-footer">
      <a href="#">
        <TelegramIcon />
      </a>
      <a href="#">
        <DiscordIcon />
      </a>
      <a href="#">
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
