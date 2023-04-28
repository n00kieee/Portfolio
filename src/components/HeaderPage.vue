<template>
  <header :class="{ 'headroom--unpinned': scrolled }" @scroll="handleScroll">
    <div class="logo" data-aos="fade-right" data-aos-duration="3000">
      <a href="#">
        <LogoIcon />
      </a>
    </div>
    <nav class="header-nav" data-aos="fade-left" data-aos-duration="3000">
      <a href="#home"><span>01. </span>Home</a>
      <a href="#skills"><span>02. </span>Skills</a>
      <a href="#portfolio"><span>03. </span>Portfolio</a>
      <a href="#contact"><span>04. </span>Contact</a>
    </nav>

    <div class="hamburger-btn" data-aos="fade-left" data-aos-duration="3000">
      <a @click="isOpen = !isOpen">
        <MenuIcon v-if="!isOpen" />
      </a>
      <a @click="isOpen = !isOpen">
        <CloseIcon v-if="isOpen" />
      </a>
    </div>

  </header>

  <div class="dropdown" :class="{ 'dropdown-after': isOpen }">
    <ul class="nav-list" v-if="isOpen">
      <li class="nav-item">
        <a @click="isOpen = !isOpen" href="#home"><span>01. </span>Home</a>
      </li>
      <li class="nav-item">
        <a @click="isOpen = !isOpen" href="#skills"><span>02. </span>Skills</a>
      </li>
      <li class="nav-item">
        <a @click="isOpen = !isOpen" href="#portfolio"><span>03. </span>Portfolio</a>
      </li>
      <li class="nav-item">
        <a @click="isOpen = !isOpen" href="#contact"><span>04. </span>Contact</a>
      </li>
    </ul>
  </div>

</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import CloseIcon from "@/components/Icons/CloseIcon.vue";

export default {
  name: "HeaderPage",
  components: { CloseIcon, MenuIcon, LogoIcon },
  data() {
    return {
      limitPosition: 50,
      scrolled: false,
      lastPosition: 0,
      isOpen: false,
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
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  },
};
</script>

<style scoped>
.hamburger-btn {
  cursor: pointer;
  position: absolute;
  right: 100px;
  z-index: 99;
}

.dropdown {
  margin-top: -20px;
  height: 0;
  background-color: #2800c5;
  transition: height 0.7s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  width: 100%;
}

.dropdown-after {
  height: calc(100vh - -20px);
  transition: height 0.7s ease;
  z-index: 9;
}

.nav-list {
  list-style: none;
}

.nav-item {
  font-weight: 600;
  text-align: center;
  padding: 20px;
}

.nav-item span {
  color: var(--mainColor);
}

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
