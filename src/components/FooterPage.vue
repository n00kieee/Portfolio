<template>
  <footer>
    <div class="social-footer">
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-telegram" size="2x" />
      </a>
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-discord" size="2x" />
      </a>
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-instagram" size="2x" />
      </a>
    </div>
    <div class="footer-copyright">
      <a href="#">Designed by Stanislav Kutsenko {{ year }}</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return {
      year: ""
    }
  },
  mounted() {
    const newDate = new Date();
    this.year = newDate.getFullYear();
  },
};
</script>

<style scoped></style>
