import { JsonDB, Config } from 'node-json-db';
var db = new JsonDB(new Config("myDataBase", true, false, '/'));
// db.push("/test1","super test");
db.getData("/test1"); //super test
// console.log(res);