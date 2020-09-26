import { useArticleInfo } from 'hooks/useArticleInfo'
import { NextPage } from 'next'
const PostIndex: NextPage = () => {
  const { isLoading, isEmpty, articleInfo } = useArticleInfo()
  return (
    <div>
      {isLoading ? (
        <div>正在加载</div>
      ) : isEmpty ? (
        <div>暂时没有内容</div>
      ) : (
        <ul>
          {articleInfo.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PostIndex
