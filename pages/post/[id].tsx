import { getArticleIds, getArticleInfoById } from 'lib/posts'
import { NextPage } from 'next'
import React from 'react'
type Props = {
  info: ArticleInfo
}
const articleShow: NextPage<Props> = (props) => {
  const { info } = props
  return (
    <div>
      <h1>{info.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: info.htmlContent }}></article>
    </div>
  )
}

export const getStaticPaths = async () => {
  const ids = await getArticleIds()
  console.log(ids)
  return {
    paths: ids.map((item) => ({ params: { id: item } })),
    fallback: false, // 没有对应文章, 显示 404, true 为执行代码
  }
}
export const getStaticProps = async (pathInfo: any) => {
  const id = pathInfo.params.id
  const info = await getArticleInfoById(id)
  return {
    props: {
      info,
    },
  }
}

export default articleShow
