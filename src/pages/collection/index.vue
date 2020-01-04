<template>
  <!-- 我的收藏页 -->
  <div class="my-collection">
    <!-- 我的列表 -->
    <ul class="my-list" v-if="goodsList.length!=0">
      <li v-for="(item, idx) in goodsList" :key="idx"
          class="goods-list"
          @touchstart="touchStart($event)"
          @touchend="touchEnd($event,idx)"
          :data-type="item.type">
        <img :src="item.img_src" class="img">
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="sub">{{item.sub}}人收藏</div>
          <div class="tip" v-show="item.tip" ><span>{{item.tip}}</span></div>
          <div class="bottom">
            <span class="price"><small>￥</small>{{item.price}}</span>
            <span class="btn">找相似</span>
          </div>
        </div>
        <div class="other-item delete" @click="delect(idx)">删除</div>
      </li>
    </ul>

    <!-- 没有收藏 -->
    <div class="empty" v-else>
      <i class="iconfont icon-gouwudai"></i>
      <span class="title">收藏夹空空如也</span>
      <navigator class="link" :url="oLink" open-type="reLaunch" hover-class="none">
        <span>去商城逛逛吧</span>
        <i class="iconfont icon-angle-right"></i>
      </navigator>
    </div>
  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
export default {
  data () {
    return {
      on_off: true, // 判断是否为空
      oLink: '../mall/main', // 空状态商城链接
      goodsList: [ // 收藏列表
        {
          id: 1,
          img_src: '/static/tmp/b007.jpeg',
          title: 'Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥',
          sub: 278,
          tip: '比收藏时降价3.00元',
          price: '6.9',
          type: 0
        },
        {
          id: 2,
          img_src: '/static/tmp/b005.jpg',
          name: 'Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥',
          sub: 278,
          tip: '比收藏时降价3.00元',
          price: '6.9',
          type: 0
        }
      ]
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
        for (let i = 0; i < this.goodsList.length; i++) {
          this.goodsList[i].type = 0
        }
        this.goodsList[index].type = 1
      } else if (this.startX - this.endX < -10) {
        for (let i = 0; i < this.goodsList.length; i++) {
          this.goodsList[i].type = 0
        }
      }
    },
    // 删除
    delect (index) {
      this.goodsList.splice(index, 1)
    }
    // getCollection () { // 获取收藏列表
    //   util.request(api.Collection).then(res => {
    //     if (res.status == 200) {
    //       this.goodsList = res.message
    //     }
    //   })
    // }
  },
  created () {
    // this.getCollection()
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.my-collection {
  .my-list {
    padding: 20rpx 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-top: 1rpx solid #eee;
    li.goods-list {
      margin: 0 0 20rpx 30rpx;
      display: flex;
      width: 820rpx;
      height: 240rpx;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      .img {
        width: 240rpx;
        height: 240rpx;
        border-radius: 10rpx;
      }
      .right {
        margin: 0 30rpx 0 20rpx;
        width: 430rpx;
        display: flex;
        flex-direction: column;
        flex: 1;
        .title {
          font-size: 28rpx;
          color: #333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .sub {
          margin-top: 20rpx;
          font-size: 24rpx;
          color: #666;
        }
        .tip {
          span {
            padding: 5rpx 10rpx;
            font-size: 20rpx;
            color: #666;
            border-radius: 6rpx;
            background-color: #eee;
          }
        }
        .bottom {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          .price {
            display: flex;
            align-items: center;
            font-size: 32rpx;
            font-weight: 600;
            color: #b51c66;
            small {
              font-size: 22rpx;
              font-weight: 400;
            }
          }
          .btn {
            padding: 5rpx 20rpx;
            display: flex;
            align-items: center;
            font-size: 20rpx;
            line-height: 1;
            border-radius: 24rpx;
            color: #999;
            border: 1rpx solid #999;
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
        &.delete {
          background-color: #B51C66;
        }
      }
    }
    li[data-type="0"] {
      transform: translate3d(0, 0, 0);
    }
    li[data-type="1"] {
      transform: translate3d(-100rpx, 0, 0);
    }
  }
  // 空状态
  .empty {
    margin-top: 270rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    i.icon-gouwudai {
      font-size: 170rpx;
      line-height: 1;
      color: #ccc;
    }
    .title {
      margin-top: 45rpx;
      font-size: 26rpx;
      color: #666;
    }
    .link {
      margin-top: 20rpx;
      padding: 20rpx 34rpx;
      display: flex;
      align-items: center;
      border: 1rpx solid #b5b5bf;
      border-radius: 36rpx;
      span {
        font-size: 30rpx;
        line-height: 1;
        color: #666;
      }
      .icon-angle-right {
        margin-left: 20rpx;
        font-size: 22rpx;
        color: #666;
      }
    }
  }
}
</style>