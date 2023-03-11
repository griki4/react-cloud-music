import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { formatPicUrl } from '@/utils/format'
import { TopRankingItemWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item/style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData
  return (
    <TopRankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatPicUrl(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_covor"></a>
        </div>
        <div className="info">
          <button className="sprite_02 btn play"></button>
          <button className="sprite_02 btn favor"></button>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部&gt;</a>
      </div>
    </TopRankingItemWrapper>
  )
}

export default memo(TopRankingItem)
