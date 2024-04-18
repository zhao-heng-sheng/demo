import { JsonDB, Config } from 'node-json-db';
var db = new JsonDB(new Config("myDataBase", true, false, '/'));
// db.push("/test1","super test");
// db.getData("/test1"); //super test
// console.log(res);
db.push('/xx/adf',{a:1,b:2})
db.push('/xx/dghfg',{a:2,b:2})