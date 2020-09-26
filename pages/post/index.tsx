import { NextPage } from 'next'
import { readFileData } from 'lib/posts'
import React from 'react'
import Link from 'next/link'
type Props = {
  articleInfo: ArticleInfo[]
}
const PostIndex: NextPage<Props> = (props) => {
  const { articleInfo } = props
  return (
    <div>
      <h1>my blog</h1>
      <hr />
      {articleInfo.map((p) => (
        <div key={p.id}>
          <Link href={`/post/[id]`} as={`/post/${p.id}`}>
            <a>{p.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostIndex

export const getStaticProps = async () => {
  const articleInfo = await readFileData()
  return { props: { articleInfo: JSON.parse(JSON.stringify(articleInfo)) } }
}
