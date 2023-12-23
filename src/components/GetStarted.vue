<script setup></script>

<template>
  <div class="get-started">
    <div class="data-container">
      <h1>Make more time for the work that matters most</h1>
      <p>
        Create screens directly in Singleton or add your images from Sketch or
        Figma. You can even sync designs from your cloud storage!
      </p>
      <button>Get Started</button>
    </div>

    <img src="../assets/img/img1.svg" alt="girl thinking" />
  </div>
</template>

<style scoped lang="scss">
.get-started {
  display: flex;
  margin-top: 103px;
  justify-content: flex-start;
  max-width: 100vw;
  .data-container {
    text-align: start;
    margin-right: 200px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    h1 {
      color: #111;
      font-size: 72px;
      font-weight: 400;
      line-height: 78px;
      letter-spacing: -3.6px;
      max-width: 607px;
      width: 90%;
    }
    p {
      color: #b8b8b8;
      font-size: 22px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: -0.4px;
      max-width: 534px;
      width: 90%;
    }
    button {
      max-width: 255px;
      width: 90%;
      height: 50px;
      flex-shrink: 0;
      border-radius: 5px;
      background: #f8f8f8;
      border-radius: 5px;
      background: #6ac75a;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.36px;
      transition: 0.5s;
      &:hover {
        background: #fff;
        color: #6ac75a;
        border-color: #6ac75a;
        transform: scale(1.1);
      }
    }
  }

  img {
    max-width: 458.268px;
    width: 90%;
    height: 445.166px;
  }
}

@media screen and (max-width: 1365px) {
  .get-started {
    .data-container {
      margin-right: 100px;
    }
  }
}

@media screen and (max-width: 1165px) {
  .get-started {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .data-container {
      text-align: center;
      margin-right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5px;
      h1 {
        font-size: 60px;
        margin-bottom: 0;
      }
    }
  }
}
</style>
