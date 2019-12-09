<template>
  <div class="header-bar">
    <navigator :url="cateLink" class="category" open-type="navigate" hover-class="none" >
      <image mode="widthFix" src="/static/images/category.png"/>
      <span>分类</span>
    </navigator>

    <navigator class="search" hover-class="none">
      <image mode="widthFix" src="/static/images/search.png"/>
      <span>行车记录仪</span>
    </navigator>

    <div class="right">
      <div class="scan" hover-class="none" @tap="sacnCode">
        <image mode="widthFix" src="/static/images/scan.png"/>
        <span>扫一扫</span>
      </div>
      <navigator class="msg" hover-class="none">
        <image mode="widthFix" src="/static/images/msg.png"/>
        <span>消息</span>
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
    padding: 20rpx 30rpx 0;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .scan,
    .msg,
    .search,
    .category {
      display: flex;
      align-items: center;
      image {
        padding-top: 10rpx;
        width: 30rpx;
        height: 30rpx;
      }
      span {
        padding-top: 12rpx;
        font-size: 20rpx;
        line-height: 1;
        color: #666;
      }
    }
    .scan,
    .msg,
    .category {
      flex-direction: column;
    }
    .search {
      position: relative;
      width: 480rpx;
      height: 72rpx;
      border-radius: 36rpx;
      background-color: #eee;
      image {
        position: absolute;
        top: 50%;
        left: 22rpx;
        transform: translateY(-50%);
        padding: 0;
        width: 33rpx;
        height: 33rpx;
      }
      span {
        padding: 0 0 0 76rpx;
        font-size: 28rpx;
        color: #cfcfcf;
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