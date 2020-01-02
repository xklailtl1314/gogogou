const mutations = {
  addToCar (state, goodsinfo) {
    var flag = false
    state.car.some(item => {
      if (item.id == goodsinfo.id) { // 判断购物车中商品id相等，数量相加，否则添加商品
        item.count += parseInt(goodsinfo.count)
        flag = true
        return true
      }
    })

    if (!flag) {
      state.car.push(goodsinfo)
    }
    // car 存本地数据
    wx.setStorageSync('car', state.car)
  }
}
export default mutations
