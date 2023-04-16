<template>
  <header :class="{ 'headroom--unpinned': scrolled }" @scroll="handleScroll">
    <div class="logo" data-aos="fade-right" data-aos-duration="3000">
      <a href="#">
        <LogoIcon />
      </a>
    </div>
    <nav class="header-nav" data-aos="fade-left" data-aos-duration="3000">
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue";

export default {
  name: "HeaderPage",
  components: { LogoIcon },
  data() {
    return {
      limitPosition: 50,
      scrolled: false,
      lastPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
      }
      this.lastPosition = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}

.headroom--pinned {
  transform: translateY(0%);
}

.headroom--unpinned {
  transform: translateY(-100%);
}
</style>
