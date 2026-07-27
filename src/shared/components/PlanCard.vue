<script setup>
import { ref } from 'vue';
import NumberFlow from '@number-flow/vue';

//set props
const props = defineProps({
  title: String,
  freeTrial: Boolean,
  pricing: Object,
  features: Array[String],
  button: String,
});

const selectedInterval = ref("monthly");

function changePricing(){
if(props.freeTrial) return;

 selectedInterval.value =
    selectedInterval.value === "monthly"
      ? "yearly"
      : "monthly";
}
</script>
<template>
  <div class="card-container">
    <h3>{{ title }}</h3>
      <div v-if="!props.freeTrial">
          <Vueform>
    <ToggleElement name="toggle" :labels="{ on: 'Yearly', off: 'Monthly' }" @change="changePricing()" class="toggle-price"></ToggleElement>
  </Vueform>
      </div>
    <div class="price-container">
     <NumberFlow
	:value="props.pricing[selectedInterval].price"
	:format="{ style: 'currency', currency: 'USD', trailingZeroDisplay: 'stripIfInteger' }"
	:suffix="props.pricing[selectedInterval].interval"
/>
    </div>
    <div class="features-container">
      <a v-for="feature in features" :key="feature">{{ feature }}</a>
    </div>
    <button class="button">{{ button }}</button>
  </div>
</template>
<style scoped lang="scss">
.card-container {
  color: black;
  width: 350px;
  max-width: 90vw;
  min-height: 430px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #e1e4eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background: #F8F8F8;
    cursor: pointer;
    // transform: scale(1.1);
  }

  &:hover button {
    color: white;
    background-color: #4fd1d9;
    border-color: #4fd1d9;
  }

  h3 {
    color: #b8b8b8;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 145.455% */
    letter-spacing: -0.4px;
    margin-top: 32px;
  }

:deep(.toggle-price .vf-toggle) {
  width: 110px;
  height: 36px;
}

:deep(.toggle-price .vf-toggle-handle) {
  width: 28px;
  height: 28px;
   transition:
    transform .3s cubic-bezier(.22,1,.36,1),
    top .3s cubic-bezier(.22,1,.36,1),
    left .3s cubic-bezier(.22,1,.36,1);
}

:deep(.toggle-price .vf-toggle-off .vf-toggle-handle) {
    top: 50%;
    left: 5%;
  transform: translateY(-50%);
}

:deep(.toggle-price .vf-toggle-on .vf-toggle-handle) {
top: 13%;
transform: translateX(-125%);
}

:deep(.toggle-price .vf-toggle-label) {
  width: 70%;
  font-size: 14px;
  font-weight: 600;
}

  .price-container {
    margin-top: 21px;

        number-flow-vue::part(left),number-flow-vue::part(number) {
 color: #111;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 45px; /* 93.75% */
      letter-spacing: -1.6px;
      transition: 0.5s;
}

    number-flow-vue::part(suffix) {
 color: #b8b8b8;
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 145.455% */
      letter-spacing: -0.4px;
}

  }
  .features-container {
    min-height: 258px;
    list-style: none;
    margin-top: 45px;
    margin-bottom: 35px;
    gap: 18px;
    display: flex;
    flex-direction: column;
    a {
      color: #111;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
      letter-spacing: -0.4px;
      text-align: center;
      transition: 0.5s;
    }
  }
  button {
    margin-bottom: 25px;
    width: 290px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #e1e4eb;
    background-color: white;
    color: #4fd1d9;
    transition: 0.5s;
  }
}
</style>
