const mysql = require("mysql");
let config = {
  host: "127.0.0.1",
  user: "root",
  password: "wyswill4290",
  database: "test"
};

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wyswill4290",
  port: "3306",
  database: "test"
});
db.connect();
let sqlstr = "select * from user";
db.query(sqlstr, (err, res, fildes) => {
  if (err) console.log(err);
  // for (let val of res) {
  //   console.log(`${val.name}====>${val.pwd}`);

  // }
  console.log(JSON.stringify(res));
});
