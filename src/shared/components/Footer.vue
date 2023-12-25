<script setup>
import { getImageUrl } from "../../utils/utils";
const links = [
  {
    title: "Singleton Inc.",
    links: [],
  },
  {
    title: "Join",
    links: [
      {
        name: "Our Community",
        link: "",
      },
      {
        name: "Our Talent",
        link: "",
      },
      {
        name: "Our Partners",
        link: "",
      },
      {
        name: "Our Sponsors",
        link: "",
      },
    ],
  },
  {
    title: "Learn",
    links: [
      {
        name: "Our Courses",
        link: "",
      },
      {
        name: "The Programme",
        link: "",
      },
      {
        name: "The Course",
        link: "",
      },
      {
        name: "F.A.Q.",
        link: "",
      },
    ],
  },
  {
    title: "Hire",
    links: [
      {
        name: "Our Talent",
        link: "",
      },
      {
        name: "Freelancers",
        link: "",
      },
      {
        name: "Trainees",
        link: "",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        name: "Our Mission",
        link: "",
      },
      {
        name: "Our History",
        link: "",
      },
      {
        name: "Our Culture",
        link: "",
      },
      {
        name: "The Team",
        link: "",
      },
    ],
  },
  {
    title: "Blog",
    links: [
      {
        name: "Business Stories",
        link: "",
      },
      {
        name: "Digital Mums",
        link: "",
      },
      {
        name: "Learning",
        link: "",
      },
      {
        name: "",
        link: "Social Media",
      },
    ],
  },
];
const socialMedias = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jorge-rocha-arauz-958005210",
    icon: "img/footer/linkedin.svg",
  },
  {
    name: "Twitter",
    link: "https://www.linkedin.com/in/jorge-rocha-arauz-958005210",
    icon: "img/footer/twitter.svg",
  },
  {
    name: "Youtube",
    link: "https://www.linkedin.com/in/jorge-rocha-arauz-958005210",
    icon: "img/footer/youtube.svg",
  },
];
</script>
<template>
  <div class="footer">
    <div class="links-container">
      <div class="links-column" v-for="(link, index) in links" :key="index">
        <h3>{{ link.title }}</h3>
        <div class="ul">
          <div class="li" v-for="(link, index) in link.links" :key="index">
            <a :href="link.link">{{ link.name }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bar"></div>
    <div class="logo-and-social-container">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--emojione"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="32" cy="32" r="30" fill="#4fd1d9"></circle>
        <path
          d="M25.8 37.6c.2 1.3.6 2.3 1.1 3c1 1.2 2.7 1.8 5.2 1.8c1.5 0 2.6-.2 3.6-.5c1.7-.6 2.6-1.7 2.6-3.4c0-1-.4-1.7-1.3-2.2c-.8-.5-2.2-1-4-1.4l-3.1-.7c-3.1-.7-5.2-1.4-6.4-2.2c-2-1.3-2.9-3.4-2.9-6.3c0-2.6 1-4.8 2.9-6.5c1.9-1.7 4.7-2.6 8.4-2.6c3.1 0 5.7.8 7.9 2.4c2.2 1.6 3.3 4 3.4 7.1h-5.8c-.1-1.7-.9-3-2.3-3.7c-1-.5-2.2-.7-3.6-.7c-1.6 0-2.9.3-3.8.9s-1.4 1.5-1.4 2.6c0 1 .5 1.8 1.4 2.3c.6.3 1.9.7 3.9 1.2l5.1 1.2c2.2.5 3.9 1.2 5 2.1c1.7 1.4 2.6 3.3 2.6 5.9c0 2.7-1 4.9-3.1 6.6c-2 1.8-4.9 2.6-8.7 2.6c-3.8 0-6.8-.9-9-2.6c-2.4-1.5-3.5-3.9-3.5-6.9h5.8"
          fill="#ffffff"
        ></path>
      </svg>
      <div class="socials-container">
        <a
          :href="social.link"
          target="_blank"
          v-for="(social, index) in socialMedias"
          :key="index"
        >
          <img :src="getImageUrl(social.icon)" :alt="social.name" />
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.footer {
  font-family: "Poppins", sans-serif;
  background: #111;
  width: 100vw;
  min-height: 480px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .links-container {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 116px;
    margin-bottom: 52px;
    .links-column {
      h3 {
        color: #fff;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 155.556% */
        letter-spacing: -0.4px;
        text-align: left;
      }
      .ul {
        list-style: none;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .li {
          margin: 0;

          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px; /* 177.778% */
          letter-spacing: -0.4px;
          a {
            color: #888888;
            transition: 0.5s;
            &:hover {
              color: #4fd1d9;
            }
          }
        }
      }
    }
  }

  .bar {
    opacity: 0.15;
    background: #e1e4eb;
    width: 75%;
    height: 1px;
    flex-shrink: 0;
  }

  .logo-and-social-container {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 66px;
    .socials-container {
      display: flex;
      align-items: center;
      gap: 14px;

      a {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .footer {
    height: 675px;

    .links-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 880px) {
  .footer {
    height: 900px;

    .links-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 464px) {
  .footer {
    height: 1200px;

    .links-container {
      place-items: center;
      grid-template-columns: repeat(1, 1fr);
      .links-column {
        h3 {
          text-align: center;
        }
        .ul {
          text-align: center;
        }
      }
    }
  }
}
</style>
