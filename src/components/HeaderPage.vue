<template>
  <div class="header-content">
    <header>
      <div class="logo">
        <a href="#">
          <LogoIcon/>
        </a>
      </div>
      <div class="header-nav">
        <nav>
          <a href="#home"><span>01. </span>Home</a>
          <a href="#skills"><span>02. </span>Skills</a>
          <a href="#portfolio"><span>03. </span>Portfolio</a>
          <a href="#contact"><span>04. </span>Contact</a>
        </nav>
      </div>
      <BurgerBtnComponent
          @burger="isOpen = !isOpen"
          :active="isOpen"
      />
      <BurgerComponent v-if="isOpen">
        <div class="blur">
          <nav class="nav-burger">
            <div class="links">
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
            <div class="light-mode-burger">
              <CustomThemeButton/>
            </div>
          </nav>
        </div>
      </BurgerComponent>
      <!--            <a class="resume" href="https://hh.ru/resume/be899c6cff0bb0cc820039ed1f336b6665556f">Resume</a>-->
    </header>
    <div class="helpers">
      <CustomThemeButton/>
    </div>
    <div class="split-content">
      <Split class="split"/>
    </div>
  </div>
</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import CloseIcon from "@/components/Icons/CloseIcon.vue";
import BurgerBtnComponent from "@/components/UI/CustomBurgerBtn.vue";
import BurgerComponent from "@/components/BurgerComponent.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import Split from "@/components/Icons/Split.vue";
import CustomThemeButton from "@/components/UI/CustomThemeButton.vue"

export default {
  name: "HeaderPage",
  components: {
    CustomThemeButton,
    Split,
    BurgerComponent,
    BurgerBtnComponent,
    CloseIcon,
    MenuIcon,
    LogoIcon,
    CustomButton
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.header-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -webkit-appearance: none;
  transition: var(--transition);
  background: linear-gradient(0deg, var(--color-homepage-dark), var(--color-homepage-light));
  width: 100%;
  height: 300px;
  margin: auto;
  padding: 0 15px;
}

header {
  height: 3.75rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0;
}

.header-nav {
  font-size: 16px;
  font-weight: 700;
}

.header-nav span {
  color: var(--color-main);
}

.header-nav a {
  text-transform: capitalize;
}

.header-nav a + a {
  margin-left: 30px;
}

.logo {
  margin-right: 32px;
}

.light-mode {
  opacity: 0.7;
  border: none;
  background: transparent;
}

.light-mode svg {
  cursor: pointer;
  color: var(--color-text);
}

.helpers:hover {
  opacity: 1;
  transition: all 0.5s;
}

.nav-burger {
  position: fixed;
  left: 0;
  top: 200px;
  width: 75%;
  height: 75%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.links {
  display: flex;
  flex-direction: column;
}

.links a {
  display: block;
  position: relative;
  padding: 16px 16px 16px 32px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
  font-size: 28px;
  animation-duration: 2s;
  animation-name: slide;
}

@keyframes slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
}

.light-mode-burger {
  display: flex;
  padding-left: 30px;
  animation-duration: 2s;
  animation-name: opacity;
}

@keyframes opacity {
  from {
    opacity: 0;
    transition: opacity 250ms ease 0ms;
  }

  to {
    opacity: 1;
    transition: opacity 250ms ease 500ms;
  }
}

.split-content {
  overflow: hidden;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  transform: translateY(1px);
  z-index: 1;
}

.split {
  position: absolute;
  left: -3%;
  right: -3%;
  bottom: 0;
  width: 106%;
  min-width: 600px;
  max-width: unset;
}

.split-content svg {
  fill: var(--color-background);
}
</style>
