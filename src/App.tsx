import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeMessage } from '@/store/features/counter'
import AppHeader from '@/components/app_header'
import AppFooter from '@/components/app_footer'

function App() {
  const { counter, message } = useAppSelector((state) => {
    return {
      counter: state.counter.counter,
      message: state.counter.message
    }
  }, shallowEqual)

  const dispatch = useAppDispatch()
  function handleMessageChange() {
    dispatch(changeMessage('芜湖 起飞！'))
  }

  return (
    <div>
      <AppHeader />
      {/*路由加载阶段显示*/}
      <Suspense fallback="loading...">
        <div className="app">app: {useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <h2>
        当前计数：{counter} 信息： {message}
        <button onClick={handleMessageChange}>点击修改信息</button>
      </h2>
    </div>
  )
}

export default App
