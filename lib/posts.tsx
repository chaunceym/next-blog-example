import path from 'path'
import fs, { promises as fsPromise } from 'fs'
import matter from 'gray-matter'
import marked from 'marked'

const rootDir = process.cwd()
const markdownDir = path.join(rootDir, 'markdown')
export const readFileData = async () => {
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

export const getArticleInfoById = (id: string) => {
  const fullName = path.join(markdownDir, `${id}.md`)
  const articleContent = fs.readFileSync(fullName, 'utf-8')
  const {
    data: { title, date },
    content,
  } = matter(articleContent)
  const htmlContent = marked(content)
  return JSON.parse(JSON.stringify({ id, title, date, content, htmlContent }))
}

export const getArticleIds = async () => {
  const fileNameArr = await fsPromise.readdir(markdownDir)
  return fileNameArr.map((fileName) => fileName.replace(/.md$/g, ''))
}
