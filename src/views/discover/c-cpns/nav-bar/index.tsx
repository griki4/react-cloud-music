import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { DiscoverMenu } from '@/assets/data/local_data'
import { DiscoverWrapper } from '@/views/discover/c-cpns/nav-bar/style'

interface IProps {
  children?: ReactNode
}

const NavWrapper: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="nav wrap-v1">
        {DiscoverMenu.map((item) => {
          return (
            <div key={item.link} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </DiscoverWrapper>
  )
}

export default memo(NavWrapper)
