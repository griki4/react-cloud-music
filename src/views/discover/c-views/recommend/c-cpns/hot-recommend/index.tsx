import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
import { HotRecommendWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-recommend/style'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector((state) => {
    return {
      hotRecommend: state.recommend.hotRecommend
    }
  }, shallowEqual)
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title={'热门推荐'}
        keyword={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return <SongMenuItem key={item.id} itemData={item}></SongMenuItem>
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
