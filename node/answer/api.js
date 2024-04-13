import axios from "./axios.js";
import path from "path";
import { JsonDB, Config } from "node-json-db";
const __dirname = path.dirname(import.meta.url);
let db = new JsonDB(new Config("bank", true, true, "/"));
/**
 * 作业列表
  @params {Object} params
  @params {String} params.courseId 课程id
  @params {String} params.pageIndex 页码
*/
export let loadTopicListData = (params) => {
    return axios.post("https://www.learnin.com.cn/app/user/student/course/space/topic/appStudentCourseTopic/loadTopicListData", params);
};
/**
 * 习题列表
  @params {Object} params
  @params {String} params.courseId 课程id
  @params {String} params.topicId 作业id
*/
export let loadTopicData = (params) => {
    return axios.post("https://www.learnin.com.cn/app/user/student/course/space/topic/appStudentCourseTopic/loadTopicData", params);
};

//查询试题
export let getQuestion = async (id) => {
    let addr = `/questions/${id}`;
    if (db.exists(addr)) return db.getData(addr);
    return null;
};

// 保存试题
export let saveQuestion = (params) => {
    return db.push(`/questions/${params.id}`, params);
};
