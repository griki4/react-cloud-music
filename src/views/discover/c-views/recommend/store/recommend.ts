import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '@/views/discover/c-views/recommend/service/recommend'

export const fetchRecommendBannerAction = createAsyncThunk(
  'banner',
  async (args, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannerAction(res.banners))
  }
)

interface RecommendState {
  banner: any[]
}

const initialState: RecommendState = {
  banner: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banner = payload
    }
  }
})

export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
