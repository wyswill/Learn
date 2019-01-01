let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("ok");
  }
};
xhr.open("get", "http://localhost/phpCode/day4/1.php", true);
xhr.send(null);
setTimeout(() => {
  console.log("b");
}, 1000);
setTimeout(() => {
  console.log("c");
}, 0);
console.log("d");
