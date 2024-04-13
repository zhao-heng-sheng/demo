
import {disciplines} from './data.js'
import {loadTopicListData} from './api.js'

(async()=>{
  let res = await loadTopicListData({courseId:disciplines[0].id,pageIndex:1})
  console.log(res)
})()