<template>
  <div class="refund-tabs">
    <div class="tab-tit">
      <div class="tit-w" @click="cur=0" :class="{active:cur==0}">
        <span>退款详情</span>
      </div>
      <div class="tit-w" @click="cur=1" :class="{active:cur==1}">
        <span>协商记录</span>
      </div>
    </div>
    <div class="tab-con">
      <div v-show="cur==0" class="con">
        <div class="line">
          <span>退款编号：</span>
          <label>201912040954570000040929</label>
        </div>
        <div class="line">
          <span>申请时间：</span>
          <label>2019-12-04  09:54:57</label>
        </div>
        <div class="line">
          <span>退款原因：</span>
          <label>其他</label>
        </div>
        <div class="line">
          <span>处理方式：</span>
          <label>仅退款</label>
        </div>
        <div class="line">
          <span>退款金额：</span>
          <label class="r">￥6.9</label>
        </div>
        <div class="order-item">
          <img src="/static/tmp/b005.jpg">
          <div class="m">
            <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
            <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
            <span class="state">已完成</span>
          </div>
          <div class="r">
            <span class="t">¥ 299.00</span>
            <span class="b">x1</span>
          </div>
        </div>
      </div>
      <div v-show="cur==1" class="con">内容二</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 0 // 默认选中第一个tab
    }
  }
}
</script>

<style lang="scss">
  .refund-tabs {
    margin-top: 20rpx;
    background-color: #fff;
    .tab-tit {
      display: flex;
      border-bottom: 1rpx solid #eee;
      .tit-w {
        display: flex;
        flex: 1;
        justify-content: center;
        &.active {
            span {
              color: #B51C66;
              border-bottom: 4rpx solid #B51C66;
            }
          }
        span {
          padding: 30rpx 0 25rpx;
          font-size: 30rpx;
          color: #333;
          border-bottom: 4rpx solid transparent;
        }
      }
    }
    .tab-con {
      padding: 0 30rpx;
      .con {
        .line {
          padding: 10rpx 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 1;
          &:first-child {
            padding-top: 20rpx;
          }
          &:last-child {
            padding-bottom: 20rpx;
          }
          span {
            font-size: 26rpx;
            color: #333;
            font-weight: 600;
          }
          label {
            font-size: 26rpx;
            color: #666;
            &.r {
              color: #B51C66;
            }
          }
        }
        .order-item {
          padding: 20rpx 0;
          display: flex;
          background-color: #fcfcfc;
          img {
            width: 180rpx;
            height: 180rpx;
            border-radius: 10rpx;
          }
          .m {
            margin-left: 20rpx;
            display: flex;
            flex-direction: column;
            flex: 1;
            .t {
              font-size: 28rpx;
              line-height: 1;
              color: #333;
            }
            .b {
              margin-top: 20rpx;
              font-size: 24rpx;
              line-height: 1;
              color: #666;
            }
            .state {
              margin-top: 20rpx;
              font-size: 28rpx;
              color: #B51C66;
            }
          }
          .r {
            margin-left: 20rpx;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .t {
              font-size: 28rpx;
              line-height: 1;
              color: #333;
            }
            .b {
              margin-top: 20rpx;
              font-size: 24rpx;
              line-height: 1;
              color: #666;
            }
          }
        }
      }
    }
  }
</style>