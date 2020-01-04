<template>
  <div>
    <div class="bg">
      <img src="/static/tmp/zhibo.jpeg">
    </div>

    <div class="mask">
      <view class='empty' :style="{bottom: Bottom}">
        <view class='inputarea'>
          <input adjust-position="{false}" @focus="foucus" @blur="blur" />
        </view>
      </view>
    </div>

    <!-- <view class='empty' :style="{bottom: bottom}">
      <view class='inputarea'>
        <input />
      </view>
    </view> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      Bottom: 0
    }
  },
  methods: {
    // 输入聚焦
    foucus: (e) => {
      this.Bottom = e.mp.detail.height * 2 + 'rpx'
      console.log('输入聚焦' + this.Bottom)
    },
    // 失去聚焦
    blur: (e) => {
      this.Bottom = 0
      console.log('失去聚焦:' + this.Bottom)
    }
  }
}
</script>

<style lang="scss">
.bg {
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
  }
}
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  position: absolute;
  top: 0;
}
.empty {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
}
.inputarea {
  // height: 300rpx;
  background: #fff;
  position: relative;
}
</style>