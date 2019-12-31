<template>
  <div class="gugubo">
    <div class="custom-wrap">
      <!-- 背景图 -->
      <div :class="['header-bg', cur==0?'height_one':'height_two']"></div>
      <!-- 头部图片 -->
      <div class="title">
        <img src="/static/images/gugubo.png" >
      </div>
      <!-- 两栏 -->
      <div class="tab-title">
        <div @click="cur=0" :class="['item', {active:cur==0}]"><span>咕咕购-直播</span></div>
        <div @click="cur=1" :class="['item', {active:cur==1}]"><span>我的关注</span></div>
      </div>
      <div class="tab-content">
        <!-- 咕咕购-直播-栏目一 -->
        <div v-show="cur==0">
          <!-- 轮播 -->
          <div class="swiper-wrap">
            <swiper class="bannerBox" autoplay circular interval="3000" duration="500" previous-margin="50rpx" next-margin="50rpx" @change="bannerChange">
              <block v-for="(banner,inx) in bannerData" :key="banner.id">
                <swiper-item class="swiper-i">
                  <div class="wrap">
                    <navigator >
                      <image class="banner" :class="{active: currentBannerIndex==inx}" :src="banner.src" mode="aspectFill" />
                    </navigator>
                  </div>
                </swiper-item>
              </block>
            </swiper>
            <div class="bannerDots">
              <div class="dot" :class="{active: currentBannerIndex==inx}" v-for="(banner,inx) in bannerData" :key="banner.id"></div>
            </div>
          </div>
          <!-- 列表 -->
          <div class="hot-list">
            <div class="item">
              <div class="left">
                <img src="/static/images/ad.jpg">
                <div class="top">
                  <i class="iconfont icon-tongji"></i>
                  <span>4947观看</span>
                </div>
                <div class="bottom">
                  <i class="iconfont icon-heart"></i>
                  <span>82.82万</span>
                </div>
              </div>
              <div class="right">
                <div class="tit">美少女最爱的粉系化妆刷</div>
                <div class="m">
                  <img src="/static/images/ad.jpg">
                  <div class="wrap">
                    <span class="name">小美美妆屋</span>
                    <span class="site">杭州</span>
                  </div>
                </div>
                <div class="two-tui">
                  <div class="l">
                    <img src="/static/images/ad.jpg">
                    <span>￥2999</span>
                  </div>
                  <div class="r">
                    <img src="/static/images/ad.jpg">
                    <div class="wrap">
                      <span>500</span>
                      <label>宝贝</label>
                    </div>
                  </div>
                </div>
                <span class="tip">#韩国馆</span>
              </div>
            </div>

            <div class="item">
              <div class="left">
                <img src="/static/images/ad.jpg">
                <div class="top">
                  <i class="iconfont icon-tongji"></i>
                  <span>4947观看</span>
                </div>
                <div class="bottom">
                  <i class="iconfont icon-heart"></i>
                  <span>82.82万</span>
                </div>
              </div>
              <div class="right">
                <div class="tit">美少女最爱的粉系化妆刷</div>
                <div class="m">
                  <img src="/static/images/ad.jpg">
                  <div class="wrap">
                    <span class="name">小美美妆屋</span>
                    <span class="site">杭州</span>
                  </div>
                </div>
                <div class="two-tui">
                  <div class="l">
                    <img src="/static/images/ad.jpg">
                    <span>￥2999</span>
                  </div>
                  <div class="r">
                    <img src="/static/images/ad.jpg">
                    <div class="wrap">
                      <span>500</span>
                      <label>宝贝</label>
                    </div>
                  </div>
                </div>
                <span class="tip">#韩国馆</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 我的关注-栏目二 -->
        <div v-show="cur==1" class="my-concern">
          <h3 class="tit">我的关注</h3>
          <div class="my-concern-list">
            <div class="item">
              <div class="top">
                <img src="/static/tmp/b005.jpg">
                <div class="num">
                  <i class="iconfont icon-tongji"></i>
                  <span>4947观看</span>
                </div>
              </div>
              <div class="bottom">
                <img src="/static/tmp/b005.jpg">
                <span class="name">INKjewelry轻珠宝</span>
              </div>
            </div>

            <div class="item">
              <div class="top">
                <img src="/static/tmp/b005.jpg">
                <div class="num">
                  <i class="iconfont icon-tongji"></i>
                  <span>4947观看</span>
                </div>
              </div>
              <div class="bottom">
                <img src="/static/tmp/b005.jpg">
                <span class="name">INKjewelry轻珠宝</span>
              </div>
            </div>

            <div class="item">
              <div class="top">
                <img src="/static/tmp/b005.jpg">
                <div class="num">
                  <i class="iconfont icon-tongji"></i>
                  <span>4947观看</span>
                </div>
              </div>
              <div class="bottom">
                <img src="/static/tmp/b005.jpg">
                <span class="name">INKjewelry轻珠宝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 0, // 默认选中第一个tab
      bannerData: [ // 轮播数据
        {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1410699069,2629528698&fm=26&gp=0.jpg',
          id: 0
        },
        {
          src: 'http://img.tupianzj.com/uploads/allimg/160810/9-160Q0161301.jpg',
          id: 1
        },
        {
          src: 'http://image2.cnpp.cn/upload/images/20180725/17473224963_1170x700.jpg',
          id: 2
        }
      ],
      currentBannerIndex: 0 // 轮播默认
    }
  },
  methods: {
    bannerChange (e) { // 轮播切换
      let current = e.mp.detail.current
      this.currentBannerIndex = current
    }
  }
}
</script>

<style lang="scss">
  page {
    background-color: #eee;
  }
  .gugubo {
    .custom-wrap {
      position: relative;
      padding-top: 105rpx;
      .header-bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        background:linear-gradient(90deg,rgba(181,28,102,1) 0%,rgba(218,89,152,1) 100%);
        &.height_one {
          height: 442rpx;
        }
        &.height_two {
          height: 280rpx;
        }
      }
      .title {
        // margin-top: 105rpx;
        display: flex;
        justify-content: center;
        img {
          width: 190rpx;
          height: 50rpx;
        }
      }
      .tab-title {
        margin-top: 45rpx;
        display: flex;
        .item {
          display: flex;
          flex: 1;
          justify-content: center;
          &.active {
            span {
              color: #fff;
              border-bottom: 3rpx solid #fff;
            }
          }
          span {
            padding: 10rpx;
            display: flex;
            font-size: 30rpx;
            color: #FF9ECD;
            border-bottom: 3rpx solid transparent;
          }
        }
      }
      .tab-content {
        .swiper-wrap {
          margin-top: 20rpx;
          .bannerBox{
            // height: 208px;
            height: 400rpx;
            .swiper-i {
              // width: 470rpx;
              // transform: translate(80%, 0px) translateZ(0px) !important;
              width: 80% !important;
              // &:nth-of-type(1) {
              //   transform: translate(0%, 0px) translateZ(0px) !important;
              // }
              // &:nth-of-type(2) {
              //   transform: translate(74%, 0px) translateZ(0px) !important;
              // }
              // &:nth-of-type(3) {
              //   transform: translate(148%, 0px) translateZ(0px) !important;
              // }
              // &:nth-of-type(4) {
              //   transform: translate(222%, 0px) translateZ(0px) !important;
              // }
              // &:nth-of-type(5) {
              //   transform: translate(296%, 0px) translateZ(0px) !important;
              // }
              .wrap {
                height: 370rpx;
                width: 470rpx;
                .banner {
                  overflow: hidden;
                  // height: 168px;
                  height: 370rpx;
                  width: 470rpx;
                  transition: transform 500ms;
                  transform: scale(0.95,0.9);  /* 因为非主图看不清，所以可以变形处理 */
                  border-radius: 8px;
                  // box-shadow: 0px 6px 10px 0px rgba(179,154,139,1);
                  &.active{
                    transform: scale(1,1);
                  }
                }
              }
            }
          }
          .bannerDots{
            display: flex;
            justify-content: center;
            width: 100%;
            left: 0;
            bottom: 40px;
            height: 6px;
            .dot {
              width: 6px;
              height: 6px;
              margin: 0 3px;
              border-radius: 3px;
              background-color: #fff;
              &.active{
                width: 15px;
                background-color: #B51C66;
              }
            }
          }
        }

        .hot-list {
          margin-top: 30rpx;
          padding: 0 30rpx;
          display: flex;
          flex-direction: column;
          .item {
            display: flex;
            height: 380rpx;
            border-radius: 14rpx;
            overflow: hidden;
            &:not(:first-child) {
              margin-top: 20rpx;
            }
            .left {
              position: relative;
              display: flex;
              width: 400rpx;
              img {
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                width: 100%;
              }
              .top {
                position: absolute;
                top: 16rpx;
                left: 16rpx;
                padding-right: 20rpx;
                display: flex;
                align-items: center;
                background:rgba(42,42,46,.2);
                border-radius: 20rpx;
                .iconfont {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 38rpx;
                  height: 38rp;
                  font-size: 20rpx;
                  color: #fff;
                  border-radius: 50%;
                  background:linear-gradient(180deg,rgba(206,72,137,1),rgba(181,28,102,1));
                }
                span {
                  margin-left: 10rpx;
                  font-size: 20rpx;
                  color: #fff;
                }
              }
              .bottom {
                position: absolute;
                right: 15rpx;
                bottom: 15rpx;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                .iconfont {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 40rpx;
                  height: 40rpx;
                  font-size: 20rpx;
                  color: #fff;
                  background-color: #D33883;
                  border-radius: 50%;
                }
                span {
                  margin-top: 8rpx;
                  font-size: 20rpx;
                  line-height: 1;
                  color: #fff;
                }
              }
            }
            .right {
              padding: 20rpx;
              display: flex;
              flex-direction: column;
              width: 290rpx;
              background-color: #fff;
              .tit {
                font-size: 28rpx;
                color: #333;
                line-height: 1;
              }
              .m {
                padding-bottom: 20rpx;
                margin: 20rpx 0 0;
                display: flex;
                border-bottom: 1rpx solid #eee;
                img {
                  width: 56rpx;
                  height: 56rpx;
                  border-radius: 50%;
                }
                .wrap {
                  margin-left: 10rpx;
                  display: flex;
                  flex-direction: column;
                  .name {
                    font-size: 20rpx;
                    color: #D33883;
                  }
                  .site {
                    font-size: 16rpx;
                    color: #999;
                  }
                }
              }
              .two-tui {
                margin-top: 20rpx;
                display: flex;
                justify-content: space-around;
                .l {
                  position: relative;
                  width: 116rpx;
                  height: 116rpx;
                  border-radius: 14rpx;
                  overflow: hidden;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                  span {
                    position: absolute;
                    left: 5rpx;
                    bottom: 5rpx;
                    font-size: 16rpx;
                    color: #fff;
                  }
                }
                .r {
                  position: relative;
                  width: 116rpx;
                  height: 116rpx;
                  border-radius: 8rpx;
                  overflow: hidden;
                  &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.3);
                  }
                  img {
                    width: 100%;
                    height: 100%;
                  }
                  .wrap {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 16rpx;
                    color: #fff;
                    line-height: 1;
                    span {}
                    label {}
                  }
                }
              }
              .tip {
                margin-top: 20rpx;
                font-size: 18rpx;
                color: #DA5998;
              }
            }
          }
        }

        .my-concern {
          .tit {
            padding: 0 30rpx;
            margin-top: 30rpx;
            font-size: 30rpx;
            line-height: 1;
            color: #333;
          }
          .my-concern-list {
            padding: 0 30rpx;
            margin-top: 20rpx;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
            .item {
              margin-bottom: 20rpx;
              flex: 0 0 335rpx;
              width: 335rpx;
              &:nth-of-type(2n) {
                margin-left: 20rpx;
              }
              .top {
                position: relative;
                width: 335rpx;
                height: 335rpx;
                img {
                  width: 335rpx;
                  height: 335rpx;
                  border-radius: 10rpx;
                }
                .num {
                  position: absolute;
                  bottom: 16rpx;
                  left: 16rpx;
                  padding-right: 20rpx;
                  display: flex;
                  align-items: center;
                  background:rgba(42,42,46,.2);
                  border-radius: 20rpx;
                  .iconfont {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 38rpx;
                    height: 38rp;
                    font-size: 20rpx;
                    color: #fff;
                    border-radius: 50%;
                    background:linear-gradient(180deg,rgba(206,72,137,1),rgba(181,28,102,1));
                  }
                  span {
                    margin-left: 10rpx;
                    font-size: 20rpx;
                    color: #fff;
                  }
                }
              }
              .bottom {
                margin-top: 15rpx;
                display: flex;
                align-items: center;
                img {
                  width: 40rpx;
                  height: 40rpx;
                  border-radius: 50%;
                }
                .name {
                  margin-left: 15rpx;
                  font-size: 26rpx;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }

</style>