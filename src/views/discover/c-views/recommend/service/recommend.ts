import hyRequest from '@/service'

export function getBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return hyRequest.get({
    url: '/album/newest'
  })
}

export function getTopRankingData(id: number) {
  return hyRequest.get({
    url: `/playlist/detail?id=${id}`
  })
}

export function getSettleArtist(limit = 30) {
  return hyRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
