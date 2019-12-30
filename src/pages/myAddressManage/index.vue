<template>
  <div class="my-address-manage">
    <div class="user-info">
      <!-- 收货人 -->
      <div class="item">
        <div class="left"><span class="name">收货人</span></div>
        <div class="right"><input type="text" placeholder="收货人"></div>
      </div>
      <!-- 电话 -->
      <div class="item">
        <div class="left"><span class="name">联系电话</span></div>
        <div class="right"><input type="text" placeholder="联系电话"></div>
      </div>
      <!-- 收货地址 -->
      <div class="item">
        <div class="left"><span class="name">收货地区</span></div>
        <div class="right">
          <!-- 地区选择 -->
          <div class="site-wrap">
            <!-- <i class="iconfont icon-address_icon"></i> -->
            <picker class="auth-pick-tip" mode="region" :value="region" :custom-item="customItem" @change="regionPick">
              <div v-if="!region.length">请选择区域</div>
              <view class="site-current">
                {{region[0]}} {{region[1]}} {{region[2]}}
              </view>
            </picker>
            <!-- <i class="iconfont icon-angle-right"></i> -->
          </div>
        </div>
      </div>
      <!-- 详细地址 -->
      <div class="item">
        <div class="left"><span class="name">详细地址</span></div>
        <div class="right"><textarea type="text" placeholder="详细地址" class="area"></textarea></div>
      </div>
      <!-- 邮政编码 -->
      <div class="item">
        <div class="left"><span class="name">邮政编码</span></div>
        <div class="right"><input type="text" placeholder="邮政编码（选填）"></div>
      </div>
    </div>
    <div class="btn-wrap">
      <button class="save btn">保存</button>
      <button class="del btn">删除收货地址</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      region: ['省份', '城市', '地区'], // 地址默认
      customItem: '全部' // 地址默认
    }
  },
  methods: {
    regionPick (e) { // 地址调用
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.region = e.mp.detail.value
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.my-address-manage {
  .user-info {
    padding: 0 30rpx;
    background-color: #fff;
    .item {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        border-bottom: 1rpx solid #eee;
      }
      .left {
        .name {
          display: flex;
          font-size: 28rpx;
          color: #333;
          min-width: 4em;
          // background-color: lightblue;
        }
      }
      .right {
        margin-left: 20rpx;
        input {
          padding: 0 20rpx;
          font-size: 28rpx;
          color: #666;
        }
        .site-wrap {
          margin-left: 20rpx;
          font-size: 28rpx;
          color: #666;
        }
        .area {
          padding: 0 20rpx;
          width: calc(100vw - 80rpx - 4em);
          height: 36rpx;
          font-size: 28rpx;
          color: #666;
        }
      }
    }
  }
  .btn-wrap {
    margin-top: 30rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    .btn {
      width: 100%;
      height: 70rpx;
      font-size: 28rpx;
      border-radius: 38rpx;
      box-sizing: border-box;
    }
    .save {
      color: #fff;
      background:linear-gradient(90deg,rgba(218,89,152,1) 0%,rgba(181,28,102,1) 100%);
    }
    .del {
      margin-top: 20rpx;
      color: #666;
      border: 1rpx solid currentColor;
    }
  }
}
</style>