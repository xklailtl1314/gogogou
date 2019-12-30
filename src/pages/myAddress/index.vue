<template>
  <div class="my-address">
    <div class="site-list">
      <div class="item">
        <div class="left">
          <div class="top">
            <span class="name">墨小刀</span>
            <span class="phone">1302387xxxx</span>
          </div>
          <div class="bottom">
            <span class="site">收获地址:北京市朝阳区宇宙火星村xxx号 </span>
          </div>
        </div>
        <div class="right">
          <span @click="goToManage">管理</span>
        </div>
      </div>

      <div class="item">
        <div class="left">
          <div class="top">
            <span class="name">墨小刀</span>
            <span class="phone">1302387xxxx</span>
          </div>
          <div class="bottom">
            <span class="site">收获地址:北京市朝阳区宇宙火星村xxx号 </span>
          </div>
        </div>
        <div class="right">
          <span @click="goToManage">管理</span>
        </div>
      </div>
    </div>

    <div class="fix-bottom">
      <button @click="goToManage">新增收获地址</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goToManage () {
      wx.navigateTo({
        url: '../myAddressManage/main'
      })
    }
  }
}
</script>

<style lang="scss">
page {
  padding-bottom: 160rpx;
  background-color: #eee;
}
.my-address {
  .site-list {
    padding: 0 30rpx;
    background-color: #fff;
    .item {
      padding: 20rpx 0;
      display: flex;
      &:not(:last-child) {
        border-bottom: 1rpx solid #eee;
      }
      .left {
        display: flex;
        flex: 1;
        flex-direction: column;
        .top {
          line-height: 1;
          span {
            font-size: 28rpx;
            color: #333;
          }
          .name {}
          .phone {
            margin-left: 20rpx;
          }
        }
        .bottom {
          margin-top: 20rpx;
          line-height: 1;
          .site {
            font-size: 28rpx;
            color: #666;
          }
        }
      }
      .right {
        margin-left: 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 28rpx;
          color: #B51C66;
        }
      }
    }
  }

  .fix-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20rpx 30rpx 70rpx;
    display: flex;
    background-color: #fff;
    box-sizing: border-box;
    button {
      height: 70rpx;
      width: 100%;
      font-size: 28rpx;
      font-weight: 600;
      color: #fff;
      background:linear-gradient(90deg,rgba(218,89,152,1) 0%,rgba(181,28,102,1) 100%);
      border-radius: 35rpx;
    }
  }
}
</style>