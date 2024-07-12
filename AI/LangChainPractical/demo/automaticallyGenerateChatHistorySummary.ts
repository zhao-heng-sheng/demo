import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { ChatMessageHistory } from "langchain/stores/message/in_memory";
import { RunnableSequence } from "@langchain/core/runnables";
import { RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { getBufferString } from "@langchain/core/messages";
import { load } from "dotenv";
const env = await load();
const process = { env };
// 摘要model
var summaryModel = new ChatOpenAI({
  configuration: {
    baseURL: process.env.baseURL,
  },
});
var summaryPrompt = ChatPromptTemplate.fromTemplate(`
Progressively summarize the lines of conversation provided, adding onto the previous summary retu
Current summary: {summary}
New lines of conversation: {new_lines}
New summary:
`);
var summaryChain = RunnableSequence.from([summaryPrompt, summaryModel, new StringOutputParser()]);
var newSummary = await summaryChain.invoke({
  summary: "",
  new_lines: "我18岁",
});
await summaryChain.invoke({
  summary: newSummary,
  new_lines: "我是男的",
});
// 聊天model
var chatModel = new ChatOpenAI({
  configuration: {
    baseURL: process.env.baseURL,
  },
});
var chatPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful assistant. Answer all questions to the best of your ability.
    Here is the chat history summary:     {history_summary}
    `,
  ],
  ["human", "{input}"],
]);
var summary = "";
var history = new ChatMessageHistory();
var chatChain = RunnableSequence.from([
  {
    input: new RunnablePassthrough({
      func: (input) => history.addUserMessage(input),
    }),
  },
  RunnablePassthrough.assign({
    history_summary: () => summary,
  }),
  chatPrompt,
  chatModel,
  new StringOutputParser(),
  new RunnablePassthrough({
    func: async (input) => {
      history.addAIChatMessage(input);
      const messages = await history.getMessages();
      const new_lines = getBufferString(messages);
      const newSummary = await summaryChain.invoke({
        summary,
        new_lines,
      });
      history.clear();
      summary = newSummary;
    },
  }),
]);
let res = await chatChain.invoke("我现在饿了");
console.log(res);
