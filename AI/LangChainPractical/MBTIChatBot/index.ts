import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatPromptTemplate } from "langchain/prompts";
import { RunnableSequence } from "langchain/runnables";
import { StringOutputParser } from "langchain/schema/output_parser";

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "你是一个共情能力非常强的心理医生，并且很了解MBTI（迈尔斯-布里格斯性格类型指标)的各种人格类型，你的任务是根据来访者的 MBTI 和问题，给出针对性的情感支持，你的回答要富有感情、有深度和充足的情感支持，引导来访者乐观积极面对问题"],
  ["human", "用户的 MBTI 类型是{type}, 这个类型的特点是{info}, 他的问题是{question}"],
]);

const model = new ChatOpenAI();
const mbtiChain = RunnableSequence.from([prompt, model, new StringOutputParser()]);
