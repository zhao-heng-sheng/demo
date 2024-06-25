// import {} from '@wcferry/ws'
import pkg from '@wcferry/core';
let {Wcferry} = pkg;

const client = new Wcferry({ port: 10086 });
client.start();

const isLogin = client.isLogin();

// start receiving message
const off = client.on((msg) => {
    console.log('received message:', msg);
});
