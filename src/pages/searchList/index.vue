<template>
  <div class="search-list">
    <!-- 搜素框 -->
    <!-- 点击返回搜索页面 -->
    <navigator :url="cateLink" class="search-wrap" hover-class="none">
      <div class="search">
        <div class="left">
          <i class="iconfont icon-search1"></i>
          <span>轮胎</span>
        </div>
        <i class="iconfont icon-quxiao"></i>
      </div>
    </navigator>

    <!-- 筛选 -->
    <div class="screenTab">
      <div class="tab-title">
        <div class="item" @click="cur=0" :class="{active:cur==0}">
          <span>综合</span>
        </div>
        <div class="item" @click="cur=1;saleChange()" :class="{active:cur==1}">
          <span>销量</span>
        </div>
        <div class="item" @click="cur=2;upChange()" :class="{active:cur==2}">
          <span>价格</span>
          <div class="wrap">
            <i class="angle_top"></i>
            <i class="angle_bottom"></i>
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div v-show="cur==0">
          <TwoColGoods :twoColGoods="twoColGoods"></TwoColGoods>
        </div>
        <div v-show="cur==1">
          <TwoColGoods :twoColGoods="twoColGoods"></TwoColGoods>
        </div>
        <div v-show="cur==2">
          <TwoColGoods :twoColGoods="twoColGoods"></TwoColGoods>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
import Search from '@/components/Search.vue' // 搜索框
import TwoColGoods from '@/components/TwoColGoods.vue' // 两列商品布局
export default {
  data () {
    return {
      pageindex: 1, // 分页
      cateLink: '../search/main', // 搜索页
      angleActive: true,
      oText: '', // 搜索组件传搜索值
      oPlaceholder: '', // 搜索框placeholder
      cur: 0, // tab切换
      twoColGoods: [ // 商品列表
        {
          img_src: '/static/images/ad.jpg',
          title: '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
          price: '6.9',
          oldPrice: '12.5'
        },
        {
          img_src: '/static/images/ad.jpg',
          title: '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
          price: '6.9',
          oldPrice: '12.5'
        },
        {
          img_src: '/static/images/ad.jpg',
          title: '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
          price: '6.9',
          oldPrice: '12.5'
        }
      ]
    }
  },
  methods: {
    getSearchResult () { // 获取列表
      // util.request(api.SearchResult).then(res => {
      //   if (res.status == 200) {
      //     this.twoColGoods = res.content
      //   }
      // })
      wx.request({
        url: 'http://www.liulongbin.top:3005/api/getgoods?pageindex=' + this.pageindex,
        success (res) {
          if (res.data.status === 0) {
            // this.twoColGoods = res.data.message
          }
        }
      })
    },
    saleChange () { // 销量降序
      this.twoColGoods.sort((a, b) => {
        return b.saleNum - a.saleNum
      })
    },
    upChange () { // 价格升序
      // console.log(123)
      this.twoColGoods.sort((a, b) => {
        return a.price - b.price
      })
    }
  },
  created () {
    this.getSearchResult()
  },
  components: {
    Search,
    TwoColGoods
  },
  onLoad (e) {
    this.oText = e.name
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.search-wrap {
  padding: 0 30rpx;
  display: flex;
  box-sizing: border-box;
  .search {
    display: flex;
    align-items: center;
    height: 70rpx;
    width: 100%;
    border-radius: 35rpx;
    background-color: #eee;
    .iconfont {
      display: flex;
      justify-content: center;
      font-size: 22rpx;
      color: #666;
      &.icon-search1 {
        width: 80rpx;
      }
      &.icon-quxiao {
        width: 80rpx;
      }
    }
    .left {
      display: flex;
      flex: 1;
    }
    span {
      font-size: 26rpx;
      color: #333;
    }
  }
}
.screenTab {
  .tab-title {
    padding: 20rpx 30rpx;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    .item {
      display: flex;
      &.active {
        color: #b61c65;
      }
      .wrap {
        position: relative;
        // height: 38rpx;
        margin-left: 6rpx;
        i {
          &.angle_top {
            content: '';
            width: 0;
            height: 0;
            display: block;
            border-style: solid;
            border-width: 0 8rpx 8rpx;
            border-color: transparent transparent #5e5e5e;
            position: absolute;
            top: 4rpx;
            &.active {
              border-color: transparent transparent #b61c65;
            }
          }
          &.angle_bottom {
            content: '';
            width: 0;
            height: 0;
            display: block;
            border-style: solid;
            border-width: 0 8rpx 8rpx;
            border-color: transparent transparent #5e5e5e;
            position: absolute;
            transform: rotate(180deg);
            top: 18rpx;
            &.active {
              border-color: transparent transparent #b61c65;
            }
          }
        }
      }
      span {
        font-size: 30rpx;
        line-height: 1;
      }
    }
  }
}
</style>