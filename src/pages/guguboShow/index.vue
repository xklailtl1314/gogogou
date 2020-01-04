<template>
  <div class="gugubo-show">
    <!-- 浮层 -->
    <div class="mask-cover">
      <!-- 头部 -->
      <div class="top">
        <!-- 主播信息 -->
        <div class="anchor-info">
          <div class="left">
            <img src="/static/tmp/b005.jpg">
            <div class="wrap">
              <span class="tit">薇娅viya</span>
              <span class="sub">393316观看 | 杭州市</span>
            </div>
          </div>
          <div class="right">
            <div class="btn-follow">
              <i class="iconfont icon-heart"></i>
              <span>关注</span>
            </div>
          </div>
        </div>
        <!-- 房间号及关闭 -->
        <div class="room-wrap">
          <div class="room">
            <div class="t">咕咕播</div>
            <div class="bottom">ID:53707</div>
          </div>
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
      <!-- 底部 -->
      <div class="mask-bottom">
        <div class="comment-wrap">
          <div class="comment">
            
          </div>
          <div class="goods">
            <img src="/static/tmp/b005.jpg">
            <div class="goods-info">
              <span class="goods-name">Air Jordan 1地</span>
              <span class="price">￥1299</span>
            </div>
          </div>
          <div class="input-wrap">
            <img src="/static/tmp/bag.png">
            <input type="text" placeholder="跟主播聊什么">
          </div>
        </div>
        <div class="icon-wrap">
          <i class="iconfont icon-gengduo"></i>
          <i class="iconfont icon-zhuanfa"></i>
          <i class="iconfont icon-heart"></i>
        </div>
      </div>

    </div>

    <!-- 视频占位 -->
    <div class="bg">
      <img src="/static/tmp/zhibo.jpeg">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.gugubo-show {
  .bg {
    width: 100vw;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 浮层
  .mask-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // 头部
    .top {
      margin-top: 100rpx;
      padding: 0 30rpx;
      display: flex;
      justify-content: space-between;
      // 主播信息
      .anchor-info {
        padding: 10rpx;
        display: flex;
        background:rgba(0,0,0,.3);
        border-radius: 90rpx;
        .left {
          display: flex;
          justify-content: space-between;
          img {
            width: 66rpx;
            height: 66rpx;
            border-radius: 50%;
          }
          .wrap {
            margin-left: 20rpx;
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 1;
            .tit {
              font-size: 24rpx;
              color: #fff;
            }
            .sub {
              margin-top: 14rpx;
              font-size: 18rpx;
              color: #B8B8C2;
            }
          }
        }
        .right {
          margin-left: 32rpx;
          display: flex;
          align-items: center;
          .btn-follow {
            padding: 10rpx 14rpx;
            display: flex;
            border-radius: 20rpx;
            line-height: 1;
            background:linear-gradient(90deg,rgba(181,28,102,0.65),rgba(206,72,137,0.65));
            .iconfont {
              font-size: 20rpx;
              color: #fff;
            }
            span {
              margin-left: 6rpx;
              font-size: 18rpx;
              color: #fff;
            }
          }
        }
      }
      // 房间号及关闭
      .room-wrap {
        display: flex;
        align-items: center;
        .room {
          display: flex;
          flex-direction: column;
          width: 100rpx;
          border-radius: 10rpx;
          overflow: hidden;
          .t {
            padding: 10rpx 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20rpx;
            line-height: 1;
            color: #fff;
            background-color: #DA5998;
          }
          .bottom {
            padding: 10rpx 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16rpx;
            line-height: 1;
            color: #B8B8C2;
            background:rgba(0,0,0,.3);
          }
        }
        .iconfont {
          margin-left: 20rpx;
          font-size: 30rpx;
          color: #fff;
        }
      }
    }
    // 底部
    .mask-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0 30rpx 60rpx;
      display: flex;
      align-items: flex-end;
      // margin-top: 50vh;
      width: 100%;
      height: 50vh;
      background-color: rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      .comment-wrap {
        display: flex;
        flex-direction: column;
        .comment {
          width: 370rpx;
          height: 280rpx;
          background-color: lightpink;
        }
        .goods {
          margin-top: 20rpx;
          display: flex;
          width: 370rpx;
          height: 120rpx;
          border-radius: 14rpx;
          background-color: #fff;
          overflow: hidden;
          img {
            width: 122rpx;
            height: 122rpx;
          }
          .goods-info {
            padding: 20rpx;
            display: flex;
            flex-direction: column;
            .goods-name {
              font-size: 28rpx;
              line-height: 1;
              color: #333;
            }
            .price {
              margin-top: 18rpx;
              font-size: 28rpx;
              line-height: 1;
              color: #B51C66;
            }
          }
        }
        .input-wrap {
          margin-top: 20rpx;
          display: flex;
          img {
            width: 70rpx;
            height: 70rpx;
          }
          input {}

        }
      }
      .icon-wrap {
        display: flex;
        justify-content: space-around;
        flex: 1;
        .iconfont {
          padding: 20rpx;
          font-size: 36rpx;
          color: #fff;
        }
      }
    }
  }
}
</style>