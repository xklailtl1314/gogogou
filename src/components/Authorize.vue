<template>
  <!-- 授权弹窗 -->
  <div class="g-authorize">
    <div class="g-half-screen">
      <view class="page__bd">
        <view :class="['weui-demo-dialog', isauthorize ? 'weui-demo-dialog_show' : '']">
          <view class="weui-mask" @tap="closeDialog"></view>
          <!-- 主体开始 -->
          <view class="weui-half-screen-dialog hs-authorize-wrap">
            <div class="top">
              <i class="iconfont icon-quxiao"></i>
            </div>
            <div class="line">
              <img class="g-icon" src="/static/images/g-icon.png">
              <span class="welcome">欢迎来到咕咕购物</span>
            </div>
            <div class="mid-tip">
              <span class="tit">为提供更优质的服务，咕咕购物需要获取以下信息：</span>
              <span class="tip-li">你的公开信息（昵称、头像等）</span>
            </div>
            <Button
              class="btn-submit" type="primary"
              open-type="getUserInfo" @getuserinfo="getUserInfo">确认</Button>
          </view>
          <!-- 主体结束 -->
        </view>
      </view>

    </div>
  </div>
</template>

<script>
export default {
  props: ['isauthorize'],
  data () {},
  methods: {
    closeDialog () {
      this.$emit('isAuthorize') // 调用父方法，关闭half-screen
    },
    handleGetUserInfo () {
      wx.getUserInfo({
        success: (res) => {
          // console.log(res)
          this.userInfo = res.userInfo
          wx.setStorageSync('userInfo', res.userInfo) // 授权数据存本地
        },
        fail: function () {
          console.log('获取失败')
        }
      })
    },
    getUserInfo (res) {
      if (res.mp.detail.rawData) {
        this.handleGetUserInfo()
        // this.isShow = true
        this.closeDialog()
      }
    }
  },
  beforeMount () {
    this.handleGetUserInfo()
  }
}
</script>

<style lang="scss">
  // 基本
  .weui-demo-dialog {
    visibility:hidden;
    opacity:0;
    transition:all .3s;
    &.weui-demo-dialog_show {
      visibility:visible;
      opacity:1;
      .weui-half-screen-dialog {
        transform:translateY(0);
      }
    }
    .weui-half-screen-dialog {
      transition:all .3s;
      transform:translateY(100%);
    }
  }

  .g-authorize {
    .hs-authorize-wrap {
      .top {
        display: flex;
        justify-content: flex-end;
        .iconfont {
          padding: 14rpx;
          font-size: 24rpx;
          color: #ccc;
        }
      }
      .line {
        display: flex;
        align-items: center;
        .g-icon {
          width: 100rpx;
          height: 100rpx;
          border-radius: 14rpx;
        }
        .welcome {
          margin-left: 20rpx;
          font-size: 30rpx;
          color: #666;
        }
      }
      .mid-tip {
        margin-top: 80rpx;
        display: flex;
        flex-direction: column;
        .tit {
          font-size: 32rpx;
          color: #666;
        }
        .tip-li {
          margin-top: 20rpx;
          font-size: 22rpx;
          color: #999;
        }
      }
      .btn-submit {
        margin: 80rpx 0;
      }
    }
  }
</style>