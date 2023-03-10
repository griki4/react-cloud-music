import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRecommendBannerAction } from '@/views/discover/c-views/recommend/store/recommend'
import Swiper from '@/views/discover/c-views/recommend/c-cpns/swiper'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  //注意使用修改过的useAppDispatch
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendBannerAction())
  }, [])

  return (
    <RecommendWrapper>
      <Swiper></Swiper>
      <div className="content wrap-v2">
        <div className="leftSection">
          <HotRecommend />
          left
        </div>
        <div className="rightSection">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
