<template>
  <div class="g-half-screen">
    <view class="page__bd">
      <view :class="['weui-demo-dialog', isparameter ? 'weui-demo-dialog_show' : '']">
        <view class="weui-mask" @tap="closeDialog"></view>
        <!-- 主体开始 -->
        <view class="weui-half-screen-dialog hs-parameter-wrap">
          <div class="line">
            <span class="title">产品参数</span>
          </div>
          <scroll-view scroll-y class="hs-parameter">
            <div class="item" v-for="(item, idx) in list" :key="idx">
              <div class="l">
                <span>{{item.title}}</span>
              </div>
              <div class="r">
                <span class="info">{{item.sub}}</span>
              </div>
            </div>

            <button class="btn-ok" @tap="closeDialog">完成</button>
          </scroll-view>
        </view>
        <!-- 主体结束 -->
      </view>
    </view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '品牌',
          sub: '漫花'
        },
        {
          title: '型号',
          sub: 'MHBS-240'
        },
        {
          title: '产地',
          sub: '中国大陆'
        },
        {
          title: '是否有香味',
          sub: '无香'
        },
        {
          title: '是否进口',
          sub: '国产'
        },
        {
          title: '抽数',
          sub: '其他'
        },
        {
          title: '原材料成分',
          sub: '竹浆'
        },
        {
          title: '层数',
          sub: '3层'
        },
        {
          title: '包数',
          sub: '24'
        },
        {
          title: '面巾纸种类',
          sub: '抽取式面巾纸'
        }
      ]
    }
  },
  props: ['isparameter'],
  methods: {
    closeDialog () {
      this.$emit('isParameter') // 调用父方法，关闭half-screen
    }
  },
  computed: {},
  components: {}
}
</script>

<style lang="scss">
  // 基本
  .weui-demo-dialog {
    visibility:hidden;
    opacity:0;
    transition:all .3s;
    &.weui-demo-dialog_show {
      visibility:visible;
      opacity:1;
      .weui-half-screen-dialog {
        transform:translateY(0);
      }
    }
    .weui-half-screen-dialog {
      transition:all .3s;
      transform:translateY(100%);
    }
  }

  .hs-parameter-wrap {
    padding: 20rpx 0;
    .line {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      .title {
        font-size: 32rpx;
        color: #333;
      }
    }
    .hs-parameter {
      height: 70vh;
      .item {
        margin-left: 30rpx;
        padding: 25rpx 0;
        display: flex;
        border-bottom: 1rpx solid #eee;
        .l {
          display: flex;
          width: 4em;
          line-height: 1;
          span {
            display: flex;
            font-size: 28rpx;
            line-height: 1.2;
            color: #666;
          }
        }
        .r {
          margin-left: 40rpx;
          display: flex;
          line-height: 1;
          .info {
            font-size: 28rpx;
            line-height: 1.2;
            color: #333;
          }
        }
      }
      .btn-ok {
        margin: 350rpx 30rpx 0 30rpx;
        height:70rpx;
        font-size: 28rpx;
        color: #eee;
        background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
        border-radius:35rpx;
      }
    }
  }
</style>