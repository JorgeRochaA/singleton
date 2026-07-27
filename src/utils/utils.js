const images = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

export const getImageUrl = (path) => {
  return images[`../assets/${path}`];
};