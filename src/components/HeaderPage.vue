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

      <div class="burger-btn">
        <BurgerBtnComponent
            @burger="isOpen = !isOpen"
            :active="isOpen"
        />
      </div>
      <div class="sidebar-panel-nav">
        <transition name="translateX">
          <BurgerComponent v-if="isOpen">
            <nav class="burger-nav">
              <ul>
                <li>
                  <a @click="isOpen = !isOpen" href="#home">Home</a>
                </li>
                <li>
                  <a @click="isOpen = !isOpen" href="#skills">Skills</a>
                </li>
                <li>
                  <a @click="isOpen = !isOpen" href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a @click="isOpen = !isOpen" href="#contact">Contact</a>
                </li>
              </ul>
              <CustomButton
                  :width="'150px'"
                  :height="'50px'"
                  :background-color="'bodyColor'"
                  :color="'white'"
                  :hover-color="'var(--mainColor)'"
                  :border="'1px solid var(--mainColor)'"
                  class="btn-contact"
              >
                Resume
              </CustomButton>
            </nav>
          </BurgerComponent>
        </transition>
      </div>
    </header>

    <div class="helpers">
      <button class="light-mode"><MoonIcon/></button>
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
import MoonIcon from "@/components/Icons/MoonIcon.vue";
import Split from "@/components/Icons/Split.vue";

export default {
  name: "HeaderPage",
  components: {
    Split,
    MoonIcon,
    BurgerComponent,
    BurgerBtnComponent,
    CloseIcon,
    MenuIcon,
    LogoIcon,
    CustomButton
  },
  data() {
    return {
      isOpen: false
    };
  },
};
</script>

<style scoped>
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
  color: var(--mainColor);
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
  color: var(--white);
}

.split-content {
  overflow: hidden;
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 90px;
  transform: translateY(1px);
  z-index: 3;
}

.split {
  position: absolute;
  left: -3%;
  right: -3%;
  bottom: 0px;
  width: 106%;
  min-width: 600px;
  max-width: unset;
}

.split-content svg {
  fill: var(--bodyColor);
}

.light-mode:hover {
  opacity: 1;
  transition: all 0.5s;
  color: var(--mainColor)
}

.burger-btn {
  width: 32px;
  height: 32px;
  z-index: 99;
}

.burger-nav {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 12;
}

.sidebar-panel-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}

.sidebar-panel-nav a {
  font-size: 16px;
  font-weight: 600;
}

.sidebar-panel-nav span {
  color: var(--mainColor);
}

.sidebar-panel-nav li {
  counter-increment: item 1;
  margin-top: 50px;
}

.sidebar-panel-nav li::before {
  content: "0" counter(item) ".";
  display: block;
  margin-bottom: 5px;
  color: var(--mainColor);
  font-size: 16px;
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active, .translateX-leave-active {
  transform-origin: right 0;
  transition: .3s ease;
}

.translateX-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
