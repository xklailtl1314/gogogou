<template>
  <div class="cates">
    <!-- 商品分类 -->
    <!-- 搜索 -->
    <navigator url="../search/main" class="search" hover-class="none">
      <i class="iconfont icon-search1"></i>
      <span>进口零食</span>
    </navigator>
    <!-- 左右布局 -->
    <div class="cates-wrap">
      <scroll-view scroll-y class="left-menu">
        <span @click="cur=idx" :class="[{active: cur==idx}]" v-for="(item, idx) in leftMenu" :key="idx">{{item}}</span>
      </scroll-view>
      <scroll-view scroll-y class="right-container">
        <div v-show="cur==idx" v-for="(item, idx) in rightContent" :key="idx">
          <div v-for="(item1, i) in item" :key="i">
            <span class="child-title">{{item1.title}}</span>
            <div class="child-cont">
              <div v-for="(item2, i2) in item1.info" :key="i2" class="child-item">
                <img :src="item2.img_src">
                <span>{{item2.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>

  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
export default {
  data () {
    return {
      cur: 0, // tab切换初始值
      allCates: [], // 所有对象
      leftMenu: [], // 左侧列表
      rightContent: [] // 右侧内容
    }
  },
  components: {},
  methods: {
    getCates () { // 获取所有对象
      util.request(api.Cates).then(res => {
        if (res.status == 200) {
          this.allCates = res.cates // 获取所有数据
          this.leftMenu = this.allCates.map(item => item.oTitle) // 获取左侧列表
          this.rightContent = this.allCates.map(itemA => itemA.message) // 获取右侧数据
        }
      })
    }
  },
  created () {
    this.getCates()
  }
}
</script>

<style lang="scss">
  page {
    height: 100%;
  }
  .cates {
    height: 100%;
    .search {
      position: relative;
      margin: 0 30rpx;
      display: flex;
      align-items: center;
      height: 72rpx;
      border-radius: 36rpx;
      border-top: 1rpx solid #eee;
      background-color: #eee;
      .icon-search1 {
        position: absolute;
        top: 50%;
        left: 30rpx;
        transform: translateY(-50%);
        font-size: 22rpx;
        line-height: 1;
        color: #999;
      }
      span {
        padding: 0 0 0 74rpx;
        font-size: 24rpx;
        color: #999;
      }
    }
    .cates-wrap {
      margin-top: 20rpx;
      display: flex;
      height: calc(100vh - 112rpx);
      border-top: 1rpx solid #eee;
      .left-menu {
        display: flex;
        width: 150rpx;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100rpx;
          font-size: 24rpx;
          color: #333;
          background-color: #eee;
          &.active {
            font-weight: 600;
            color: #b51c66;
            background-color: #fff;
          }
        }
      }
      .right-container {
        padding: 44rpx;
        display: flex;
        width: calc(100vw - 150rpx);
        background-color: #fff;
        box-sizing: border-box;
        .child-title {
          font-size: 27rpx;
          color: #010101;
        }
        .child-cont {
          margin-top: 20rpx;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          .child-item {
            margin-bottom: 20rpx;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            flex: 0 0 33.33%;
            img {
              width: 130rpx;
              height: 130rpx;
            }
            span {
              margin-top: 20rpx;
              font-size: 24rpx;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>