<template>
  <div class="limitBuy">
    <div class="top">
      <div class="left">
        <span class="title">限时秒杀</span>
        <span class="sub">已开抢</span>
      </div>
      <div class="wrap">
        <ul class="tab-title">
          <li @click="cur=idx" :class="['tabT', {active:cur==idx}]" v-for="(item,idx) in xsmsFirstThree" :key="idx">
            <span>{{item.oTime}}</span>
            <label>{{item.timeState}}</label>
          </li>
        </ul>
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
import util from '@/utils/index.js'
import api from '@/../config/api.js'
export default {
  data () {
    return {
      toShow: '', // 按钮文字
      msg: new Date(('2019-12-16 10:00:00').replace(/-/g, '/')).getTime(),
      endMsg: '倒计时结束',
      sTime: new Date(('2019-12-16 8:00:00').replace(/-/g, '/')).getTime(),
      cur: 0, // 限时秒杀tab切换
      newArr: [], // 限时秒杀，过滤当前时间数组
      // xsms: []
      xsms: [ // 限时秒杀假数据
        // {startTime: '2019-12-16 08:00:00', timeState: '', content: '0000'},
        // {startTime: '2019-12-16 10:00:00', timeState: '', content: '0000'},
        // {startTime: '2019-12-16 12:00:00', timeState: '', content: '0000'},
        // {startTime: '2019-12-16 14:00:00', timeState: '', content: '0000'},
        // {startTime: '2019-12-16 16:00:00', timeState: '', content: '0000'},
        // {startTime: '2019-12-16 18:00:00', timeState: '', content: '1111'},
        // {startTime: '2019-12-16 20:00:00', timeState: '', content: '2222'},
        // {startTime: '2019-12-16 22:00:00', timeState: '', content: '3333'}
      ]
    }
  },
  methods: {
    getXsms () { // 获取限时秒杀数据
      util.request(api.LimitBuy).then(res => {
        if (res.status == 200) {
          this.xsms = res.timeBuy.xsms

          this.xsms.map(item => { // 现实秒杀时间格式化，获取时，分
            let dt = new Date(item.startTime.replace(/-/g, '/'))
            let hh = (dt.getHours()).toString().padStart(2, '0')
            let mm = (dt.getMinutes()).toString().padStart(2, '0')
            item.oTime = `${hh}:${mm}`
          })

          this.xsms.forEach(item => { // 过滤当前时间数组
            var dt = new Date(item.startTime.replace(/-/g, '/'))
            var hh = dt.getHours()
            if (hh >= this.getTimeDbl) {
              let newArr = [...this.newArr]
              newArr.push(item)
              // console.log(this.newArr)
              this.newArr = newArr
            }
          })

          this.newArr.slice(0, 4).forEach(item => {
            let dt = new Date(item.startTime)
            let hh = dt.getHours() // 数据字段时间小时
            let chh = (new Date()).getHours() // 当前时间小时
            if (chh >= hh && chh < hh + 2) {
              item.timeState = '进行中'
            } else {
              item.timeState = '时间未到'
            }
          })
        }
      })
    }
    // getCurrentTime () { // 现实秒杀时间格式化，获取时，分
    //   console.log(this.xsms)
    //   this.xsms.map(item => {
    //     let dt = new Date(item.startTime)
    //     let hh = (dt.getHours()).toString().padStart(2, '0')
    //     let mm = (dt.getMinutes()).toString().padStart(2, '0')
    //     item.oTime = `${hh}:${mm}`
    //   })
    // },

    // getNewArr () { // 过滤当前时间数组
    //   this.xsms.forEach(item => {
    //     var dt = new Date(item.startTime)
    //     var hh = dt.getHours()
    //     // console.log(hh)
    //     if (hh >= this.getTimeDbl) {
    //       this.newArr.push(item)
    //       console.log(this.newArr)
    //       return this.newArr
    //     }
    //   })
    // },
    // timeToCount () { // 现实秒杀-开启倒计时
    //   this.newArr.slice(0, 4).forEach(item => {
    //     let dt = new Date(item.startTime)
    //     let hh = dt.getHours() // 数据字段时间小时
    //     let chh = (new Date()).getHours() // 当前时间小时
    //     if (chh >= hh && chh < hh + 2) {
    //       item.timeState = '进行中'
    //       // console.log(item.timeState)
    //     } else {
    //       item.timeState = '时间未到'
    //       // console.log(item.timeState)
    //     }
    //   })
    // }
  },
  computed: {
    xsmsFirstThree () { // 取限时秒杀前三项
      // console.log(this.newArr)
      return this.newArr.slice(0, 4)
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
  created () {
    this.getXsms()
    // this.getCurrentTime()
    // this.getNewArr()
    // console.log(this.getTimeDbl)
    // this.timeToCount()
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.limitBuy {
  .top {
    // margin-top: 44rpx;
    padding: 20rpx 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to right, #b61c66, #DA5897);
    .left {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 30rpx;
        font-weight: bold;
        color: #fff;
        line-height: 1;
      }
      .sub {
        margin-top: 20rpx;
        font-size: 20rpx;
        color: #fff;
        text-align: center;
      }
    }
    .wrap {
      display: flex;
      align-items: center;
      .tab-title {
        display: flex;
        height: 60rpx;
        .tabT {
          display: flex;
          flex-direction: column;
          &:not(:first-child) {
            margin-left: 60rpx;
          }
          span {
            font-size: 22rpx;
            font-weight: bold;
            line-height: 1;
            color: #FF9ECD;
            text-align: center;
          }
          label {
            margin-top: 20rpx;
            font-size: 20rpx;
            line-height: 1;
            color: #FF9ECD;
            text-align: center;
          }
          &.active {
            label,
            span {
              color: #fff;
            }
          }
        }
      }
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