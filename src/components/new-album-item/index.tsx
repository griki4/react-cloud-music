import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from '@/components/new-album-item/style'
import { formatPicUrl } from '@/utils/format'

interface IProps {
  children?: ReactNode
  album: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { album } = props
  return (
    <AlbumItemWrapper>
      <div className="album-img">
        <img src={formatPicUrl(album.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_covor"></a>
      </div>
      <div className="album-info">
        <div className="name">{album.name}</div>
        <div className="artist">{album.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
