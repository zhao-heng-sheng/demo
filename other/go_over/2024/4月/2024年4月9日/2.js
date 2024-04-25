let obj = {
  num:0,
  next(){
    if(num<10) return {done:false,value:this.num++}
    return {done:true}
  },
}