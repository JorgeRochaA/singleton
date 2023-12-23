<script setup>
const sponsors = [
  { name: "microsoft", url: "https://www.microsoft.com/" },
  { name: "uber", url: "https://www.uber.com/" },
  { name: "stripe", url: "https://www.stripe.com/" },
  { name: "nike", url: "https://www.nike.com/" },
  { name: "airbnb", url: "https://www.airbnb.com/" },
  { name: "tesla", url: "https://www.tesla.com/" },
  { name: "meta", url: "https://about.meta.com/" },
  { name: "nasa", url: "https://www.nasa.gov/" },
  { name: "netflix", url: "https://www.netflix.com/" },
  { name: "dji", url: "https://www.dji.com/" },
  { name: "thenorthface", url: "https://www.thenorthface.com/" },
  { name: "visa", url: "https://www.visa.com/" },
];
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
        :src="`src/assets/img/sponsor/${sponsor.name}.svg`"
        :alt="sponsor.name"
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
