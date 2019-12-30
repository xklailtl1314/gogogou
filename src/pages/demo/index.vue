<template>
  <div class="container">
    <!-- 头部 -->
    <!-- <div class="head"> -->
      <!-- <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      />
      <span class="head-info">消息</span> -->
    <!-- </div> -->
    <!-- 搜索 -->
    <!-- <div class="search">
      <input type="search" />
      <span>搜索</span>
    </div> -->
    <!-- 内容 -->
    <div class="infoAll" v-for="(item,index) in commitInfo" :key="index">
      <ul v-if="item.top">
        <li
          @touchstart="touchStart($event)"
          @touchend="touchEnd($event,index)"
          :data-type="item.type"
          style="background-color:#EDFBFE;"
        >
          <div class="imgInfo" @click="recover(index)">
            <img :src="item.img" />
          </div>
          <div class="centerInfo">
            <div class="name">
              <span>{{item.name}}</span>
            </div>
            <div class="sonName">
              <span>{{item.sonName}}</span>
            </div>
          </div>
          <div class="timeInfo" @click="recover(index)">
            <div class="time">
              <text>{{item.time}}</text>
            </div>
            <div class="infoNum" style>
              <text style="font-size:12px;">{{item.infoNum}}</text>
            </div>
          </div>
          <div class="top" @click="top(index)" style="width:30%">取消置顶</div>
        </li>
      </ul>
    </div>
    <div class="infoAll" v-for="(item,index) in commitInfo" :key="index">
      <!-- {{item.img}} -->
      <ul v-if="!item.top">
        <li
          @touchstart="touchStart($event)"
          @touchend="touchEnd($event,index)"
          :data-type="item.type"
        >
          <div class="imgInfo" @click="recover(index)">
            <img :src="item.img" />
          </div>
          <div class="centerInfo">
            <div class="name">
              <span>{{item.name}}</span>
            </div>
            <div class="sonName">
              <span>{{item.sonName}}</span>
            </div>
          </div>
          <div class="timeInfo" @click="recover(index)">
            <div class="time">
              <text>{{item.time}}</text>
            </div>
            <div class="infoNum" style>
              <text style="font-size:12px;">{{item.infoNum}}</text>
            </div>
          </div>
          <div class="top" @click="top(index)">置顶</div>
          <div class="delect" @click="delect(index)">删除</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import card from '@/components/card'

export default {
  data () {
    return {
      userInfo: {},
      commitInfo: [
        {
          img: 'http://img3.imgtn.bdimg.com/it/u=3067730600,935028889&fm=27&gp=0.jpg',
          name: '旺财',
          sonName: '今晚去吃饭吗?',
          time: '19:08',
          infoNum: '9',
          top: false,
          type: 0
        },
        {
          img: 'http://img3.imgtn.bdimg.com/it/u=3067730600,935028889&fm=27&gp=0.jpg',
          name: '旺财',
          sonName: '今晚去吃饭吗?',
          time: '19:08',
          infoNum: '9',
          top: false,
          type: 0
        },
        {
          img: 'http://img3.imgtn.bdimg.com/it/u=3067730600,935028889&fm=27&gp=0.jpg',
          name: '旺财',
          sonName: '今晚去吃饭吗?',
          time: '19:08',
          infoNum: '9',
          top: false,
          type: 0
        }
      ]
    }
  },

  components: {
    // card
  },

  methods: {
  // 滑动开始
    touchStart (e) {
      // 获取移动距离，可以通过打印出e，然后分析e的值得出
      this.startX = e.mp.changedTouches[0].clientX
    },
    // 滑动结束
    touchEnd (e, index) {
      // 获取移动距离
      this.endX = e.mp.changedTouches[0].clientX
      if (this.startX - this.endX > 10) {
        for (let i = 0; i < this.commitInfo.length; i++) {
          this.commitInfo[i].type = 0
        }
        this.commitInfo[index].type = 1
      } else if (this.startX - this.endX < -10) {
        for (let i = 0; i < this.commitInfo.length; i++) {
          this.commitInfo[i].type = 0
        }
      }
    },
    // 点击回复原状
    recover (index) {
      this.commitInfo[index].type = 0
    },
    // getUserInfo () {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           this.userInfo = res.userInfo
    //         }
    //       })
    //     }
    //   })
    // },
    // 置顶
    top (index) {
      this.commitInfo[index].top = !this.commitInfo[index].top
      this.recover(index)
    },
    // 删除
    delect (index) {
      this.commitInfo.splice(index, 1)
    }
  }

  // created () {
  //   // 调用应用实例的方法获取全局数据
  //   this.getUserInfo()
  // }
}
</script>

<style lang="scss">
page {
  padding: 0 30rpx;
}
.demo {
  display: flex;
}

// 头部
* {
  margin: 0px;
  padding: 0px;
}
.head {
  width: 100%;
  height: 130rpx;
  background-color: #38a7fa;
  margin-top: -195rpx;
  display: flex;
  align-items: center;
  .head-info {
    color: #fff;
    font-size: 30rpx;
    margin-left: 30%;
    margin-top: 20rpx;
    letter-spacing: 4rpx;
  }
  .userinfo-avatar {
    width: 80rpx;
    height: 80rpx;
    margin: 20rpx;
    border-radius: 50%;
    margin-top: 30rpx;
  }
}
.search {
  width: 90%;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  input {
    width: 100%;
    height: 20rpx;
    background-color: #f3f3f3;
    border-radius: 5rpx;
    z-index: 0;
  }
  span {
    position: absolute;
    color: #b5b5b5;
    font-size: 24rpx;
    margin-top: -44rpx;
    z-index: 999;
    margin-left: 42%;
    text-align: center;
  }
}
.infoAll {
  width: 100%;
  ul {
    width: 100%;
    // overflow-x: scroll;
    li {
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      width: 1100rpx;
      height: 150rpx;
      //   background-color: red;
      line-height: 150rpx;
      border-bottom: 1px solid #e0eef1;
      //   垂直居中，  // 子div水平排列
      display: flex;
      //   justify-content:center;
      align-items: center;

      .imgInfo {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        background-color: #38a7fa;
        margin-left: 2%;
        img {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .centerInfo {
        width: 40%;
        height: 150rpx;
        margin-left: 2%;
        .name {
          margin-top: -20rpx;
          span {
            font-size: 35rpx;
          }
        }
        .sonName {
          margin-top: -110rpx;
          span {
            font-size: 24rpx;
            color: #7c8489;
          }
        }
      }
      .timeInfo {
        width: 15%;
        height: 150rpx;
        margin-left: 6%;

        .time {
          margin-top: -20rpx;
          color: #92a0a1;
          font-size: 25rpx;
          position: absolute;
        }
        .infoNum {
          width: 50rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30rpx;
          border-radius: 10rpx;
          background-color: #93d5ed;
          margin-left: 10rpx;
          margin-top: 70rpx;
        }
      }
      .top {
        width: 15%;
        height: 150rpx;
        background-color: #c4c7cd;
        color: #fff;
        font-size: 34rpx;
        text-align: center;
      }
      .delect {
        width: 15%;
        height: 150rpx;
        background-color: #ff3b32;
        color: #fff;
        font-size: 34rpx;
        text-align: center;
      }
    }
  }
}
li[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
li[data-type="1"] {
  transform: translate3d(-400rpx, 0, 0);
}
</style>