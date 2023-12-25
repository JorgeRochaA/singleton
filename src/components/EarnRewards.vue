<script setup>
import { getImageUrl } from "../utils/utils";
</script>
<template>
  <div class="earn-rewards-container">
    <h2>Invite friends & earn rewards</h2>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <g clip-path="url(#clip0_5_50)">
          <path
            d="M14 0C6.26812 0 0 6.26801 0 14C0 21.732 6.26812 28 14 28C21.7319 28 28 21.732 28 14C28 6.26801 21.7319 0 14 0ZM18.8388 14.7421L11.8387 19.1171C11.6971 19.2055 11.5361 19.25 11.375 19.25C11.2291 19.25 11.083 19.2137 10.9507 19.1402C10.6726 18.986 10.5 18.6933 10.5 18.375V9.625C10.5 9.30672 10.6726 9.01403 10.9507 8.85981C11.2289 8.70472 11.569 8.71412 11.8387 8.88289L18.8388 13.2579C19.0945 13.4181 19.25 13.6984 19.25 14C19.25 14.3016 19.0945 14.5819 18.8388 14.7421Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_50">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs></svg
      >Play Introduction Video
    </button>

    <div class="illustrations">
      <div class="illustrations-container-1">
        <img
          :src="getImageUrl('img/earn-rewards/phone.svg')"
          alt="illustration-1"
        />
      </div>
      <div class="illustrations-container-2">
        <img
          :src="getImageUrl('img/earn-rewards/keyfolder.svg')"
          alt="illustration-1"
        />
      </div>
    </div>

    <p>
      Create screens directly in Singleton or add your images from Sketch or
      Figma. You can even sync designs from your cloud storage!
    </p>
  </div>
</template>
<style scoped lang="scss">
.earn-rewards-container {
  font-family: "Poppins", sans-serif;
  margin-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 979px;

    color: #111;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px; /* 112.5% */
    letter-spacing: -3px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #f8f8f8;
    border-radius: 5px;
    background: #4fd1d9;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.36px;
    transition: 0.5s;
    margin: auto;
    &:hover {
      background: #fff;
      color: #4fd1d9;
      border-color: #4fd1d9;
      transform: scale(1.1);
    }
    &:hover svg g path {
      fill: #4fd1d9;
    }
  }

  .illustrations {
    margin-top: 72px;
    display: flex;
    column-gap: 28px;
    .illustrations-container-1 {
      width: 350px;
      height: 540px;
      flex-shrink: 0;
      background: #f8f8f8;
    }
    .illustrations-container-2 {
      width: 730px;
      height: 540px;
      flex-shrink: 0;
      background: #f8f8f8;
    }

    .illustrations-container-1,
    .illustrations-container-2 {
      display: grid;
      place-items: center;
      border-radius: 15px;
    }

    .illustrations-container-1 img,
    .illustrations-container-2 img {
      max-height: 540px;
    }
  }
  p {
    width: 752px;
    color: #b8b8b8;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 145.455% */
    letter-spacing: -0.4px;
    margin: auto;
    margin-top: 53px;
  }
}

@media screen and (max-width: 1200px) {
  .earn-rewards-container {
    font-family: "Poppins", sans-serif;
    margin-bottom: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      max-width: 90vw;
    }

    .illustrations {
      margin-top: 72px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      row-gap: 28px;
      column-gap: 0;
      .illustrations-container-1 {
        height: 540px;
        width: 730px;
        max-width: 80vw;
        flex-shrink: 0;
        background: #f8f8f8;
      }
      .illustrations-container-2 {
        height: 540px;
        width: 730px;
        max-width: 80vw;
        flex-shrink: 0;
        background: #f8f8f8;
      }

      .illustrations-container-1,
      .illustrations-container-2 {
        display: grid;
        place-items: center;
        border-radius: 15px;
      }

      .illustrations-container-1 img,
      .illustrations-container-2 img {
        max-height: 540px;
        width: 100%;
      }
    }
    p {
      width: 752px;
      max-width: 85vw;
      color: #b8b8b8;
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 145.455% */
      letter-spacing: -0.4px;
      margin: auto;
      margin-top: 53px;
    }
  }
}
</style>
