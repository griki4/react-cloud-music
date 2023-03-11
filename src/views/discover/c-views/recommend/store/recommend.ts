import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum
} from '@/views/discover/c-views/recommend/service/recommend'

export const fetchRecommendBannerAction = createAsyncThunk(
  'banner',
  async (args, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannerAction(res.banners))
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(8)
    // console.log(res)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  'album',
  async (args, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
)

interface RecommendState {
  banner: any[]
  hotRecommend: any[]
  newAlbum: any[]
}

const initialState: RecommendState = {
  banner: [],
  hotRecommend: [],
  newAlbum: []
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
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumAction
} = recommendSlice.actions
export default recommendSlice.reducer
