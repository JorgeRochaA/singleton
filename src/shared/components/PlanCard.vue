>
<script setup>
//set props
const props = defineProps({
  tittle: String,
  price: Number,
  interval: String,
  features: Array[String],
  button: String,
});
</script>
<template>
  <div class="card-container">
    <h3>{{ tittle }}</h3>
    <div class="price-container">
      <span class="price">{{ price > 0 ? `$${price}` : "Free" }}</span>
      <span class="interval">{{ interval }}</span>
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
  height: 430px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #e1e4eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background: #111;
    cursor: pointer;
    transform: scale(1.1);
  }

  &:hover .price-container .price,
  &:hover .features-container a {
    color: white;
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

  .price-container {
    margin-top: 21px;
    .price {
      color: #111;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 45px; /* 93.75% */
      letter-spacing: -1.6px;
      transition: 0.5s;
    }
    .interval {
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
