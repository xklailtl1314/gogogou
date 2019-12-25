<template>
  <view class="goods-show">
    <!-- 视频轮播 -->
    <VideoSwiper></VideoSwiper>
    <!-- 价格块 -->
    <PriceWrap></PriceWrap>
    <!-- 领券 -->
    <div class="goods-coupon" @click="openCoupon">
      <div class="l">
        <span class="tip">领券后预计减60元起</span>
        <span class="tip">店铺券满399减10</span>
      </div>
      <div class="r">
        <span>领券</span>
        <i class="iconfont icon-angle-right"></i>
      </div>
    </div>
    <!-- 标题、收藏、分享 -->
    <div class="goods-title-wrap">
      <h1 class="title">S码预售奥丽嘉朵2019冬粉色羽绒中长款1C69508671</h1>
      <div class="r">
        <div class="item">
          <i class="iconfont icon-fenxiang"></i>
          <span>分享</span>
        </div>
        <div class="item">
          <i  class="iconfont icon-star"></i>
          <span>收藏</span>
        </div>
      </div>
    </div>
    <!-- 发货、活动 -->
    <div class="other-info">
      <div class="line">
        <div class="l">
          <span class="tit">发货</span>
          <span class="info">
            <i class="iconfont icon-address_icon"></i>
            上海 快递:10.0
          </span>
        </div>
        <div class="r">月销25</div>
      </div>
      <div class="line">
        <div class="l">
          <span class="tit">活动</span>
          <span class="info">第2件半价</span>
        </div>
        <div class="r">
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
    </div>
    <!-- 保障 -->
    <div class="other-info" @click="openEnsure">
      <div class="line">
        <div class="l">
          <span class="tit">保障</span>
          <span class="info">假一赔四  上门取退  七天无理由退换</span>
        </div>
        <div class="r">
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
    </div>
    <!-- 参数、选择 -->
    <div class="other-info" @click="openParameter">
      <div class="line">
        <div class="l">
          <span class="tit">参数</span>
          <span class="info">品牌 适用年龄...</span>
        </div>
        <div class="r">
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
      <div class="line">
        <div class="l">
          <span class="tit">选择</span>
          <span class="info">配送至:杨浦区,已选:XS (160/80A) 白色</span>
        </div>
        <div class="r">
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="comment-wrap">
      <div class="line">
        <div class="l">
          <span>商品评价（26）</span>
        </div>
        <navigator class="r" open-type="navigate" hover-class="none" url="../goodsShowComment/main">
          <span>查看全部</span>
          <i class="iconfont icon-angle-right"></i>
        </navigator>
      </div>
      <div class="item">
        <div class="top">
          <img src="/static/images/ad.jpg">
          <span>虎狮狼右兵卫</span>
        </div>
        <div class="mid">
          <span>衣服不错，特别好看又舒服。从衣服设计上来说，图案本身就不错，很有吸引力，看着比较舒服，反正我超...</span>
          <div class="img-wrap">
            <img src="/static/images/ad.jpg">
            <img src="/static/images/ad.jpg">
          </div>
        </div>
        <div class="bottom">
          <span>粉红色，M</span>
        </div>
      </div>
    </div>
    <!-- 领券弹窗 -->
    <GoodsShowCoupon :iscoupon="iscoupon" @isCoupon="isCoupon"></GoodsShowCoupon>
    <!-- 商品信息弹窗 -->
    <GoodsShowInfo :istrue="istrue" @isShow="isShow"></GoodsShowInfo>
    <!-- 保障弹窗 -->
    <GoodsShowEnsure :isensure="isensure" @isEnsure="isEnsure"></GoodsShowEnsure>
    <!-- 产品参数 -->
    <GoodsShowParameter :isparameter="isparameter" @isParameter="isParameter"></GoodsShowParameter>
    <!-- 底部tab -->
    <div class="g-tab">
      <navigator class="item">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </navigator>
      <navigator class="item">
        <i class="iconfont icon-danseshixintubiao-"></i>
        <span>客服</span>
      </navigator>
      <navigator class="item">
        <i class="iconfont icon-gouwuche-copy"></i>
        <span>购物车</span>
      </navigator>
      <div class="btn-wrap">
        <div class="btn left-btn">
          <span>加入购物车</span>
        </div>
        <div class="btn right-btn" @click="openDialog">
          <span>领券购买</span>
          <small>首单价￥538</small>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <BackTop></BackTop>

  </view>
</template>

<script>
import BackTop from '@/components/BackTop.vue' // 返回顶部
import VideoSwiper from '@/components/VideoSwiper.vue' // 视频轮播
import PriceWrap from '@/components/GoodShowPrice.vue' // 价格块
import GoodsShowInfo from '@/components/GoodsShowInfo.vue' // 商品信息弹窗
import GoodsShowCoupon from '@/components/GoodsShowCoupon.vue' // 领券弹窗
import GoodsShowEnsure from '../../components/GoodsShowEnsure.vue' // 保障弹窗
import GoodsShowParameter from '../../components/GoodsShowParameter.vue' // 保障弹窗

export default {
  data () {
    return {
      istrue: false, // 触发商品信息弹窗
      iscoupon: false, // 触发领券弹窗
      isensure: false, // 触发保障弹窗
      isparameter: false // 触发产品参数弹窗
    }
  },
  components: {
    BackTop,
    VideoSwiper,
    PriceWrap,
    GoodsShowInfo,
    GoodsShowCoupon,
    GoodsShowEnsure,
    GoodsShowParameter
  },
  methods: {
    openParameter () {
      this.isparameter = true // 商品参数显示
    },
    isParameter () {
      this.isparameter = false // 商品参数隐藏
    },
    openEnsure () {
      this.isensure = true // 保障显示
    },
    isEnsure () {
      this.isensure = false // 保障隐藏
    },
    openCoupon () {
      this.iscoupon = true // 领券显示
      // console.log(this.iscoupon)
    },
    isCoupon () {
      this.iscoupon = false // 领券隐藏
    },
    openDialog () { // 商品信息显示
      this.istrue = true
    },
    isShow () { // 父传子方法，商品信息隐藏
      this.istrue = false
    }
  },
  created () {
    this.isShow()
    this.isCoupon()
    this.isEnsure()
    this.isParameter()
  }
}
</script>

<style lang="scss">
page {
  padding-bottom: 120rpx;
  background-color: #eee;
}
.goods-show {
  // 领券
  .goods-coupon {
    padding: 40rpx 30rpx 20rpx;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-sizing: border-box;
    .l {
      .tip {
        padding: 10rpx;
        font-size: 26rpx;
        border-radius: 6rpx;
        &:nth-of-type(1) {
          color: #fff;
          background: linear-gradient(
            90deg,
            rgba(218, 89, 152, 1) 0%,
            rgba(181, 28, 102, 1) 100%
          );
        }
        &:nth-of-type(2) {
          margin-left: 24rpx;
          color: #da5998;
          background: rgba(255, 237, 246, 1);
        }
      }
    }
    .r {
      display: flex;
      color: #999;
      span {
        font-size: 26rpx;
      }
      .icon-angle-right {
        margin-left: 24rpx;
        font-size: 22rpx;
      }
    }
  }
  // 标题、收藏、分享
  .goods-title-wrap {
    padding: 20rpx 30rpx 40rpx;
    display: flex;
    background-color: #fff;
    .title {
      font-size: 32rpx;
      line-height: 1;
      color: #333;
    }
    .r {
      margin-left: 40rpx;
      display: flex;
      .item {
        width: 42rpx;
        line-height: 1;
        .iconfont {
          font-size: 36rpx;
          line-height: 1;
          color: #999;
          text-align: center;
        }
        span {
          margin-top: 10rpx;
          font-size: 20rpx;
          line-height: 1;
          color: #999;
        }
        &:not(:first-child) {
          margin-left: 40rpx;
        }
      }
    }
  }
  // 发货、活动
  .other-info {
    margin-top: 20rpx;
    padding: 20rpx 30rpx;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .line {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1;
      .l {
        display: flex;
        .tit {
          font-size: 28rpx;
          color: #999;
        }
        .info {
          margin-left: 25rpx;
          display: flex;
          font-size: 28rpx;
          color: #333;
          .iconfont {
            font-size: 28rpx;
            color: #999;
          }
        }
      }
      .r {
        font-size: 28rpx;
        color: #999;
      }
    }
  }
  // 评论列表
  .comment-wrap {
    margin-top: 20rpx;
    padding: 20rpx 0;
    background-color: #fff;
    .line {
      padding: 20rpx 30rpx;
      display: flex;
      justify-content: space-between;
      .l {
        span {
          font-size: 28rpx;
          color: #333;
          line-height: 1;
        }
      }
      .r {
        display: flex;
        align-items: center;
        span {
          font-size: 28rpx;
          color: #b51c66;
          line-height: 1;
        }
        .iconfont {
          margin-left: 15rpx;
          font-size: 28rpx;
          color: #b51c66;
          line-height: 1;
        }
      }
    }
    .item {
      padding: 20rpx 30rpx;
      &:not(:last-child) {
        border-bottom: 1rpx solid #eee;
      }
      .top {
        display: flex;
        align-items: center;
        img {
          width: 44rpx;
          height: 44rpx;
          border-radius: 50%;
        }
        span {
          margin-left: 20rpx;
          font-size: 28rpx;
          color: #999;
        }
      }
      .mid {
        margin-top: 20rpx;
        span {
          font-size: 28rpx;
          color: #333;
        }
        .img-wrap {
          margin-top: 20rpx;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          img {
            flex: 0 0 200rpx;
            margin-bottom: 20rpx;
            width: 200rpx;
            height: 200rpx;
            border-radius: 10rpx;
            &:not(:first-child) {
              margin-left: 20rpx;
            }
          }
        }
      }
      .bottom {
        line-height: 1;
        span {
          font-size: 20rpx;
          line-height: 1;
          color: #999;
        }
      }
    }
  }
  // 底部tab
  .g-tab {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 25rpx 30rpx 25rpx;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    .item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .iconfont {
        font-size: 40rpx;
        line-height: 1;
        color: #b51c66;
        text-align: center;
      }
      span {
        margin-top: 18rpx;
        font-size: 20rpx;
        line-height: 1;
        color: #666;
      }
    }
    .btn-wrap {
      display: flex;
      .btn {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 210rpx;
        height: 70rpx;
        color: #fff;
        &.left-btn {
          font-size: 28rpx;
          line-height: 1;
          border-radius: 35rpx 0 0 35rpx;
          background:linear-gradient(90deg,rgba(240,146,192,1) 0%,rgba(248,126,185,1) 100%);
        }
        &.right-btn {
          font-size: 28rpx;
          line-height: 1;
          border-radius: 0 35rpx 35rpx 0;
          background:linear-gradient(90deg,rgba(209,54,129,1) 0%,rgba(182,29,103,1) 100%);
          small {
            margin-top: 6rpx;
            font-size: 15rpx;
            line-height: 1;
          }
        }
      }

    }
  }
}
</style>