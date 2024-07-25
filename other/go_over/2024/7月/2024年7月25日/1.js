let shell = require("shelljs");
setInterval(() => {
  shell.exec("node --version");
}, 8000);
