<template>
  <div class="search">

    <div class="wrap">
      <div class="search-wrap">
        <img src="/static/images/search.png" >
        <input type="text" placeholder="搜索朋友圈的好货" placeholder-style="color: #999">
      </div>
    </div>

    <div class="search-part">
      <div class="line">
        <span>最近搜索</span>
        <button><img src="/static/images/del.png"></button>
      </div>
      <div class="list">
        <navigator class="link" v-for="(item,idx) in historyList" :key="idx">{{item}}</navigator>
      </div>
    </div>

    <div class="search-part">
      <div class="line">
        <span>热门搜索</span>
      </div>
      <div class="list">
        <navigator class="link" v-for="(item,idx) in hotList" :key="idx">{{item}}</navigator>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      historyList: ['牙膏', '洗发露', '被子', '笔', '象牙山的飒'],
      hotList: ['牙膏', '保暖内衣', '暖暖裤', '暖宫内裤', '枇杷']
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    .wrap {
      padding-bottom: 20rpx;
      display: flex;
      width: 100%;
      border-bottom: 1px solid #eee;
      .search-wrap {
        position: relative;
        margin: 0 20rpx;
        display: flex;
        align-items: center;
        width: 100%;
        height: 70rpx;
        border-radius: 35rpx;
        background-color: #eee;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 15rpx;
          transform: translateY(-50%);
          width: 26rpx;
          height: 26rpx;
        }
        input {
          padding-left: 50rpx;
          width: 100%;
          font-size: 28rpx;
        }
      }
    }
    .search-part {
      margin-bottom: 20rpx;
      .line {
        padding: 0 20rpx;
        display: flex;
        height: 60rpx;
        justify-content: space-between;
        span {
          padding: 10rpx 0;
          font-size: 24rpx;
          color: #333;
        }
        button {
          margin: 0;
          padding: 10rpx 0;
          line-height: 1;
          background-color: #fff;
          &::after {
            border: none;
          }
          img {
            width: 36rpx;
            height: 36rpx;
          }
        }
      }
      .list {
        padding: 0 20rpx;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .link {
          display: flex;
          margin-bottom: 14rpx;
          padding: 10rpx 30rpx;
          font-size: 26rpx;
          color: #333;
          background-color: #eee;
          border-radius: 26rpx;
          box-sizing: border-box;
          &:not(:first-child) {
            margin-left: 20rpx;
          }
        }
      }
    }
  }
</style>