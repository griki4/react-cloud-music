import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

//使用useSelector和useDispatch的方法，具有一般适用价值
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
//直接使用useAppSelector就可以推断出state的类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type DispatchType = typeof store.dispatch
//修改useDispatch
export const useAppDispatch: () => DispatchType = useDispatch

export default store
