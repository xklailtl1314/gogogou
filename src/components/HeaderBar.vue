<template>
  <div class="header-bar">
    <navigator :url="cateLink" class="category" open-type="navigate" hover-class="none" >
      <image mode="widthFix" src="/static/images/category.png"/>
      <span>分类</span>
    </navigator>
    <navigator class="search" hover-class="none">
      <image mode="widthFix" src="/static/images/search.png"/>
      <input type="text" placeholder="行车记录仪" placeholder-style="color: #ccc">
    </navigator>
    <div class="scan" hover-class="none" @tap="sacnCode">
      <image mode="widthFix" src="/static/images/scan.png"/>
      <span>扫一扫</span>
    </div>
    <navigator class="msg" hover-class="none">
      <image mode="widthFix" src="/static/images/msg.png"/>
      <span>消息</span>
    </navigator>
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
    padding: 20rpx;
    display: flex;
    border-bottom: 1px solid #eee;
    .scan,
    .msg,
    .search,
    .category {
      display: flex;
      align-items: center;
      image {
        width: 36rpx;
      }
      span {
        padding-top: 6rpx;
        font-size: 24rpx;
        color: #ccc;
      }
    }
    .scan,
    .msg,
    .category {
      flex-direction: column;
    }
    .search {
      margin: 0 20rpx;
      flex: 1;
      position: relative;
      font-size: 26rpx;
      border-radius: 35rpx;
      background-color: #f7f7f7;
      overflow: hidden;

      image {
        position: absolute;
        top: 50%;
        left: 20rpx;
        transform: translateY(-50%);
      }
      input {
        padding-left: 66rpx;
        width: 100%;
      }
    }
    .msg {
      padding-left: 20rpx;
    }
  }
</style>