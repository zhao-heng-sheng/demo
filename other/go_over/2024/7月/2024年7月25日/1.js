import shell from 'shelljs'
let chain = shell.exec('git pull')
chain.exec('git add .')
chain.exec('git commit -m "update"')
setInterval(() => {
  console.log('111')
},100000)