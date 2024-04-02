import {h} from 'vue'
export default{
  render() {
    return h('h1',{onClick:'alert(1)'},'hello world')
  },
}