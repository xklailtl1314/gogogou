<template>
  <div class="timeBuy">
    <div class="top">
      <div class="left">
        <span class="title">{{timeBuy.title}}</span>
        <downTime :endTime="msg" :sTime="sTime" :endMsg="endMsg"></downTime>
      </div>
      <div class="wrap">
        <ul class="tab-title">
          <li @click="cur=idx" :class="['tabT', {active:cur==idx}]" v-for="(item,idx) in xsmsFirstThree" :key="idx">
            <span>{{item.oTime}}</span>
            <label>{{item.timeState}}</label>
          </li>
        </ul>
        <navigator class="more" hover-class="none" :url="limitBuyLink">
          <span>查看更多</span>
          <i class="iconfont icon-angle-right"></i>
        </navigator>
      </div>
    </div>

    <div class="tab-content">
      <div v-show="cur==idx" v-for="(item,idx) in xsmsFirstThree" :key="idx">
        <navigator class="list-item" v-for="item1 in item.content" :key="item1.id">
          <div class="wrapping">
            <img :src="item1.img_src">
            <div class="info">
              <h4 class="title">{{item1.title}}</h4>
              <span class="sub">{{item1.sub}}</span>
              <div class="bottom">
                <div class="left">
                  <div class="current"><span>￥</span>{{item1.price}}</div>
                  <del>￥{{item1.oldPrice}}</del>
                </div>
                <div class="goShop">{{toShow}}</div>
              </div>
            </div>
          </div>
        </navigator>
      </div>
    </div>
  </div>
</template>

<script>
import downTime from '@/components/DownTime.vue' // 倒计时
export default {
  props: ['timeBuy', 'limitBuyLink'],
  data () {
    return {
      // oSelect: false, // 判断是否可点
      toShow: '', // 按钮文字
      msg: new Date('2019-12-16 10:00:00').getTime(),
      endMsg: '倒计时结束',
      sTime: new Date('2019-12-16 8:00:00').getTime(),
      cur: 0, // 限时秒杀tab切换
      newArr: [], // 限时秒杀，过滤当前时间数组
      xsms: [ // 限时秒杀假数据
        {startTime: '2019-12-16 08:00:00', timeState: '', content: '0000'},
        {startTime: '2019-12-16 10:00:00', timeState: '', content: '0000'},
        {startTime: '2019-12-16 12:00:00', timeState: '', content: '0000'},
        {startTime: '2019-12-16 14:00:00', timeState: '', content: '0000'},
        {startTime: '2019-12-16 16:00:00', timeState: '', content: '0000'},
        {startTime: '2019-12-16 18:00:00', timeState: '', content: '1111'},
        {startTime: '2019-12-16 20:00:00', timeState: '', content: '2222'},
        {startTime: '2019-12-16 22:00:00', timeState: '', content: '3333'}
      ],
      xsmsList: [],
      contentArr: []
    }
  },
  components: {
    downTime
  },
  methods: {
    getCurrentTime () { // 现实秒杀时间格式化，获取时，分
      this.timeBuy.xsms.map(item => {
        let dt = new Date(item.startTime)
        let hh = (dt.getHours()).toString().padStart(2, '0')
        let mm = (dt.getMinutes()).toString().padStart(2, '0')
        item.oTime = `${hh}:${mm}`
      })
    },
    getNewArr () { // 过滤当前时间数组
      this.timeBuy.xsms.forEach(item => {
        var dt = new Date(item.startTime)
        var hh = dt.getHours()
        if (hh >= this.getTimeDbl) {
          this.newArr.push(item)
          return this.newArr
        }
      })
    },
    timeToCount () { // 现实秒杀-开启倒计时
      this.newArr.slice(0, 3).forEach(item => {
        let dt = new Date(item.startTime)
        let hh = dt.getHours() // 数据字段时间小时
        let chh = (new Date()).getHours() // 当前时间小时
        if (chh >= hh && chh < hh + 2) {
          item.timeState = '进行中'
          // this.toShow = '去抢购'
        } else {
          item.timeState = '时间未到'
          // this.toShow = '时间未到'
        }
      })
      // this.newArr.slice(0, 1).forEach(item => {
      //   item.content.forEach(item => {
      //     this.toShow = '进行中'
      //   })
      // })
      // this.newArr.slice(1, 3).forEach(item => {
      //   item.content.forEach(item => {
      //     this.toShow = '未开始'
      //   })
      // })
    }
  },
  computed: {
    xsmsFirstThree () { // 取限时秒杀前三项
      // console.log(this.newArr.slice(0, 3))
      // console.log(this.newArr.slice(0, 1))
      // console.log(this.newArr.slice(1, 3))
      return this.newArr.slice(0, 3)
    },
    getTimeDbl () { // 本机小时向下取整
      var chh = (new Date()).getHours() // 获取本机时间小时
      if (chh % 2 === 0) {
        return chh
      } else {
        return chh - 1
      }
    }
  },
  created () {},
  mounted () {
    this.getCurrentTime()
    this.getNewArr()
    this.timeToCount()
  }
}
</script>

<style lang="scss">
.timeBuy {
  .top {
    margin-top: 44rpx;
    padding: 0 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 30rpx;
        font-weight: bold;
        line-height: 1;
      }
      .downTime-wrapper {
        margin-top: 12rpx;
        padding: 0 2rpx;
        font-size: 24rpx;
        line-height: 1;
        // background-color: black;
        .hour,
        .minute,
        .second {
          padding: 2rpx 4rpx;
          background-color: #b7246b;
          border-radius: 4rpx;
        }
        color: #fff;
        .second {
          color: #fff;
        }
        .dot {
          padding: 0 2rpx;
          background-color: #fff;
          color: #b7246b;
        }
      }
    }
    .wrap {
      display: flex;
      align-items: center;
      .tab-title {
        display: flex;
        .tabT {
          display: flex;
          flex-direction: column;
          &:not(:first-child) {
            margin-left: 20rpx;
          }
          span {
            font-size: 22rpx;
            font-weight: bold;
            line-height: 1;
            text-align: center;
          }
          label {
            margin-top: 10rpx;
            font-size: 20rpx;
            line-height: 1;
            text-align: center;
          }
          &.active {
            color: #b7246b;
          }
        }
      }
    }
    .more {
      margin-left: 62rpx;
      display: flex;
      align-items: center;
      font-size: 26rpx;
      color: #999;
    }
  }
  .tab-content {
    margin-top: 20rpx;
    padding: 0 20rpx;
    .list-item {
      margin-bottom: 24rpx;
      height: 238rpx;
      border-radius: 14rpx;
      background-color: #fff;
      overflow: hidden;
      .wrapping {
        display: flex;
        img {
          display: flex;
          width: 238rpx;
          height: 238rpx;
        }
        .info {
          padding: 20rpx;
          display: flex;
          flex: 1;
          flex-direction: column;
          .title {
            font-size: 26rpx;
            line-height: 38rpx;
          }
          .sub {
            margin-top: 12rpx;
            font-size: 20rpx;
            line-height: 1;
          }
          .bottom {
            margin-top: auto;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            .left {
              display: flex;
              .current {
                font-size: 26rpx;
                font-weight: bold;
                color: #b4145e;
                span {
                  font-size: 18rpx;
                }
              }
              del {
                margin-left: 20rpx;
                display: flex;
                align-items: center;
                font-size: 16rpx;
                text-decoration: line-through;
              }
            }
            .goShop {
              padding: 10rpx 36rpx;
              display: flex;
              font-size: 26rpx;
              line-height: 1;
              color: #fff;
              border-radius: 23rpx;
              background-image: linear-gradient(to right, #DA5797, #B61E67);
            }
          }
        }
      }
    }
  }
}
</style>