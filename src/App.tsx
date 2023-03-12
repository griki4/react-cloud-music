import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from '@/components/app_header'
import AppFooter from '@/components/app_footer'

function App() {
  return (
    <div>
      <AppHeader />
      {/*路由加载阶段显示*/}
      <Suspense fallback="loading...">
        <div className="app">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
