import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnchorWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-anchors/style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { HotAnchorsData } from '@/assets/data/local_data'
import { formatPicUrl } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const HotAnchors: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <div className="anchor-list">
        {HotAnchorsData.map((item) => {
          return (
            <div className="item" key={item.name}>
              <a href="#" className="image">
                <img src={formatPicUrl(item.picUrl, 40)} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchors)
