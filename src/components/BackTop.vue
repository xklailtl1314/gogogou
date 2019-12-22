<template>
  <div class="back-top" @click="goTop" v-show='!floorstatus'>
    <i class="iconfont icon-returntotop"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      floorstatus: true
    }
  },
  onPageScroll: function (e) {
    // console.log(e)
    if (e.scrollTop > 100) {
      this.floorstatus = false
    } else {
      this.floorstatus = true
    }
  },
  methods: {
    goTop: function (e) { // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.back-top {
  position: fixed;
  bottom: 210rpx;
  right: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76rpx;
  height: 76rpx;
  cursor: pointer;
  background: #FBF6F2;
  border-radius: 50%;
  z-index: 99;
  .iconfont {
    font-size: 40rpx;
    font-weight: 600;
    color: #b51c66;
  }
}
</style>