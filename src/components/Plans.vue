>
<script setup>
import PlanCard from "../shared/components/PlanCard.vue";
const planCards = [
  {
    title: "Starter",
    freeTrial: true,
    pricing: {
      monthly: {
        price: 0,
        interval: "/month"
      },
      yearly: {
        price: 0,
        interval: "/year"
      }
    },
    features: [
      "1 Non-Commercial Site",
      "100 GB System Storage",
      "Singleton Branding",
      "Community Support",
      "-", 
      "-"
    ],
    button: "Select Plan",
  },


  {
    title: "Basic",
    freeTrial: false,
    pricing: {
      monthly: {
        price: 7,
        interval: "/month"
      },
      yearly: {
        price: 70,
        interval: "/year"
      }
    },
    features: [
      "3 Commercial Sites",
      "500 GB System Storage",
      "Remove Singleton Branding",
      "Basic Analytics",
      "Email Support",
      "-",
    ],
    button: "Select Plan",
  },


  {
    title: "Professional",
    freeTrial: false,
    pricing: {
      monthly: {
        price: 17,
        interval: "/month"
      },
      yearly: {
        price: 170,
        interval: "/year"
      }
    },
    features: [
      "10 Commercial Sites",
      "2 TB System Storage",
      "Advanced Analytics",
      "Custom Domains",
      "Priority Support",
      "-",
    ],
    button: "Select Plan",
  },


  {
    title: "Business",
    freeTrial: false,
    pricing: {
      monthly: {
        price: 39,
        interval: "/month"
      },
      yearly: {
        price: 390,
        interval: "/year"
      }
    },
    features: [
      "50 Commercial Sites",
      "10 TB System Storage",
      "Team Collaboration",
      "API Access",
      "Advanced Security",
      "Priority Support"
    ],
    button: "Select Plan",
  },


  {
    title: "Enterprise",
    freeTrial: false,
    pricing: {
      monthly: {
        price: 89,
        interval: "/month"
      },
      yearly: {
        price: 890,
        interval: "/year"
      }
    },
    features: [
      "Unlimited Sites",
      "50 TB System Storage",
      "SSO Authentication",
      "Custom Integrations",
      "Advanced Security",
      "Dedicated Support"
    ],
    button: "Select Plan",
  },


  {
    title: "Ultimate",
    freeTrial: false,
    pricing: {
      monthly: {
        price: 179,
        interval: "/month"
      },
      yearly: {
        price: 1790,
        interval: "/year"
      }
    },
    features: [
      "Unlimited Everything",
      "Unlimited Storage",
      "White Label Platform",
      "Advanced API Access",
      "Dedicated Account Manager",
      "24/7 Premium Support"
    ],
    button: "Select Plan",
  }
];
</script>
<template>
  <div class="plans-container">
    <h2>Build the right plan for your team</h2>
    <div class="plan-cards-container">
      <PlanCard
        v-for="plan in planCards"
        :key="plan.title"
        :title="plan.title"
        :freeTrial="plan.freeTrial"
        :pricing="plan.pricing"
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
    gap: 45px 27px;
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
