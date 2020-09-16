import path from 'path'
import fs, { promises as fsPromise } from 'fs'
import matter from 'gray-matter'
export const readFileData = async () => {
  const rootDir = process.cwd()
  const markdownDir = path.join(rootDir, 'markdown')
  const fileNameArr = await fsPromise.readdir(markdownDir)
  return fileNameArr.map((filename) => {
    const id = filename.replace(/.md$/g, '')
    const fullName = path.join(markdownDir, filename)
    const articleContent = fs.readFileSync(fullName, 'utf-8')
    const {
      data: { title, date },
      content,
    } = matter(articleContent)
    return { id, title, date }
  })
}
