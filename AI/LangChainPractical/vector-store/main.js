import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as openai from "langchain/openai";
import * as faiss from "faiss-node";
let { FaissStore } = faiss;
let { OpenAIEmbeddings } = openai;
const run = async () => {
    const loader = new TextLoader("../Embedding/data/kong.txt");
    const docs = await loader.load();
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
    });
    const splitDocs = await splitter.splitDocuments(docs);

    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await FaissStore.fromDocuments(splitDocs, embeddings);
    const directory = "../db/kongyiji";
    await vectorStore.save(directory)
};
run();