import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/store'

function App() {
  return <div className="app">{useRoutes(routes)}</div>
}

export default App
