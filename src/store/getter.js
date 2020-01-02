const getters = {
  getAllCount (state) { // 计算购物车商品总数
    var c = 0
    state.car.forEach(item => {
      c += item.count
    })
    return c
  }
}

export default getters
