<template>
  <header>
    <div class="logo">
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
</template>

<script>
import LogoIcon from "@/components/Icons/LogoIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import CloseIcon from "@/components/Icons/CloseIcon.vue";
import BurgerBtnComponent from "@/components/UI/CustomBurgerBtn.vue";
import BurgerComponent from "@/components/BurgerComponent.vue";
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  name: "HeaderPage",
  components: {
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

.translateX-enter{
  transform:translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
  transform-origin: right 0;
  transition:.3s ease;
}

.translateX-leave-to{
  transform: translateX(200px);
  opacity: 0;
}
</style>
