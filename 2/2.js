function getimg(src) {
  return new Promise((rel, rej) => {
    let img = document.createElement("img");
    img.onload = () => {
      rel(img);
    };
    img.onerror = () => {
      rej();
    };
    img.src = src;
  });
}
let src =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
let img = getimg(src);
img.then(
  img => {
    document.body.append(img);
  },
  () => {
    console.log("error");
  }
);
