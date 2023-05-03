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

    <BurgerBtnComponent
      @burger="isOpen = !isOpen"
      :active="isOpen"
    />
  </header>

  <BurgerComponent v-if="isOpen">
    <ul class="sidebar-panel-nav">
      <li>
        <a @click="isOpen = !isOpen" href="#home"><span>01. </span>Home</a>
      </li>
      <li>
        <a @click="isOpen = !isOpen" href="#skills"><span>02. </span>Skills</a>
      </li>
      <li>
        <a @click="isOpen = !isOpen" href="#portfolio"><span>03. </span>Portfolio</a>
      </li>
      <li>
        <a @click="isOpen = !isOpen" href="#contact"><span>04. </span>Contact</a>
      </li>
    </ul>
  </BurgerComponent>

</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import CloseIcon from "@/components/Icons/CloseIcon.vue";
import BurgerBtnComponent from "@/components/UI/BurgerBtnComponent.vue";
import BurgerComponent from "@/components/BurgerComponent.vue";

export default {
  name: "HeaderPage",
  components: {
    BurgerComponent,
    BurgerBtnComponent,
    CloseIcon,
    MenuIcon,
    LogoIcon,
  },
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
.sidebar-panel-nav a {
  font-size: 16px;
  font-weight: 600;
}

.sidebar-panel-nav span {
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
