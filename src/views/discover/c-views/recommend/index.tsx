import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRecommendBannerAction } from '@/views/discover/c-views/recommend/store/recommend'
import Swiper from '@/views/discover/c-views/recommend/c-cpns/swiper'

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
    <div>
      <Swiper />
      <div>Recommend</div>
    </div>
  )
}

export default memo(Recommend)
