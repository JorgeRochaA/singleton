<script setup>
const sponsors = [
  {
    src: "img/sponsors/microsoft.svg",
    alt: "microsoft",
    url: "https://www.microsoft.com/",
  },
  { src: "img/sponsors/uber.svg", alt: "uber", url: "https://www.uber.com/" },
  {
    src: "img/sponsors/stripe.svg",
    alt: "stripe",
    url: "https://www.stripe.com/",
  },
  { src: "img/sponsors/nike.svg", alt: "nike", url: "https://www.nike.com/" },
  {
    src: "img/sponsors/airbnb.svg",
    alt: "airbnb",
    url: "https://www.airbnb.com/",
  },
  {
    src: "img/sponsors/tesla.svg",
    alt: "tesla",
    url: "https://www.tesla.com/",
  },
  { src: "img/sponsors/meta.svg", alt: "meta", url: "https://about.meta.com/" },
  { src: "img/sponsors/nasa.svg", alt: "nasa", url: "https://www.nasa.gov/" },
  {
    src: "img/sponsors/netflix.svg",
    alt: "netflix",
    url: "https://www.netflix.com/",
  },
  { src: "img/sponsors/dji.svg", alt: "dji", url: "https://www.dji.com/" },
  {
    src: "img/sponsors/thenorthface.svg",
    alt: "thenorthface",
    url: "https://www.thenorthface.com/",
  },
  { src: "img/sponsors/visa.svg", alt: "visa", url: "https://www.visa.com/" },
];
const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};
const goToWebsite = (websiteUrl) => {
  window.open(websiteUrl, "_blank");
};
</script>

<template>
  <div class="sponsor-container">
    <div class="bar"></div>
    <div class="sponsors">
      <img
        v-for="(sponsor, index) in sponsors"
        :key="index"
        :src="getImageUrl(sponsor.src)"
        :alt="sponsor.alt"
        v-on:click="goToWebsite(sponsor.url)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sponsor-container {
  margin-top: 119px;
  width: 69%;
  .bar {
    height: 2px;
    flex-shrink: 0;
    background: #e1e4eb;
    margin-bottom: 45px;
  }

  .sponsors {
    display: flex;
    justify-content: center;
    row-gap: 50px;
    column-gap: 103px;
    flex-wrap: wrap;
    img {
      width: 98.78px;
      transition: 0.5s;
      filter: grayscale(100%);
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        filter: grayscale(0%);
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .sponsor-container {
    width: 90%;
    .sponsors {
      row-gap: 10px;
      column-gap: 50px;

      img {
        width: 35%;
      }
    }
  }
}
</style>
