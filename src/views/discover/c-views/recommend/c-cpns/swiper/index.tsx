import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import {
  BannerSwiper,
  BannerLeft,
  BannerRight,
  BannerControl
} from '@/views/discover/c-views/recommend/c-cpns/swiper/style'

interface IProps {
  children?: ReactNode
}

const Swiper: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  //请求轮播图的数据
  const { banner } = useAppSelector((state) => {
    return {
      banner: state.recommend.banner
    }
  }, shallowEqual)

  //获取按钮元素的TS写法
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  function handleChange(current: number) {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  //动态设置背景图片
  let bgImgUrl = banner[currentIndex]?.imageUrl
  if (bgImgUrl) {
    //添加模糊效果
    bgImgUrl = bgImgUrl + '?imageView&blur=40x20'
  }
  console.log(bgImgUrl)

  return (
    <BannerSwiper
      style={{
        background: `url(${bgImgUrl}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            effect="fade"
            afterChange={handleChange}
          >
            {banner.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} className="image" alt="" />
                </div>
              )
            })}
          </Carousel>
          {/*          <ul className="dots">
            {banner.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>*/}
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          {/*绑定轮播图控制事件*/}
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerSwiper>
  )
}

export default memo(Swiper)
