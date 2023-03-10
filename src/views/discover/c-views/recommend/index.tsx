import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchRecommendBannerAction,
  fetchSettleArtistAction,
  fetchTopRankingAction
} from '@/views/discover/c-views/recommend/store/recommend'

import Swiper from '@/views/discover/c-views/recommend/c-cpns/swiper'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommend/c-cpns/newalbum'
import TopRanking from '@/views/discover/c-views/recommend/c-cpns/top-ranking'
import UserLogin from '@/views/discover/c-views/recommend/c-cpns/user-login'
import SettleSinger from '@/views/discover/c-views/recommend/c-cpns/settle-singers'
import HotAnchors from '@/views/discover/c-views/recommend/c-cpns/hot-anchors'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  //注意使用修改过的useAppDispatch
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendBannerAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchTopRankingAction())
    dispatch(fetchSettleArtistAction())
  }, [])

  return (
    <RecommendWrapper>
      <Swiper></Swiper>
      <div className="content wrap-v2">
        <div className="leftSection">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="rightSection">
          <UserLogin />
          <SettleSinger />
          <HotAnchors />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
