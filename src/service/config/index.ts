//1.手动切换生产和开发环境
export const BASE_URL1 = 'http://codercba.com:9002'
export const TIME_OUT1 = 10000

//2.依赖当前环境 开发环境：development；生产环境：production
// let base = ''
// if(process.env.NODE_ENV === 'development'){
//   base =
// }else {
//   base =
// }

//3.新建.env.production/development文件并根据条件动态加载
// console.log(process.env.REACT_APP_BASE_URL)
