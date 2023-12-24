<script setup>
import Card from "../shared/components/Card.vue";

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
    font-family: Poppins;
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
    background: #6ac75a;
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
      color: #6ac75a;
      border-color: #6ac75a;
      transform: scale(1.1);
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
</style>
