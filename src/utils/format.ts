export const formatCount = (count: number) => {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  }
  return count
}

export const formatPicUrl = (
  imgUrl: string,
  width: number,
  height: number = width
) => {
  return imgUrl + `?param=${width}x${height}`
}
