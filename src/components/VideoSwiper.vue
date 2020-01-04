<template>
  <div class="video-swiper">
    <!-- 视频轮播 -->
    <div class="swiper-wrap">
      <swiper
        @change="changeImg"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration" >
        <swiper-item v-if='oVideo'>
          <view class='ceng'>
            <image :src="mdc_videofenmian" :hidden="xiaoshi"/>
            <view class='btn-wrap' :hidden="xiaoshi">
              <div class="player" @tap="bindPlay">
                <i class="iconfont icon-bofang"></i>
                <span>00'52''</span>
              </div>
            </view>
            <video
              :hidden="mdc_show"
              class="mdcVideo"
              :src="mdc_video"
              objectFit="cover"
              @touchmove="mdc_move1"
              controls id="mdcVideo">
              <cover-view class='mdc_return' @tap='returnquanping'>退出全屏</cover-view>
            </video>
          </view>
        </swiper-item>

        <block v-for="(item, idx) in imgUrls" :key="idx">
          <swiper-item>
            <image :src="item"/>
          </swiper-item>
        </block>
      </swiper>

      <div class="item-num" v-show="!xiaoshi">
        <div class="wrap">
          <span class="current">{{activeIndex+1}}</span>
          <label>/</label>
          <span class="total">{{showLength}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        '/static/tmp/b005.jpg'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      mdc_video: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      mdc_videofenmian: '/static/tmp/b005.jpg',
      xiaoshi: false, // 视频的封面图显示消失的参数
      mdc_show: true, // 视频显示消失的参数
      activeIndex: 0, // 页面个数
      oVideo: true
    }
  },
  methods: {
    bindPlay (e) { // 视频播放
      var that = this
      that.videoContext = wx.createVideoContext('mdcVideo')
      that.videoContext.pause()
      setTimeout(function () {
        that.videoContext.play()
      }, 150)
      this.xiaoshi = true
      this.mdc_show = false
    },
    // 安卓系统能检测到 video touchemove 滑动的x距离，已此作为切换的swiper的凭证
    // ios系统，检测不到video touchemove 滑动的x距离，通过cover-view 点击事件进行切换
    mdc_move1 (e) {
      var that = this
      console.log(e)
      console.log(e.touches[0].pageX)
      that.videoContext = wx.createVideoContext('mdcVideo')
      if (e.touches[0].clientX > 20) {
        console.log(5555555555555555)
        // that.videoContext.pause();
        this.xiaoshi = false
        this.mdc_show = true
      }
    },
    returnquanping (e) { // 点击退出视频触发
      var that = this
      this.xiaoshi = false
      this.mdc_show = true
    },
    changeImg (e) { // 轮播数量-获取当前个数
      this.activeIndex = e.target.current
    },
    isVideo () { // 判断video字段不存在
      if (this.mdc_video.trim().length == 0) {
        this.oVideo = false
      }
    }
  },
  computed: {
    showLength () { // 轮播图总数
      return this.oVideo == true ? this.imgUrls.length + 1 : this.imgUrls.length
    }
  },
  created () {
    this.isVideo()
  }
}
</script>

<style lang="scss">
.video-swiper {
  // 带视频轮播
  .swiper-wrap {
    position: relative;
    width: 100%;
    height: 750rpx;
    .item-num {
      position: absolute;
      right: 0;
      bottom: 20rpx;
      width: 94rpx;
      height: 38rpx;
      border-radius: 19rpx 0 0 19rpx;
      background-color: #666;
      color: #fff;
      .wrap {
        padding: 6rpx 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        .current {
          font-size: 26rpx;
          line-height: 1;
        }
        label {
          margin: 0 4rpx;
          font-size: 15rpx;
          line-height: 1;
        }
        .total {
          font-size: 15rpx;
          line-height: 1;
        }
      }
    }
    swiper {
      width: 100%;
      height: 100%;
      z-index: 9999999999999999999;
      swiper-item {
        width: 100%;
        height: 100%;
        background-color: #eee;
        image {
          width: 100%;
          height: 100%;
        }
        .ceng {
          position: relative;
          width: 100%;
          height: 100%;
          .btn-wrap {
            position: absolute;
            left: 50%;
            bottom: 23rpx;
            transform: translateX(-50%);
            .player {
              display: flex;
              align-items: center;
              width: 160rpx;
              height: 52rpx;
              border-radius: 26rpx;
              background-color: rgba(255,255,255,0.5);
              .icon-bofang {
                margin-left: 6rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 44rpx;
                height: 44rpx;
                font-size: 26rpx;
                color: #fff;
                border-radius: 50%;
                background:linear-gradient(90deg,rgba(218,89,152,1) 0%,rgba(181,28,102,1) 100%);
              }
              span {
                margin-left: 20rpx;
                font-size: 20rpx;
                color: #333
              }
            }
          }
          .mdcVideo {
            width: 100%;
            height: 100%;
            .mdc_return {
              position: absolute;
              left: calc(50% - 80rpx);
              bottom: 160rpx;
              color: #333;
              padding: 10rpx;
              width: 160rpx;
              text-align: center;
              line-height: 40rpx;
              border-radius:30rpx;
              background:rgba(255,255,255,0.6);
            }
          }
        }
      }
    }
  }
}
</style>