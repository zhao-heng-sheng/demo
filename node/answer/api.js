import axios from "./axios.js"
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
