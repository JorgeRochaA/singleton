<script setup>
import Card from "../shared/components/Card.vue";

import { getImageUrl } from "../utils/utils";

const cardsData = [
  {
    logo: "img/features/lock.svg",
    title: "Security Management",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    alt: "lock",
  },
  {
    logo: "img/features/flame.svg",
    title: "Digital Agency ",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    alt: "flame",
  },
  {
    logo: "img/features/puzzle.svg",
    title: "API Reference ",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    alt: "puzzle",
  },
  {
    logo: "img/features/team.svg",
    title: "Team Accounts ",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    alt: "team",
  },
  {
    logo: "img/features/person.svg",
    title: "User Administration",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    alt: "person",
  },
  {
    logo: "img/features/email.svg",
    title: "Email Marketing ",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    alt: "email",
  },
];
</script>
<template>
  <div class="features-container">
    <h1>Save time managing social media for your business</h1>
    <div class="cards-container">
      <Card
        v-for="(card, index) in cardsData"
        :key="index"
        :logo="card.logo"
        :title="card.title"
        :description="card.description"
        :alt="card.alt"
      />
    </div>
    <h3>
      Create screens directly in Singleton or add your images from Sketch or
      Figma. You can even sync designs from your cloud storage!
    </h3>
    <button>Explore All Features</button>
    <div class="explore-all-features-container">
      <img :src="getImageUrl('img/features/tennisplayer.svg')" alt="" />
      <div class="explore-all-features-data">
        <div class="features-data">
          <div class="rectangle">
            <img src="../assets/img/features/flame.svg" alt="" />
          </div>
          <p>API Reference</p>
        </div>
        <h3>We believe in helping people pay attention to what matters</h3>
        <button>
          Explore All Features
          <svg
            fill="#fff"
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
    </div>
  </div>
</template>
<style scoped lang="scss">
.features-container {
  margin-top: 119px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #111;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 78px; /* 121.875% */
    letter-spacing: -3px;
    width: 775px;
    max-width: 80vw;
    word-wrap: break-word;
  }

  .cards-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
    place-items: center;
    margin-top: 19px;
    margin-bottom: 42px;
  }

  h3 {
    width: 752px;
    max-width: 90vw;
    color: #b8b8b8;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 145.455% */
    letter-spacing: -0.4px;
    margin-bottom: 43px;
  }
  button {
    width: 191px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #4fd1d9;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.36px;
    margin-bottom: 155px;
    transition: 0.5s;
    &:hover {
      background: #fff;
      color: #4fd1d9;
      border-color: #4fd1d9;
      transform: scale(1.1);
    }
  }

  .explore-all-features-container {
    display: flex;
    margin-bottom: 189px;
    img {
      height: fit-content;
      max-width: 90%;
    }
    .explore-all-features-data {
      display: flex;
      flex-direction: column;
      margin-left: 93.16px;
      .features-data {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .rectangle {
          display: grid;
          place-items: center;
          width: 65px;
          height: 65px;
          flex-shrink: 0;
          border-radius: 22px;
          background: #ffe6df;
          img {
            width: 32.5px;
            height: 32.5px;
            flex-shrink: 0;
          }
        }
        p {
          width: 301px;
          color: #111;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 45px; /* 187.5% */
          letter-spacing: -0.8px;
          text-align: left;
          margin-left: 26px;
        }
      }

      h3 {
        width: 485px;
        color: #111;
        font-family: "Poppins", sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 72px; /* 112.5% */
        letter-spacing: -3px;
        text-align: left;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 225px;
        height: 50px;
        flex-shrink: 0;
        margin-bottom: 41px;
        &:hover svg {
          fill: #4fd1d9;
        }
        svg {
          height: 21px;
          width: 21px;
          margin-left: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 1155px) {
  .features-container {
    .cards-container {
      grid-template-columns: auto auto;
      gap: 30px;
    }
  }
}

@media screen and (max-width: 765px) {
  .features-container {
    .cards-container {
      grid-template-columns: auto;
      gap: 30px;
    }
  }
}

@media screen and (max-width: 1375px) {
  .features-container {
    .explore-all-features-container {
      flex-direction: column-reverse;
      align-items: center;
      width: 80%;
      img {
        width: 65vw;
      }
      .explore-all-features-data {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-left: 0;
        .features-data {
          justify-content: center;
          padding: 25px;
          gap: 25px;
          p {
            width: fit-content;
            margin: 0;
          }
        }

        h3 {
          text-align: center;
          width: 85%;
        }
      }
    }
  }
}
</style>
