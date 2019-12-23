<template>
  <div class="g-half-screen">
    <view class="page__bd">
      <view :class="['weui-demo-dialog', isensure ? 'weui-demo-dialog_show' : '']">
        <view class="weui-mask" @tap="closeDialog"></view>
        <!-- 主体开始 -->
        <view class="weui-half-screen-dialog hs-ensure-wrap">
          <div class="line">
            <span class="title">保障条款</span>
          </div>
          <scroll-view scroll-y class="hs-ensure">
            <div class="item" v-for="(item, idx) in list" :key="idx">
              <div class="l">
                <i class="iconfont icon-dagou"></i>
              </div>
              <div class="r">
                <span class="title">{{item.title}}</span>
                <span class="sub">{{item.sub}}</span>
              </div>
            </div>

            <button class="btn-ok" @tap="closeDialog">完成</button>
          </scroll-view>
        </view>
        <!-- 主体结束 -->
      </view>
    </view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '假一赔四',
          sub: '正品保障，假一赔四'
        },
        {
          title: '15天价保',
          sub: '该商品参与天猫大促15天价保服务，12月13日后若商品降价，可在12.13 00:00:00-12.27 23：59:59期间发起降价补差，详情请看消费者价保服务规则'
        },
        {
          title: '退货运费险',
          sub: '卖家投保退货运费险，负担一定金额退货运费（保单生效以下单显示为准）'
        },
        {
          title: '上门取退',
          sub: '预约上门取件，最快1小时上门，取件后极速退款到账'
        },
        {
          title: '极速退款',
          sub: '诚信用户在退货寄出后，享受极速退款到账'
        }
      ]
    }
  },
  props: ['isensure'],
  methods: {
    closeDialog () {
      this.$emit('isEnsure') // 调用父方法，关闭half-screen
    }
  },
  computed: {},
  components: {}
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

  .hs-ensure-wrap {
    padding: 20rpx 30rpx;
    .line {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      .title {
        font-size: 32rpx;
        color: #333;
      }
    }
    .hs-ensure {
      height: 70vh;
      .item {
        display: flex;
        &:not(:first-child) {
          margin-top: 40rpx;
        }
        .l {
          .iconfont {
            font-size: 20rpx;
            color: #BA216B;
          }
        }
        .r {
          margin-left: 20rpx;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 30rpx;
            line-height: 1;
            color: #333;
          }
          .sub {
            margin-top: 20rpx;
            font-size: 24rpx;
            color: #999;
          }
        }
      }
      .btn-ok {
        margin-top: 350rpx;
        height:70rpx;
        font-size: 28rpx;
        color: #eee;
        background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
        border-radius:35rpx;
      }
    }
  }
</style>