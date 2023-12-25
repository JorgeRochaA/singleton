>
<script setup>
import PlanCard from "../shared/components/PlanCard.vue";
const planCards = [
  {
    tittle: "Starter",
    price: 0,
    interval: "",
    features: [
      "1 Non-Commercial Site",
      "100 GB System Storage",
      "Singleton Branding",
    ],
    button: "Select Plan",
  },
  {
    tittle: "Singleton Plus",
    price: 39,
    interval: "/month",
    features: [
      "10 Non-Commercial Site",
      "500 GB System Storage",
      "Custom Branding",
    ],
    button: "Select Plan",
  },
  {
    tittle: "Singleton Pro",
    price: 99,
    interval: "/month",
    features: [
      "30 Non-Commercial Site",
      "1TB System Storage",
      "Custom Branding",
    ],
    button: "Select Plan",
  },
];
</script>
<template>
  <div class="plans-container">
    <h2>Build the right plan for your team</h2>
    <div class="plan-cards-container">
      <PlanCard
        v-for="plan in planCards"
        :key="plan.tittle"
        :tittle="plan.tittle"
        :price="plan.price"
        :interval="plan.interval"
        :features="plan.features"
        :button="plan.button"
      />
    </div>
    <p>
      Create screens directly in Singleton or add your images from Sketch or
      Figma. You can even sync designs from your cloud storage!
    </p>
  </div>
</template>
<style scoped lang="scss">
.plans-container {
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-bottom: 91px;
  h2 {
    width: 775px;
    color: #111;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 78px; /* 121.875% */
    letter-spacing: -3px;
  }

  .plan-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 27px;
    margin-bottom: 48px;
  }

  p {
    width: 621px;
    color: #b8b8b8;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.4px;
  }
}

@media screen and (max-width: 1165px) {
  .plans-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      max-width: 90vw;
      text-align: center;
    }

    .plan-cards-container {
      grid-template-columns: repeat(2, 1fr);
    }

    p {
      max-width: 90vw;
      text-align: center;
    }
  }
}

@media screen and (max-width: 800px) {
  .plans-container {
    .plan-cards-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
