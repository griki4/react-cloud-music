import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapper } from '@/views/discover/c-views/recommend/c-cpns/settle-singers/style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { formatPicUrl } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { artist } = useAppSelector((state) => {
    return {
      artist: state.recommend.settleArtist
    }
  }, shallowEqual)

  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻主播"
        moreLink="#/discover/artist"
        moreText="查看全部 &gt;"
      />
      <div className="singer-list">
        {artist.map((item) => {
          return (
            <a href="#/" key={item.id} className="item">
              <img src={formatPicUrl(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                <div className="desc">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
