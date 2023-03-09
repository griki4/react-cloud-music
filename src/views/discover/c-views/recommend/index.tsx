import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<any[]>([])

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      Recommend
      {banners.map((item, index) => {
        return <li key={index}>{item.imageUrl}</li>
      })}
    </div>
  )
}

export default memo(Recommend)
