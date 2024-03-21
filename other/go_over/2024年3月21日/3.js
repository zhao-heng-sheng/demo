let hanzi = (val)=>({
  map:fn=>hanzi(fn(val)),
  valueOf:()=>val
})