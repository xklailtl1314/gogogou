<template>
  <!-- 购物车 -->
  <div class="shop-car">
    <div class="shop" v-if="goodsArr.length!=0">
      <!-- 头部 -->
      <div class="top">
        <div class="left">
          <radio-group class="radio-group" @change="changeRadio">
            <label class="radio">
              <radio></radio>
            </label>
          </radio-group>

          <img src="/static/images/g-icon2.png">
          <span>雷蛇官方旗舰店</span>
          <i class="iconfont icon-angle-right"></i>
        </div>
        <div class="right">
          <span>领券</span>
        </div>
      </div>
      <!-- 主体 -->
      <ul class="order-item-wrap">
        <li class="order-item" hover-class="none"
            v-for="(item, idx) in goodsArr" :key="idx"
            @touchstart="touchStart($event)"
            @touchend="touchEnd($event,idx)"
            :data-type="item.type">
          <radio-group class="radio-group" @change="changeRadio">
            <label class="radio">
              <radio></radio>
            </label>
          </radio-group>
          <img :src="item.img">
          <div class="m">
            <span class="t">{{item.name}}</span>
            <div class="c">
              <div class="oItem">
                <picker @change="bindPickerChange" :value="oIndex" :range="oArray" class="item">
                  <view class="picker">{{oArray[oIndex]}}</view>
                </picker>
                <i class="iconfont icon-arrow-bottom_s"></i>
              </div>
            </div>
            <span class="b">库存紧张</span>
            <!-- 价格和数量 -->
            <div class="price-wrap">
              <div class="left">
                ￥<span>{{item.price}}</span>
              </div>
              <div class="right">
                <view class="stepper">
                  <text :class="minusStatus" @tap="bindMinus">-</text>
                  <input type="number" @change="bindManual" :value="num" />
                  <text class="normal" @tap="bindPlus">+</text>
                </view>
              </div>
            </div>
          </div>
          <!-- 右边滑动部分 -->
          <div class="other-item similar">找相似</div>
          <div class="other-item collect">
            <span>移入</span>
            <span>收藏夹</span>
          </div>
          <div class="other-item delete" @click="delect(idx)">删除</div>
        </li>
      </ul>
      <!-- 底部 -->
      <div class="bottom">
        <span class="tip">部分商品满99元，享包邮</span>
        <div class="right" @click="goToList">
          <span>去凑单</span>
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
    </div>

    <!-- 底部栏 -->
    <div class="pay-tab">
      <div class="left">
        <radio-group class="radio-group" @change="changeRadio">
          <label class="radio">
            <radio></radio> <span>全选</span>
          </label>
        </radio-group>
      </div>
      <div class="right">
        <div class="wrap">
          <i class="iconfont icon-Lightning"></i>
          <span>清除</span>
        </div>
        <span class="collect btn-r">移入收藏夹</span>
        <span class="del btn-r">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsArr: [ // 商品列表
        {
          id: 1,
          img: '/static/tmp/b005.jpg',
          name: 'Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥',
          price: '6.9',
          type: 0
        },
        {
          id: 2,
          img: '/static/tmp/b005.jpg',
          name: 'Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥',
          price: '6.9',
          type: 0
        }
      ],
      oArray: ['综合', '好评', '销量', '星级'],
      oIndex: 0,
      num: 1
    }
  },
  methods: {
    touchStart (e) { // 滑动开始
      // 获取移动距离，可以通过打印出e，然后分析e的值得出
      this.startX = e.mp.changedTouches[0].clientX
      // console.log(this.startX)
    },
    touchEnd (e, index) { // 滑动结束
      // 获取移动距离
      this.endX = e.mp.changedTouches[0].clientX
      if (this.startX - this.endX > 10) {
        for (let i = 0; i < this.goodsArr.length; i++) {
          this.goodsArr[i].type = 0
        }
        this.goodsArr[index].type = 1
      } else if (this.startX - this.endX < -10) {
        for (let i = 0; i < this.goodsArr.length; i++) {
          this.goodsArr[i].type = 0
        }
      }
    },
    // 删除
    delect (index) {
      this.goodsArr.splice(index, 1)
    },
    goToList () { // 去往商品列表
      wx.navigateTo({
        url: '../searchList/main'
      })
    },
    bindPickerChange (e) { // 下拉框选中
      this.oIndex = e.mp.detail.value
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
  mounted () {
    // console.log(this.goodsArr.length)
  }
}
</script>

<style lang="scss">
  page {
    background-color: #eee;
  }
  .shop-car {
    .shop {
      position: relative;
      margin: 20rpx 30rpx 0;
      line-height: 1;
      background-color: #fff;
      border-radius: 12rpx;
      overflow: hidden;
      .top {
        padding: 20rpx 30rpx 10rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1;
        .left {
          display: flex;
          align-items: center;
          img {
            width: 66rpx;
            height: 26rpx;
            border-radius: 10rpx;
          }
          span {
            margin-left: 20rpx;
            font-size: 30rpx;
            color: #333;
          }
          i {
            margin-left: 26rpx;
            font-size: 24rpx;
            color: #666;
          }
        }
        .right {
          display: flex;
          line-height: 1;
          span {
            font-size: 28rpx;
            color: #666;
          }
        }
      }
      .order-item-wrap {
        padding: 10rpx 0 20rpx 0;
        display: flex;
        width: 100%;
        flex-direction: column;
        li.order-item {
          padding-bottom: 10rpx;
          display: flex;
          width: 990rpx;
          background-color: #fcfcfc;
          -webkit-transition: all 0.2s;
          transition: all 0.2s;
          .radio-group {
            margin-left: 20rpx;
            display: flex;
            width: 40rpx;
            align-items: center;
            .radio {}
          }
          img {
            display: flex;
            margin-left: 20rpx;
            width: 175rpx;
            height: 175rpx;
            border-radius: 10rpx;
          }
          .m {
            width: 396rpx;
            // margin: 0 20rpx;
            margin: 0 26rpx;
            display: flex;
            flex-direction: column;
            // flex: 1;
            .t {
              font-size: 28rpx;
              line-height: 1;
              color: #333;
            }
            .c {
              margin-top: 20rpx;
              display: flex;
              align-items: center;
              .oItem {
                padding: 10rpx 20rpx;
                display: flex;
                line-height: 1;
                background-color: #eee;
                border-radius: 6rpx;
                .item {
                  font-size: 24rpx;
                  color: #666;
                }
                .iconfont {
                  margin-left: 15rpx;
                  font-size: 24rpx;
                  color: #666;
                }
              }
            }
            .b {
              margin-top: 20rpx;
              font-size: 24rpx;
              line-height: 1;
              color: #666;
            }
            .price-wrap {
              margin-top: 30rpx;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .left {
                color: #B51C66;
                font-size: 22rpx;
                line-height: 1;
                span {
                  font-size: 32rpx;
                }
              }
              .right {
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

            }
          }
          .other-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100rpx;
            height: auto;
            font-size: 24rpx;
            color: #fff;
            &.similar {
              background-color: #DA5998;
            }
            &.collect {
              flex-direction: column;
              background-color: #D33883;
              span {
                line-height: 1.2;
              }
            }
            &.delete {
              background-color: #B51C66;
            }
          }
        }
        li[data-type="0"] {
          transform: translate3d(0, 0, 0);
        }
        li[data-type="1"] {
          transform: translate3d(-300rpx, 0, 0);
        }

      }
      .bottom {
        padding: 10rpx 20rpx 20rpx 20rpx;
        display: flex;
        justify-content: space-between;
        .tip {
          font-size: 28rpx;
          color: #666;
        }
        .right {
          display: flex;
          span {
            font-size: 28rpx;
            color: #DA5998;
          }
          .iconfont {
            margin-left: 20rpx;
            font-size: 28rpx;
            color: #DA5998;
          }
        }
      }
    }
    .pay-tab {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 20rpx 30rpx 70rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      .left {
        .radio {
          span {
            font-size: 30rpx;
            color: #333;
          }
        }
      }
      .right {
        display: flex;
        .wrap {
          display: flex;
          align-items: center;
          font-size: 24rpx;
          color: #484850;
          .iconfont {}
          span {}
        }
        .btn-r {
          padding: 15rpx 20rpx;
          font-size: 28rpx;
          border-radius: 33rpx;
          line-height: 1;
          color: #DA5998;
          border: 1rpx solid currentColor;
        }
        .collect {
          margin-left: 30rpx;
        }
        .del {
          margin-left: 20rpx;
        }
      }
    }
  }


// 单选框样式
radio {
  width: 38rpx;
  .wx-radio-input {
    border-radius: 50%;
    width: 28rpx;
    height: 28rpx;
    &.wx-radio-input-checked {
      &::before {
        border-radius: 50%;
        width: 44rpx;
        height: 44rpx;
        line-height: 44rpx;
        text-align: center;
        font-size: 26rpx; /* 对勾大小 26rpx */
        color:#fff; /* 对勾颜色 */
        background: #DA5998;
        border-color: #DA5998;
      }
    }
  }
}
</style>