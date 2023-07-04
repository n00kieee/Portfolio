<template>
  <div>
    <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span v-if="userTheme === 'dark'"><MoonIcon/></span>
      <span v-if="userTheme === 'light'"><LightIcon/></span>
      <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark' }"
      ></div>
    </label>
  </div>
</template>

<script>
import LightIcon from "@/components/Icons/LightIcon.vue";
import MoonIcon from "@/components/Icons/MoonIcon.vue";

export default {
  name: "CustomThemeButton",
  components: {LightIcon, MoonIcon},
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "dark") {
        this.setTheme("light");
      } else {
        this.setTheme("dark");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark";
      } else {
        return "light";
      }
    },
  },
};
</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.5s;
}

.switch-label:hover {
  opacity: 1;
  transition: all 0.5s;
}
</style>
