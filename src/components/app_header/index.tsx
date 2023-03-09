import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AppHeaderWrapper, HeaderLeft } from '@/components/app_header/style'

import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  //根据类型确定需要返回的元素
  function showItem(item: any) {
    if (item.type === 'path') {
      return <Link to={item.link}>{item.title}</Link>
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        {/*<Link to="/discover">发现音乐/</Link>*/}
        {/*<Link to="/mine">我的音乐/</Link>*/}
        {/*<Link to="/focus">关注/</Link>*/}
        {/*<Link to="/download">下载</Link>*/}
      </div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
