let dfr = $.ajax({
  method: "get",
  url: "http://localhost/phpCode/test.php"
});
dfr
  .done(res => {
    console.log(res);
  })
  .fail(err => {
    console.log(err);
  });
// dfr
//   .then(
//     res => {
//       console.log(res);//  ok
//     },
//     err => {
//       console.log(err);
//     }
//   )
//   .then(res => {
//     console.log(res);//undefined
//   });
