<template>
  <section>
    <div class="content-info">
      <div class="content-social" data-aos="fade-up" data-aos-duration="3000">
        <a href="#">
          <GitHubIcon/>
        </a>
        <a href="#">
          <TelegramIcon/>
        </a>
        <a href="#">
          <DiscordIcon/>
        </a>
        <a href="#">
          <InstagramIcon/>
        </a>
      </div>

      <div
        class="info"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1>Hello 👋</h1>

        <h2 class="info-me">
          I'm <span>{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h2>
        <p class="bio">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          consectetur cum doloremque ducimus eum, exercitationem hic, illo
          laborum laudantium molestias officiis possimus, quisquam repellendus
          reprehenderit soluta ut vitae voluptates
        </p>
      </div>

      <div class="email" data-aos="fade-up" data-aos-duration="3000">
        <a href="mailto:stak3k@gmail.com">stak3k@gmail.com</a>
      </div>
    </div>
  </section>
</template>

<script>
import GitHubIcon from "@/components/Icons/GitHubIcon.vue";
import TelegramIcon from "@/components/Icons/TelegramIcon.vue";
import DiscordIcon from "@/components/Icons/DiscordIcon.vue";
import InstagramIcon from "@/components/Icons/InstagramIcon.vue";

export default {
  components: {
    GitHubIcon,
    TelegramIcon,
    DiscordIcon,
    InstagramIcon
  },
  name: "MainContent",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Stanislav.", "Junior - Developer."],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style scoped>
.blinking-cursor {
  font-size: 3.1rem;
  color: #2c3e50;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #00c4f0ff;
  }
}
</style>
