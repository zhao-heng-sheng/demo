import {activeWindow} from 'get-windows'
setInterval(()=>{
    activeWindow().then((window)=>{
        console.log(window)
    })
},5000)