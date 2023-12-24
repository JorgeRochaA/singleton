<script setup>
import { getImageUrl } from "../../utils/utils";

defineProps({
  logo: String,
  title: String,
  description: String,
  alt: String,
});
</script>

<template>
  <div class="card">
    <div class="logo-container">
      <img :src="getImageUrl(logo)" :alt="alt" />
    </div>
    <h1>{{ title }}</h1>
    <p>
      {{ description }}
    </p>
    <button>
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        id="round"
      >
        <path
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
        />
      </svg>
      <svg
        fill="#000"
        width="800px"
        height="800px"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow"
      >
        <path
          d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 350px;
  max-width: 90%;
  min-height: 400px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f8f8f8;
  padding: 0;
  font-family: "Poppins", sans-serif;
  text-align: start;
  .logo-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    img {
      margin: 20px 0px 0px 20px;
    }
  }

  h1 {
    min-height: 90px;
    width: 301px;
    color: #111;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px; /* 125% */
    letter-spacing: -1.6px;
    margin: 22px 0px 0px 20px;
  }

  p {
    width: 301px;
    max-width: 90%;
    color: #b8b8b8;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.4px;
    margin: 15px 0px 0px 20px;
  }

  button {
    background: white;
    width: 65px;
    height: 65px;
    flex-shrink: 0;
    border-radius: 50%;
    margin: 48px 0px 20px 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    svg {
      height: 20px;
      width: 20px;
    }

    #arrow {
      transition: transform 0.5s ease-in-out;
      position: absolute;
      top: 32%;
      left: 36%;
    }

    #round {
      position: absolute;
      top: 32%;
      left: 36%;
      transform: translateX(-130px);
      transition: transform 0.5s ease-in-out;
    }

    &:hover {
      #arrow {
        transform: translateX(130px);
      }
      #round {
        transform: translateX(0px);
      }
    }
  }
}

@media screen and (max-width: 765px) {
  .card {
    text-align: center;
    .logo-container {
      justify-content: center;
      width: 100%;

      img {
        margin: 20px 0px 0px 0px;
      }
    }

    h1 {
      margin: 22px 0px 0px 0px;
      width: 100%;
    }

    p {
      margin: 15px 0px 0px 0px;
      max-width: 100%;
      width: 100%;
    }

    button {
      margin: 48px 0px 0px 0px;
    }
  }
}
</style>
