<template>
  <div class="g-half-screen">
    <view class="page__bd">
      <view :class="['weui-demo-dialog', istrue ? 'weui-demo-dialog_show' : '']">
        <view class="weui-mask" @tap="closeDialog"></view>
        <!-- 主体开始 -->
        <view class="weui-half-screen-dialog hs-goodsinfo">
          <div class="top">
            <div class="l">
              <img src="/static/images/ad.jpg">
              <div class="wrap">
                <div class="price-wrapper">
                  <span class="old"><small>￥</small>299</span>
                  <label>券后</label>
                  <span class="new"><small>￥</small>279</span>
                </div>
                <div class="stock">库存79件</div>
                <div class="info">配送至：杨浦区，已选“XS(160/80A)” “白色”</div>
              </div>
            </div>
            <div class="r">
              <span class="cancel" @tap="closeDialog">
                <i class="iconfont icon-quxiao"></i>
              </span>
            </div>
          </div>
          <scroll-view scroll-y class="middle">
            <div class="line">
              <span class="title">配送区域</span>
              <span class="sub">（配送地可能会影响库存，请正确选择）</span>
            </div>
            <!-- 地区选择 -->
            <div class="site-wrap">
              <i class="iconfont icon-address_icon"></i>
              <picker class="auth-pick-tip" mode="region" :value="region" :custom-item="customItem" @change="regionPick">
                <div v-if="!region.length">请选择区域</div>
                <view class="site-current">
                  {{region[0]}} {{region[1]}} {{region[2]}}
                </view>
              </picker>
              <i class="iconfont icon-angle-right"></i>
            </div>
            <!-- 单选框 -->
            <div class="cate">
              <div class="line">
                <span class="title">颜色分类</span>
              </div>
              <radio-group @change="radioChange" class="g-radio-group">
                <label :class="['weui-cell weui-check__label', 'g-label', item.checked ? 'active' : '']"
                  v-for="(item, idx) in radioItems" :key="idx">
                  <radio class="weui-check g-radio" :value="item.value" :checked="item.checked" />
                  <span class="weui-cell__bd g-name">{{item.name}}</span>
                </label>
              </radio-group>
            </div>
          </scroll-view>
          <!-- 购买数量 -->
          <div class="bottom">
            <div class="wrap">
              <span class="title">购买数量</span>
              <view class="stepper">
                <text :class="minusStatus" @tap="bindMinus">-</text>
                <input type="number" @change="bindManual" :value="num" />
                <text class="normal" @tap="bindPlus">+</text>
              </view>
            </div>
            <div class="b">
              <p  class="tip">当前商品可使用<span>满299减20</span>店铺优惠券</p>
              <button class="g-submit">确定</button>
            </div>
          </div>
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
      region: ['全部', '全部', '全部'], // 地址默认
      customItem: '全部', // 地址默认
      radioItems: [ // 商品单选
        { name: '白色', value: '0', checked: true },
        { name: '粉色', value: '1', checked: false },
        { name: '黑色', value: '2', checked: false },
        { name: '蓝色', value: '3', checked: false }
      ],
      num: 1,
      minusStatus: 'disabled'
    }
  },
  props: ['istrue'],
  methods: {
    closeDialog () {
      this.$emit('isShow') // 调用父方法，关闭half-screen
    },
    regionPick (e) { // 地址调用
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.region = e.mp.detail.value
    },
    radioChange (e) { // 单选框
      // console.log('radio 携带的值为：' + e.mp.detail.value)
      let radioItems = this.radioItems
      radioItems.forEach((item, i) => {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value
      })
      this.radioItems = radioItems
    },
    // 数量加减--减号
    bindMinus () {
      var num = this.num
      // 如果大于1时，才可以减
      if (num > 1) {
        num--
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态
      var minusStatus = num <= 1 ? 'disabled' : 'normal'
      // 将数值与状态写回
      this.num = num
      this.minusStatus = minusStatus
    },
    // 数量加减--加号
    bindPlus () {
      var num = this.num
      // 不作过多考虑自增1
      num++
      console.log(typeof (num))

      // 只有大于一件的时候，才能normal状态，否则disable状态
      var minusStatus = num < 1 ? 'disabled' : 'normal'
      // 将数值与状态写回
      this.num = num
      this.minusStatus = minusStatus
    },
    // 数量加减--输入框
    bindManual (e) {
      var num = e.mp.detail.value
      // 将数值与状态写回
      this.num = num
    }
  },
  components: {
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
  // .weui-demo-dialog_show .weui-half-screen-dialog {
  //   transform:translateY(0);
  // }

  // 自定义
  .hs-goodsinfo {
    padding: 0;
    max-height: 88%;
    border-radius: 0;
    .top {
      padding: 20rpx 30rpx 44rpx;
      display: flex;
      border-bottom: 1rpx solid #b5b5bf;
      .l {
        display: flex;
        img {
          width: 220rpx;
          height: 220rpx;
          border-radius: 10rpx;
        }
        .wrap {
          margin-left: 20rpx;
          display: flex;
          flex-direction: column;
          width: 410rpx;
          .price-wrapper {
            display: flex;
            height: 32rpx;
            color: #b51c66;
            .old,.new {
              display: flex;
              align-items: flex-end;
              font-size: 32rpx;
              line-height: 1;
              small {
                font-size: 22rpx;
              }
            }
            label {
              margin-left: 20rpx;
              font-size: 32rpx;
              line-height: 1;
            }
          }
          .stock {
            margin-top: 26rpx;
            font-size: 24rpx;
            color: #666;
          }
          .info {
            margin-top: 10rpx;
            font-size: 24rpx;
            color: #333;
          }
        }
      }
      .r {
        margin-left: 10rpx;
        .cancel {
          .icon-quxiao {
            font-size: 30rpx;
            color: #808084;
          }
        }
      }
    }
    .middle {
      // margin-top: 44rpx;
      padding: 40rpx 30rpx 40rpx;
      border-bottom: 1rpx solid #b5b5bf;
      // height: calc(88vh - 656rpx);
      .line {
        line-height: 1;
        .title {
          font-size: 28rpx;
          color: #333;
        }
        .sub {
          margin-left: 15rpx;
          font-size: 20rpx;
          color: #999;
        }
      }
      .site-wrap {
        position: relative;
        margin-top: 40rpx;
        display: flex;
        align-items: flex-end;
        // justify-content: space-between;
        .icon-address_icon {
          font-size: 20rpx;
          color: #808084;
        }
        .auth-pick-tip {
          flex: 1;
          .site-current {
            margin-left: 12rpx;
            font-size: 28rpx;
            color: #666;
          }
        }
        .icon-angle-right {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 24rpx;
          color: #9d9fa7;
        }
      }
      .cate {
        // padding-bottom: 40rpx;
        margin-top: 40rpx;
        .line {
          &:not(:first-child) {
            margin-top: 40rpx;
          }
        }
        .g-radio-group {
          margin-top: 20rpx;
          display: flex;
          .g-label {
            padding: 0;
            border-radius: 6rpx;
            &:not(:first-child) {
              margin-left: 20rpx;
            }
            &:before {
              content: initial;
            }
            &.active {
              .g-name {
                color: #DA5998;
                border: 1rpx solid #DA5998;
                background-color: #FFEDF6;
              }
            }
            .g-name {
              padding: 15rpx 20rpx;
              font-size: 24rpx;
              color: #999;
              background-color: #eee;
              border: 1rpx solid #eee;
              border-radius: 6rpx;
            }
          }
        }
      }
    }
    .bottom {
      margin-top: 40rpx;
      padding: 0 30rpx;
      .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 28rpx;
          line-height: 1;
          color: #333;
        }
        .stepper {
          display: flex;
          width: 180rpx;
          height: 42rpx;
          border: 1rpx solid #999;
          border-radius: 6rpx;
          text {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 52rpx;
          }
          input {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70rpx;
            height: 42rpx;
            font-size: 12px;
            text-align: center;
            border-left: 1rpx solid #999;
            border-right: 1rpx solid #999;
          }
          .normal {
            color: #333;
          }
          .disabled {
            color: #999;
          }
        }
      }
      .b {
        margin-top: 220rpx;
        .tip {
          font-size: 26rpx;
          line-height: 1;
          color: #666;
          text-align: center;
          span {
            margin: 0 6rpx;
            color: #b51c66;
          }
        }
        .g-submit {
          margin: 15rpx 0 20rpx;
          width: 686rpx;
          height: 71rpx;
          font-size: 26rpx;
          color: #fff;
          background:linear-gradient(-90deg,rgba(181,28,102,1) 0%,rgba(218,89,152,1) 100%);
          border-radius: 35rpx;
        }
      }
    }

  }

</style>