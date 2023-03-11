import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/newalbum/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbum } = useAppSelector((state) => {
    return {
      newAlbum: state.recommend.newAlbum
    }
  })

  function preClick() {
    bannerRef.current?.prev()
  }
  function nextClick() {
    bannerRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={preClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} speed={1000} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                      return (
                        <NewAlbumItem
                          key={album.id}
                          album={album}
                        ></NewAlbumItem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={nextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
