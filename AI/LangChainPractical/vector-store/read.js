import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAIEmbeddings } from "@langchain/openai";
import "dotenv/config";
let directory = "./db/kongyiji";
let embeddings = new OpenAIEmbeddings({
    configuration: {
        baseURL: process.env.baseURL,
    },
});
let vectorstore = await FaissStore.load(directory, embeddings);
console.log(vectorstore);
let retriever = vectorstore.asRetriever(2);
let res = await retriever.invoke('茴香豆是做什么用的')
console.log(res)