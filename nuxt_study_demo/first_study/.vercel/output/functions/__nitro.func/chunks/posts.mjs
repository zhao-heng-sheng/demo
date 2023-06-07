import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), "content");
const posts = defineEventHandler((event) => {
  const fileNames = fs.readdirSync(postsDir);
  console.log(fileNames);
  console.log(postsDir);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterInfo = matter(fileContents);
    const fileInfo = fs.statSync(fullPath);
    return {
      id,
      title: matterInfo.data.title,
      date: fileInfo.ctime
    };
  });
  return posts.sort((a, b) => a.date < b.date ? 1 : -1);
});

export { posts as default };
//# sourceMappingURL=posts.mjs.map
