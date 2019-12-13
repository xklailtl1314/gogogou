<template>
  <div class="header-bar">
    <navigator :url="cateLink" class="category" open-type="navigate" hover-class="none" >
      <i class="iconfont icon-fenlei"></i>
    </navigator>

    <navigator :url="cateLink" class="search" hover-class="none">
      <i class="iconfont icon-search1"></i>
      <span>行车记录仪</span>
    </navigator>

    <div class="right">
      <div class="scan" hover-class="none" @tap="sacnCode">
        <i class="iconfont icon-scan"></i>
      </div>
      <navigator class="msg" hover-class="none">
        <i class="iconfont icon-i-message"></i>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cateLink'],
  methods: {
    // 扫一扫
    sacnCode () {
      wx.scanCode({
        success (res) {
          console.log(res)
        },
        fail () {
          console.log('失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-bar {
    padding: 20rpx 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b51c66;
    .scan,
    .msg,
    .search,
    .category {
      display: flex;
      align-items: center;
      i {
        font-size: 40rpx;
        line-height: 1;
        color: #fff;
        &.icon-fenlei {
          font-size: 48rpx;
          // font-weight: 600;
        }
        &.icon-search1 {
          position: absolute;
          top: 50%;
          left: 30rpx;
          transform: translateY(-50%);
          font-size: 22rpx;
          color: #999;
        }
        &.icon-i-message {
          font-size: 42rpx;
        }
      }
    }
    .search {
      position: relative;
      width: 480rpx;
      height: 72rpx;
      border-radius: 36rpx;
      background-color: #eee;
      span {
        padding: 0 0 0 74rpx;
        font-size: 24rpx;
        color: #999;
      }
    }
    .right {
      display: flex;
    }
    .msg {
      padding-left: 20rpx;
    }
  }
</style>