import { useEffect, useState } from 'react'
import axios from 'axios'

export const useArticleInfo = () => {
  const [articleInfo, setArticleInfo] = useState<ArticleInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(() => {
    axios.get('/api/v1/post').then((response) => {
      if (response.data.length === 0) {
        setIsEmpty(true)
      }
      setArticleInfo(response.data)
      setIsLoading(false)
    })
  }, [])
  return { articleInfo, setArticleInfo, isLoading, setIsLoading, setIsEmpty, isEmpty }
}
