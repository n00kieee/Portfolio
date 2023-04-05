<template>
  <div class="container">
    <button class="btn-contact"
            @click="openForm"
    >
      Contact me
    </button>
    <div class="form-container"
         @click.self="closeForm"
         v-if="isClick === true"
         data-aos="zoom-in"
    >
      <div class="form-contact">
        <form @submit.prevent="sendEmail">
          <label>Name</label>
          <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"

          >
          <label>Email</label>
          <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"

          >
          <label>Message</label>
          <textarea
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Message"

          >
          </textarea>
          <button class="btn-send"
                  type="submit"
                  :class="{ 'btn-send--is-active' : isLoad }"
          >
            <span v-show="!isLoad">Send</span>
            <span v-show="isLoad">{{ errorText }} {{ sendText }}</span>
          </button>
          <button
              class="btn-close"
              @click="closeForm"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailJs from 'emailjs-com';

export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      sendText: '',
      errorText: '',
      isClick: false,
      isLoad: false
    }
  },
  methods: {
    sendEmail(e) {
      this.isLoad = true;
      setTimeout(() => {
        this.isLoad = false;
      }, 2000);
      emailJs.sendForm('service_j9eiehd', 'template_j4rkg8s', e.target,
          'GaJgQBvIu8C3rmAyO', {
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then(() => {
            this.sendText = 'Sending..'
          }, () => {
            this.errorText = 'Error'
          });
      this.name = ''
      this.email = ''
      this.message = ''
    },
    openForm() {
      this.isClick = true;
    },
    closeForm() {
      this.isLoad = false;
      this.isClick = false;
    },
  }
}

</script>

<style>
.btn-send {
  background-color: var(--bodyColor);
  box-shadow: var(--shadow);
  border: 1px solid var(--mainColor);
  transition: var(--transition);
  color: var(--white);
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-send:hover, .btn-send:focus {
  background-color: var(--mainColor);
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
  content: '';
  border-radius: 24px;
  background-clip: padding-box;
  border: var(--mainColor) 2px solid;
  border-top-color: var(--white);
  animation: rotate 750ms linear infinite;
  margin: -13px -7px -2px 3px;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

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
  width: 150px;
  height: 50px;
  margin: 100px;
  background-color: var(--bodyColor);
  transition: var(--transition);
  cursor: pointer;
  border-radius: 8px;
  color: var(--white);
  box-shadow: var(--shadow);
  border: 1px solid var(--mainColor);
}

.btn-contact:hover {
  background-color: var(--mainColor);
}

.btn-close {
  background-color: var(--bodyColor);
  box-shadow: var(--shadow);
  border: 1px solid var(--red);
  transition: var(--transition);
  color: var(--white);
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;
}

.btn-close:hover {
  background-color: var(--red);
}

form {
  margin: 60px;
}

label {
  float: left;
  color: var(--ligth);
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--ligth);
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
</style>
