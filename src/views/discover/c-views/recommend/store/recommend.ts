import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getTopRankingData,
  getSettleArtist
} from '@/views/discover/c-views/recommend/service/recommend'

export const fetchRecommendBannerAction = createAsyncThunk(
  'banner',
  async (args, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannerAction(res.banners))
  }
)

//获取热门推荐数据
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(8)
    // console.log(res)
    dispatch(changeHotRecommendAction(res.result))
  }
)

//获取新碟上架数据
export const fetchNewAlbumAction = createAsyncThunk(
  'album',
  async (args, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
)

//获取榜单数据
const rankingIds = [19723756, 3779629, 2884035]
const promises: Promise<any>[] = []
export const fetchTopRankingAction = createAsyncThunk(
  'topRanking',
  async (args, { dispatch }) => {
    for (const i of rankingIds) {
      promises.push(getTopRankingData(i))
    }

    //保证数据返回时的数据是按固定顺序的
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeTopRanking(playlists))
    })
  }
)

export const fetchSettleArtistAction = createAsyncThunk(
  'settleArtist',
  async (args, { dispatch }) => {
    const res = await getSettleArtist(5)
    dispatch(changeSettleArtist(res.artists))
  }
)

interface RecommendState {
  banner: any[]
  hotRecommend: any[]
  newAlbum: any[]
  ranking: any[]
  settleArtist: any[]
}

const initialState: RecommendState = {
  banner: [],
  hotRecommend: [],
  newAlbum: [],
  ranking: [],
  settleArtist: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banner = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeTopRanking(state, { payload }) {
      state.ranking = payload
    },
    changeSettleArtist(state, { payload }) {
      state.settleArtist = payload
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeTopRanking,
  changeSettleArtist
} = recommendSlice.actions
export default recommendSlice.reducer
