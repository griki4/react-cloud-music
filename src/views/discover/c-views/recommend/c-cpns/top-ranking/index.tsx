import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopRankingItem from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { ranking } = useAppSelector((state) => {
    return {
      ranking: state.recommend.ranking
    }
  }, shallowEqual)

  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {ranking.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
