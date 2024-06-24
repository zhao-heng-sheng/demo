let formatCurrency = (strings,...values)=>{
  console.log(strings,values)
  return 'xxx'
}
const price = 19.99
const discount = 0.1
const formattedPrice = formatCurrency`Price:${price} (20%)123123${discount}xxxx${'ccccc'}`
console.log(formattedPrice)