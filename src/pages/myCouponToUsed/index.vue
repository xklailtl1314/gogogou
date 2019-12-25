<template>
  <!-- 我的优惠券--立即使用 -->
  <div class="my-coupon-use">
    <!-- 搜索框 -->
    <div class="search-wrap">
      <div class="wrap">
        <i class="iconfont icon-search1"></i>
        <input
          type="text"
          :placeholder="oPlaceholder"
          placeholder-style="color: #666"
          @change="clearSearch"
          v-model="oText">
        <i class="iconfont icon-quxiao" v-show="oText.length > 0"></i>
      </div>
      <i class="iconfont icon-fenxiang"></i>
    </div>
    <!-- 选择栏 -->
    <div class="screenTab">
      <div class="tab-title">
        <div class="item" @click="cur=0" :class="{active:cur==0}">
          <picker @change="bindPickerChange" :value="oIndex" :range="oArray" class="oItem">
            <view class="picker">{{oArray[oIndex]}}</view>
          </picker>
          <i class="iconfont icon-arrow-bottom_s"></i>
        </div>
        <div class="item" @click="cur=1" :class="{active:cur==1}">
          <span>销量</span>
        </div>
        <div class="item" @click="cur=2" :class="{active:cur==2}">
          <span>价格</span>
        </div>
        <div class="item" @click="cur=3" :class="{active:cur==3}">
          <span>品牌</span>
        </div>
        <div class="item" @click="cur=4" :class="{active:cur==4}">
          <span>筛选</span>
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div v-show="cur==0">暂无数据001</div>
      <div v-show="cur==1">暂无数据002</div>
      <div v-show="cur==2">暂无数据003</div>
      <div v-show="cur==3">暂无数据004</div>
      <div v-show="cur==4">暂无数据005</div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 0, // tab切换
      oText: '', // 搜索框
      oArray: ['综合', '好评', '销量', '星级'],
      oIndex: 0
    }
  },
  methods: {
    clearSearch () { // 清除输入框搜索
      this.oText = ''
    },
    bindPickerChange (e) { // 下拉框选中
      this.oIndex = e.mp.detail.value
    }
  }
}
</script>

<style lang="scss">
.search-wrap {
  padding: 20rpx 0 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  .wrap {
    width: 620rpx;

    position: relative;
    margin: 0 30rpx;
    display: flex;
    align-items: center;
    height: 70rpx;
    border-radius: 35rpx;
    background-color: #eee;
    overflow: hidden;
    .icon-search1 {
      position: absolute;
      top: 50%;
      left: 36rpx;
      transform: translateY(-50%);
      font-size: 22rpx;
      color: #666;
    }
    input {
      padding: 0 70rpx;
      width: 100%;
      font-size: 26rpx;
    }
    .icon-quxiao {
      padding: 0 30rpx;
      font-size: 30rpx;
      color: #808084;
    }
  }
  .icon-fenxiang {
    margin-right: 30rpx;
    font-size: 50rpx;
    line-height: 1;
    color: #666;
  }
}

.screenTab {
  .tab-title {
    padding: 20rpx 0;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    .item {
      padding: 0 15rpx 20rpx;
      display: flex;
      align-items: center;
      &.active {
        // border-bottom: 4rpx solid #B51C66;
        span {
          color: #b61c65;
        }
        .oItem {
          color: #b61c65;
        }
        i {
          color: #b61c65;
        }
      }
      span {
        font-size: 30rpx;
        line-height: 1;
        color: #333;
      }
      .oItem {
        display: flex;
        font-size: 30rpx;
        line-height: 1;
        color: #333;
      }
    }
  }
  .tab-content {}
}

</style>