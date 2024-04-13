import axios from "./axios.js"
import path from 'path'
import { JsonDB, Config } from 'node-json-db';
const __dirname = path.dirname(import.meta.url);
let db = new JsonDB(new Config('bank', true, true, '/'));
/**
 * 作业列表
  @params {Object} params
  @params {String} params.courseId 课程id
  @params {String} params.pageIndex 页码
*/
export let loadTopicListData = (params)=>{
  return axios.post('https://www.learnin.com.cn/app/user/student/course/space/topic/appStudentCourseTopic/loadTopicListData',params)
}
/**
 * 习题列表
  @params {Object} params
  @params {String} params.courseId 课程id
  @params {String} params.topicId 作业id
*/
export let loadTopicData = (params)=>{
  return axios.post('https://www.learnin.com.cn/app/user/student/course/space/topic/appStudentCourseTopic/loadTopicData',params)
}

//查询db答案
export let getAnswer = (params)=>{
  // console.log('getAnswer',params);
  return db.getData(`/`)
}

// 保存答案到db
export let saveAnswer = (params)=>{
  console.log('saveAnswer',params);
  return db.push(`/answer[]`,params)
}