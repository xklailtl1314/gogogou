<template>
  <div class="integralPage">
    <div class="itemList">
      <div class="itemBox" v-for="(item, index) in list" :key="index">
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="num">{{item.num}}</div>
      </div>
    </div>
    <div class="laodMore">
      <div v-show="logStatus === 0">
        <div>上拉加载</div>
      </div>
      <div v-show="logStatus === 1">
        <div>正在加载</div>
      </div>
      <div v-show="logStatus === 2">
        <div>没有更多数据了</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      listParam: {
        page: 1
      },
      noData: false,
      logStatus: 0
    }
  },
  // 上拉加载，拉到底部触发
  onReachBottom () {
    this.onScroll()
  },
  created () {
    setTimeout(() => {
      this.list = [...new Array(20).keys()].map(item => ({ // 初始化数据
        title: new Date() + '签到' + item,
        time: '2019/8/13 15:23:22',
        num: '+10'
      }))
      this.listParam.page += 1
    }, 500)
  },
  methods: {
    onScroll () { // 如果是小程序, 不用监听滚动事件, 也不用户判断高度, 因为小程序有触底事件 onReachBottom , 直接在其中写请求逻辑即可
      this.logStatus = 1
      // 可以在这个地方给 innerHeight 添加适当的高度调整效果
      if (this.noData === true) {
        this.logStatus = 2
        return false
      }
      setTimeout(() => {
        const data = { // 请求回来的数据
          rows: [...new Array(10).keys()].map(item => ({
            title: new Date() + '签到' + item,
            time: '2019/8/13 15:23:22',
            num: '+10'
          })),
          count: 40 // 服务器上总数
        }
        if (this.list.length < data.count) { // 本地总数是否大于服务器总数
          this.list = [...this.list, ...data.rows]
          this.listParam.page = this.listParam.page + 1
          this.logStatus = 0
        } else {
          this.logStatus = 2
          this.noData = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.integralPage {
  font-size: 14px;
  color: #101010;
  // 分类列表
  .itemList {
    border-top: 1px solid #bbb;
    margin-left: 12px;
    margin-right: 12px;
    .itemBox {
      margin-left: 16px;
      margin-right: 2px;
      border-bottom: 1px solid #E8E8E8;
      padding-top: 7px;
      padding-bottom: 7px;
      overflow: hidden;
      .info {
        float: left;
        max-width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .time {
          font-size: 10px;
          color: #878686;
        }
      }
      .num {
        padding-top: 10px;
        padding-right: 10px;
        float: right;
      }
    }
  }
  // 上拉加载
  .laodMore {
    padding-top: 8px;
    padding-bottom: 8px;
    color: #ccc;
    text-align: center;
  }
}
</style>