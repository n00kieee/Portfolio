<template>
  <section>
    <div
      class="section-name">
      <h1>
        <span>04. </span>
        If you have questions. Contact me using the form below.
      </h1>
    </div>
    <div class="container" @keydown.esc="closeForm">
      <CustomButton
        @click="openForm"
        :width="'150px'"
        :height="'50px'"
        :background-color="'bodyColor'"
        :color="'white'"
        :hover-color="'var(--mainColor)'"
        :border="'1px solid var(--mainColor)'"
        class="btn-contact"
      >
        Contact me
      </CustomButton>
        <div
          class="form-container"
          @click.self="closeForm"
          v-if="isClick === true"
        >
          <div class="form-contact">
            <form @submit.prevent="sendEmail">
              <CustomInput
                v-model="name"
                name="name"
                id="name"
                label="Name"
                placeholder="Your Name"
              />
              <CustomInput
                v-model="email"
                name="email"
                type="email"
                id="email"
                label="Email"
                placeholder="Your Email"
              />

              <CustomTextArea
                v-model="message"
                name="message"
                :cols="30"
                :rows="5"
                placeholder="Message"
              >
              </CustomTextArea>

              <CustomButton
                type="submit"
                :background-color="'bodyColor'"
                :color="'white'"
                :border="'1px solid var(--mainColor)'"
                :hover-color="'var(--mainColor)'"
                :class="{ 'btn-send--is-active': isLoad }"
              >
                <span v-show="!isLoad">Send</span>
                <span v-show="isLoad">{{ errorText }} {{ sendText }}</span>
              </CustomButton>

              <CustomButton
                :background-color="'bodyColor'"
                :color="'white'"
                :border="'1px solid var(--red)'"
                :hover-color="'var(--red)'"
                class="btn-close"
                @click="closeForm"
              >
                Close
              </CustomButton>
            </form>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import emailJs from "emailjs-com";
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomTextArea from "@/components/UI/CustomTextArea.vue";

export default {
  name: "ContactPage",
  components: { CustomTextArea, CustomInput, CustomButton },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      sendText: "",
      errorText: "",
      isClick: false,
      isLoad: false,
    };
  },
  methods: {
    async sendEmail(e) {
      try {
        this.isLoad = true;
        this.sendText = "Sending..";
        setTimeout(() => {
          this.isLoad = false;
        }, 2000);
        await emailJs.sendForm(
          "service_j9eiehd",
          "template_j4rkg8s",
          e.target,
          "GaJgQBvIu8C3rmAyO",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        this.errorText = "Error";
      }
      this.name = "";
      this.email = "";
      this.message = "";
      setTimeout(() => {
        this.isClick = false;
        }, 3000)
    },
    openForm() {
      this.isClick = true;
    },
    closeForm() {
      this.isClick = false;
    },
  },
};
</script>

<style>
.form-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-contact {
  width: 450px;
  height: 450px;
  background-color: rgba(30, 11, 99, 0.71);
  border-radius: 8px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.btn-contact {
  margin: 100px;
}

.btn-contact:hover {
  background-color: var(--mainColor);
}

.btn-close {
  margin-left: 10px;
}

.btn-close:hover {
  background-color: var(--red);
}

.btn-send:disabled {
  cursor: default;
}

.btn-send--is-active .btn-send__text {
  opacity: 0;
}

.btn-send--is-active:after {
  display: inline-block;
  width: 10px;
  height: 10px;
  content: "";
  border-radius: 24px;
  background-clip: padding-box;
  border: var(--mainColor) 2px solid;
  border-top-color: var(--white);
  animation: rotate 750ms linear infinite;
  margin: -13px -7px -2px 3px;
}

form {
  margin: 60px;
}
</style>
