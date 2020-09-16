import Head from 'next/head'
import React from 'react'
import '../style/global.css'
// 本页面是根组件, 可以在这里进行一些全局配置
// 页面切换时 app 不会被销毁, 里面的组件会被销毁, 可以在这里维护一些全局状态
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>myBlog</title>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
