var car = wx.getStorageSync('car') || []
const state = {
  car: car // 购物车中的商品数据
}

export default state
