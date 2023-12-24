<script setup>
import { onMounted } from "vue";

const openNavbar = () => {
  const burger = document.getElementById("burger");
  const actions = document.getElementById("actions");

  if (burger && actions) {
    burger.classList.toggle("is-active");
    actions.classList.toggle("is-active");
  }
};

const checkScroll = (elementId) => {
  const navbar = document.getElementById(elementId);

  if (navbar) {
    const isScrolled = window.scrollY > 0;
    navbar.classList.toggle("is-scrolled", isScrolled);
  }
};

const checkFirstScroll = () => {
  checkScroll("navbar-mobile");
  checkScroll("navbar-desktop");
};

onMounted(() => {
  checkFirstScroll();
  window.addEventListener("scroll", checkFirstScroll);
});
</script>

<template>
  <nav class="desktop" id="navbar-desktop">
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="32" cy="32" r="30" fill="#4fd1d9"></circle>
      <path
        d="M25.8 37.6c.2 1.3.6 2.3 1.1 3c1 1.2 2.7 1.8 5.2 1.8c1.5 0 2.6-.2 3.6-.5c1.7-.6 2.6-1.7 2.6-3.4c0-1-.4-1.7-1.3-2.2c-.8-.5-2.2-1-4-1.4l-3.1-.7c-3.1-.7-5.2-1.4-6.4-2.2c-2-1.3-2.9-3.4-2.9-6.3c0-2.6 1-4.8 2.9-6.5c1.9-1.7 4.7-2.6 8.4-2.6c3.1 0 5.7.8 7.9 2.4c2.2 1.6 3.3 4 3.4 7.1h-5.8c-.1-1.7-.9-3-2.3-3.7c-1-.5-2.2-.7-3.6-.7c-1.6 0-2.9.3-3.8.9s-1.4 1.5-1.4 2.6c0 1 .5 1.8 1.4 2.3c.6.3 1.9.7 3.9 1.2l5.1 1.2c2.2.5 3.9 1.2 5 2.1c1.7 1.4 2.6 3.3 2.6 5.9c0 2.7-1 4.9-3.1 6.6c-2 1.8-4.9 2.6-8.7 2.6c-3.8 0-6.8-.9-9-2.6c-2.4-1.5-3.5-3.9-3.5-6.9h5.8"
        fill="#ffffff"
      ></path>
    </svg>

    <div class="links">
      <p>About</p>
      <p>Services</p>
      <p>Projects</p>
      <p>Contacts</p>
    </div>

    <div class="buttons">
      <div class="button">Log In</div>
      <div class="button signUp">Sign Up</div>
    </div>
  </nav>
  <nav class="mobile" id="navbar-mobile">
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="32" cy="32" r="30" fill="#4fd1d9"></circle>
      <path
        d="M25.8 37.6c.2 1.3.6 2.3 1.1 3c1 1.2 2.7 1.8 5.2 1.8c1.5 0 2.6-.2 3.6-.5c1.7-.6 2.6-1.7 2.6-3.4c0-1-.4-1.7-1.3-2.2c-.8-.5-2.2-1-4-1.4l-3.1-.7c-3.1-.7-5.2-1.4-6.4-2.2c-2-1.3-2.9-3.4-2.9-6.3c0-2.6 1-4.8 2.9-6.5c1.9-1.7 4.7-2.6 8.4-2.6c3.1 0 5.7.8 7.9 2.4c2.2 1.6 3.3 4 3.4 7.1h-5.8c-.1-1.7-.9-3-2.3-3.7c-1-.5-2.2-.7-3.6-.7c-1.6 0-2.9.3-3.8.9s-1.4 1.5-1.4 2.6c0 1 .5 1.8 1.4 2.3c.6.3 1.9.7 3.9 1.2l5.1 1.2c2.2.5 3.9 1.2 5 2.1c1.7 1.4 2.6 3.3 2.6 5.9c0 2.7-1 4.9-3.1 6.6c-2 1.8-4.9 2.6-8.7 2.6c-3.8 0-6.8-.9-9-2.6c-2.4-1.5-3.5-3.9-3.5-6.9h5.8"
        fill="#ffffff"
      ></path>
    </svg>

    <div id="actions" class="actions">
      <div class="links">
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Contacts</p>
      </div>

      <div class="buttons">
        <div class="button">Log In</div>
        <div class="button signUp">Sign Up</div>
      </div>
    </div>

    <button
      id="burger"
      class="hamburger hamburger--elastic"
      type="button"
      v-on:click="openNavbar()"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </nav>
</template>

<style scoped lang="scss">
@mixin equalProps {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  letter-spacing: -0.36px;
  line-height: normal;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  &.is-scrolled {
    box-shadow: 0 3px 5px 0 rgba(105, 75, 75, 0.1);
  }

  &.desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &.mobile {
    display: none;
  }
  height: 82px;
  background-color: white;
  @include equalProps;

  svg {
    margin-left: 145px;
  }

  .links {
    display: flex;
    color: #111;
    font-size: 16px;
    font-weight: 400;
    margin-left: 263px;
    gap: 47px;
    &:hover {
      cursor: pointer;
    }
  }
  .buttons {
    display: flex;
    color: #4fd1d9;
    font-size: 14px;
    font-weight: 500;
    margin-right: 217px;
    gap: 10px;
    .button {
      height: 40px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      transition: 0.3s;
      &:hover {
        background-color: #4fd1d9;
        color: white;
        cursor: pointer;
      }
      &.signUp {
        border: 1px solid #4fd1d9;
      }
    }
  }
}

@media screen and (max-width: 1333px) {
  nav {
    &.desktop {
      justify-content: space-evenly;

      svg,
      .links {
        margin-left: 0;
      }

      .buttons {
        margin-right: 0;
      }
    }
  }
}

@media screen and (max-width: 999px) {
  nav {
    &.desktop {
      display: none;
    }

    &.mobile {
      display: flex;
      align-items: center;
      justify-content: space-around;
      svg {
        margin: 0;
      }
      .actions {
        position: absolute;
        left: -100vw;
        top: 82px;
        width: 100vw;
        justify-content: start;
        align-items: flex-start;
        background-color: white;
        transition: 0.5s;
        &.is-active {
          left: 0;
        }
      }
      .actions,
      .actions .links,
      .actions .buttons {
        flex-direction: column;
        margin: 0;
      }

      .links {
        gap: 0px;
      }

      .buttons {
        width: 100vw;
        align-items: center;
        margin-bottom: 15px !important;
        gap: 15px;
      }
    }
  }
}
</style>
