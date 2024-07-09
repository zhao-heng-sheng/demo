import { DynamicStructuredTool } from "langchain/tools";
import { z } from "zod";
import { readFileSync } from "fs";
import path from "path";
const mbtiInfoBuffer = readFileSyn(path.join(__dirname, "./mbti-info.json"));
const mbtiInfo = JSON.parse(mbtiInfoBuffer.toString());
const mbtiList = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"] as [string, ...string[]];
const mbtiTool = new DynamicStructuredTool({
  name: "get-mbti-chat",
  schema: z.object({
    type: z.enum(mbtiList).describe("用户的 MBTI 类型"),
    question: z.string().describe("用户的问题"),
  }),
  func:async ({type,question})=> {
    const info = mbtiInfo[type]
    const res = 
  }
});
