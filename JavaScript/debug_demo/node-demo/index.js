const fs = require('fs/promises');
(async function(){
    const fileContent = await fs.readFile('./package.json',{
        encoding:'utf-8'
    })
    let a = 123
    console.log(a)
    await fs.writeFile('./package2.json',fileContent)
})()