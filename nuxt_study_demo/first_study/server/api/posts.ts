import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
const postsDir = path.join(process.cwd(), 'content');

export default defineEventHandler((event) => {
    const fileNames = fs.readdirSync(postsDir);
    console.log(fileNames)
    console.log(postsDir)
    const posts = fileNames.map((fileName: string) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterInfo = matter(fileContents);
        const fileInfo = fs.statSync(fullPath)
        return {
            id,
            title:matterInfo.data.title,
            date:fileInfo.ctime
        }
    })
    return posts.sort((a: { date: number; },b: { date: number; })=>a.date<b.date?1:-1)
})