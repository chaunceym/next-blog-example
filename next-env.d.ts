/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.jpg' {
  const value: string
  export default value
}
type ArticleInfo = {
  id: string
  title: string
  date: string
  content: string
  htmlContent: string
}
