let keys = [

]
let text = ''


function replace(text,keys,reg){
    let result = text
    keys.forEach((key)=>{
        result = result.replace(key,`<span class="red">${key}</span>`)
    })
    return result
}