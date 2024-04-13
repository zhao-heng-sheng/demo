
import {disciplines} from './data.js'
import {loadTopicListData,saveAnswer,getAnswer} from './api.js'

saveAnswer({a:3,c:2})
// (async()=>{
//   let res = await loadTopicListData({courseId:disciplines[0].id,pageIndex:1})
//   console.log(res)
// })()