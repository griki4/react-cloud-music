import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeMessage } from '@/store/features/counter'

function App() {
  const { counter, message } = useAppSelector((state) => {
    return {
      counter: state.counter.counter,
      message: state.counter.message
    }
  }, shallowEqual)

  const dispatch = useAppDispatch()
  function handleMessageChange() {
    dispatch(changeMessage('hhhhhhhhhh'))
  }

  return (
    <div>
      <div className="nav">
        <Link to="/discover">发现音乐/</Link>
        <Link to="/mine">我的音乐/</Link>
        <Link to="/focus">关注/</Link>
        <Link to="/download">下载</Link>
      </div>
      {/*路由加载阶段显示*/}
      <Suspense fallback="loading...">
        <div className="app">app: {useRoutes(routes)}</div>
      </Suspense>
      <h2>
        当前计数：{counter} 信息： {message}
        <button onClick={handleMessageChange}>点击修改信息</button>
      </h2>
    </div>
  )
}

export default App
