//创建一个Mvvm构造函数
// 用es6的方法将options赋一个初始值，防止没传，等同于options || {};
function Mvvm(options = {}){
  // vm.$options  Vue上是将所有属性挂载到上面
  // 我们也将所有属性挂载到$options
  this.$options =options;
  // this._data也和Vue一样
  let data = this._data = this.$options.data;
  
  // 数据劫持
  observe(data);

  // 数据代理   this代理了this._data
  for(let key in data){
    Object.defineProperty(this,key,{
      configurable:true,
      get(){
        return this._data[key];   //如this.a={b:1}
      },
      set(newVal){
        this._data[key] = newVal;
      }
    })
  }
}

function Observe(data){
  // 所谓数据劫持就是给对象增加 get，set
  // 先遍历一遍对象
  for(let key in data){ //把data属性通过defineProperty的方式定义属性
    let val = data[key];
    observe(val);     //递归继续向下找，实现深度的数据劫持
    Object.defineProperty(data,key,{
      configurable: true,
      get(){
        return val;
      },
      set(newVal){  //更改值得时候
        if(val===newVal){ 
          return;
        }
        val = newVal;   //如果以后再获取值(get)的时候，将刚才设置的值再返回去
        observe(newVal);  //当设置为新值后，需要把新值再去定义成属性
      }
    })

  }
}

// 外面再写一个函数
// 不用每次调用都写new
// 也方便递归调用
function observe(data){
  // 如果不是对象直接return掉
  // 防止递归溢出
  if(!data||typeof data !=='object') return;
  return new Observe(data);
}
