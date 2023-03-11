import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from '@/components/song-menu-item/style'
import { formatCount, formatPicUrl } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <MenuItemWrapper>
      <div className="cover-top">
        {/*顶部蒙版*/}
        <img src={formatPicUrl(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
