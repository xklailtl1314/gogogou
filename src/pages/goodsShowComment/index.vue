<template>
  <div class="goodshow-comment">
    <div class="tip-list">
      <div class="list-wrap">
        <span class="tip active">全部</span>
        <span class="tip">最新</span>
        <span class="tip">有图</span>
        <span class="tip">视频</span>
        <span class="tip">追加</span>
        <span class="tip">质量好</span>
        <span class="tip">穿着舒适</span>
        <span class="tip">很便宜</span>
      </div>
      <i class="iconfont icon-arrow-bottom_s"></i>
    </div>

    <!-- 评论列表 -->
    <div class="comment-wrap">
      <!-- <div class="line">
        <div class="l">
          <span>商品评价（26）</span>
        </div>
        <div class="r">
          <span>查看全部</span>
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div> -->
      <div class="item">
        <img src="/static/images/ad.jpg" class="avatar">
        <div class="right">
          <div class="top">
            <div class="r">
              <span class="name">虎狮狼右兵卫</span>
              <span class="sub">2019-11-29 颜色分类：粉色</span>
            </div>
          </div>
          <div class="mid">
            <span>衣服不错，特别好看又舒服。从衣服设计上来说，图案本身就不错，很有吸引力，看着比较舒服，反正我超...</span>
            <div class="img-wrap">
              <img src="/static/images/ad.jpg">
              <img src="/static/images/ad.jpg">
            </div>
          </div>
          <!-- <div class="bottom">
            <span>浏览 298 次</span>
            <div class="r">
              <div class="i">
                <i class="iconfont icon-i-message"></i>
                <span>评论</span>
              </div>
              <div class="i">
                <i class="iconfont icon-dianzan"></i>
                <span>点赞</span>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.goodshow-comment {
  .tip-list {
    padding: 20rpx 30rpx;
    background-color: #fff;
    .list-wrap {
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      .tip {
        padding: 10rpx 15rpx;
        margin-bottom: 15rpx;
        display: flex;
        font-size: 24rpx;
        line-height: 1;
        color: #666;
        border-radius: 30rpx;
        border: 1rpx solid #ccc;
        box-sizing: border-box;
        &.active {
          color: #DA5998;
          background-color: #FEEDF7;
          border: 1rpx solid #DA5998;
        }
        &:not(:first-child) {
          margin-left: 15rpx;
        }
      }
    }
    .iconfont {
      display: flex;
      justify-content: center;
    }
  }

    // 评论列表
  .comment-wrap {
    // margin-top: 20rpx;
    padding: 20rpx 0;
    background-color: #fff;
    // .line {
    //   padding: 20rpx 30rpx;
    //   display: flex;
    //   justify-content: space-between;
    //   .l {
    //     span {
    //       font-size: 28rpx;
    //       color: #333;
    //       line-height: 1;
    //     }
    //   }
    //   .r {
    //     display: flex;
    //     align-items: center;
    //     span {
    //       font-size: 28rpx;
    //       color: #b51c66;
    //       line-height: 1;
    //     }
    //     .iconfont {
    //       margin-left: 15rpx;
    //       font-size: 28rpx;
    //       color: #b51c66;
    //       line-height: 1;
    //     }
    //   }
    // }
    .item {
      padding: 20rpx 30rpx;
      display: flex;
      &:not(:last-child) {
        border-bottom: 1rpx solid #eee;
      }
      .avatar {
        width: 72rpx;
        height: 72rpx;
        border-radius: 50%;
      }
      .right {
        display: flex;
        flex: 1;
        flex-direction: column;
        .top {
          display: flex;
          align-items: center;
          // img {
          //   width: 72rpx;
          //   height: 72rpx;
          //   border-radius: 50%;
          // }
          .r {
            margin-left: 20rpx;
            display: flex;
            flex-direction: column;
            .name {
              font-size: 26rpx;
              line-height: 1;
              color: #666;
            }
            .sub {
              margin-top: 15rpx;
              font-size: 24rpx;
              line-height: 1;
              color: #999;
            }
          }
          // span {
          //   margin-left: 20rpx;
          //   font-size: 28rpx;
          //   color: #999;
          // }
        }
        .mid {
          margin-top: 20rpx;
          line-height: 1;
          span {
            font-size: 26rpx;
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
        // .bottom {
        //   display: flex;
        //   justify-content: space-between;
        //   line-height: 1;
        //   span {
        //     font-size: 20rpx;
        //     line-height: 1;
        //     color: #999;
        //   }
        //   .r {
        //     display: flex;
        //     .i {
        //       display: flex;
        //       // font-size: 20rpx;
        //       line-height: 1;
        //       color: #666;
        //       &:not(:first-child) {
        //         margin-left: 40rpx;
        //       }
        //       .iconfont {
        //         font-size: 20rpx;
        //         color: #666;
        //       }
        //       span {
        //         margin-left: 15rpx;
        //         font-size: 20rpx;
        //         color: #666;
        //       }
        //     }
        //   }
        // }
      }
    }
  }
}
</style>