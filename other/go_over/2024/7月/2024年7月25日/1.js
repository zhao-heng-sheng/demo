import shell from 'shelljs'
shell.exec('git pull')
shell.exec("git add .")
setInterval(() => {
  console.log('111')
},100000)