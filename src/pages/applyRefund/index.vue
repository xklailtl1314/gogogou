<template>
  <div class="apply-refund">
    <!-- 商品详情 -->
    <div class="apply-refund-top">
      <div class="line">
        <span>商品名称:  </span>
        <label>Dove/多芬樱花甜香滋养美肤沐浴乳1KGx多芬樱花甜香滋养美肤沐浴乳1KGx</label>
      </div>
      <div class="line">
        <span>付款金额:</span>
        <label>￥59.9</label>
      </div>
      <div class="line">
        <span>订单编号:</span>
        <label>E20191203035982013</label>
      </div>
      <div class="line">
        <span>交易时间:</span>
        <label>2019-12-03 14:30</label>
      </div>
    </div>
    <!-- 处理方式 -->
    <div class="picker-wrap">
      <span>处理方式:</span>
      <picker
        class="p-wrap"
        mode="selector"
        :range="handleMode"
        @change="handleModeChange">
        <view class="picker">{{handleMode[handleModeIdx]}}</view>
      </picker>
      <i class="iconfont icon-angle-right"></i>
    </div>

    <!-- 退款原因 -->
    <div class="picker-wrap">
      <span>退款原因:</span>
      <picker
        class="p-wrap"
        mode="selector"
        :range="refundReason"
        @change="refundReasonChange">
        <view class="picker">{{refundReason[refundReasonIdx]}}</view>
      </picker>
      <i class="iconfont icon-angle-right"></i>
    </div>

    <!-- 退款金额 -->
    <div class="input-wrap">
      <span>退款金额:</span>
      <input type="text">
    </div>

    <!-- 联系电话 -->
    <div class="input-wrap">
      <span>联系电话:</span>
      <input type="text">
    </div>

    <!-- 备注信息 -->
    <div class="input-wrap">
      <span>备注信息:</span>
      <input type="text">
    </div>

    <!-- 信息举证 -->
    <div class="upload-wrap">
      <div class="tit">
        <span>信息举证:</span>
        <label>可上传5张图片</label>
      </div>

      <!-- 基于mpvue-weui的图片上传功能 -->
      <div class="weui-uploader__bd th-backwhite clearfix g-upload">
        <div class="weui-uploader__files" id="uploaderFiles">
          <block v-for="(item,index) in files" :key="index">
            <div class="weui-uploader__file posi-rela" @click="predivImage" :id="item">
              <icon type="cancel" size="20" class="th-icon-cancel" @click.stop="deletImg(index)"/>
              <image class="weui-uploader__img" :src="item" mode="aspectFill" />
            </div>
          </block>
        </div>
        <div class="g-uploader-box" @click="chooseImage">
          <i class="iconfont icon-camera"></i>
          <span class="name">添加图片</span>
        </div>
      </div>
    </div>

    <!-- 提交 -->
    <div class="btn-submit">提交</div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      files: [], // 图片上传
      filesOnline: [], // 图片上传
      handleMode: ['退货', '退款', '退货退款'], // 处理方式
      handleModeIdx: 0, // 处理方式初始值
      refundReason: ['不想要了', '东西不好', '心情不好'], // 退款原因
      refundReasonIdx: 0 // 退款原因初始值
    }
  },
  methods: {
    handleModeChange (e) {
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.handleModeIdx = e.mp.detail.value
    },
    refundReasonChange (e) {
      this.refundReasonIdx = e.mp.detail.value
    },
    // 图片上传
    chooseImage (e) {
      var _this = this
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.files = _this.files.concat(res.tempFilePaths)
          var tempFilePaths = res.tempFilePaths
          // console.log(tempFilePaths)
          wx.uploadFile({
            url: 'http://asdasdasdsadasdasd', // 模拟接口
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
              'Content-Type': 'multipart/form-data'
            },
            success: function (res) {
              _this.filesOnline = _this.filesOnline.concat(JSON.parse(res.data).data)
            }
          })
        },
        fail: function () {
          console.log('fail')
        },
        complete: function () {
          console.log('commplete')
        }
      })
    },
    predivImage (e) {
      console.log(e)
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files // 需要预览的图片http链接列表
      })
    },
    deletImg (index) {
      this.files.splice(index, 1)
      this.filesOnline.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.apply-refund {
  .apply-refund-top {
    padding: 0 30rpx;
    background-color: #fff;
    .line {
      padding: 10rpx 0;
      display: flex;
      line-height: 1;
      span {
        flex: 1;
        font-size: 28rpx;
        font-weight: 600;
        color: #333;
      }
      label {
        flex: 4;
        font-size: 28rpx;
        color: #333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        // background-color: lightpink;
      }
    }
  }

  .picker-wrap {
    margin-top: 20rpx;
    padding: 20rpx 30rpx;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: #333;
    background-color: #fff;
    .p-wrap {
      margin-left: 15rpx;
      width: calc(100vw - 230rpx);
      // background-color: #eee;
    }
  }

  .input-wrap {
    margin-top: 20rpx;
    padding: 20rpx 30rpx;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: #333;
    background-color: #fff;
    span {}
    input {
      margin-left: 15rpx;
      width: calc(100vw - 230rpx);
    }
  }

  .upload-wrap {
    margin-top: 20rpx;
    .tit {
      padding: 20rpx 30rpx;
      display: flex;
      align-items: center;
      font-size: 28rpx;
      color: #333;
      background-color: #fff;
      span {}
      label {
        margin-left: 15rpx;
      }
    }
    // 图片上传
    .g-upload {
      margin-bottom: 0;
      width: 750rpx;
      padding: 20rpx 30rpx;
      box-sizing: border-box;
      background-color: #fff;
      .weui-uploader__files {
        .weui-uploader__file {
          margin-right: 24rpx;
          margin-bottom: 24rpx;
          &.posi-rela {
            position: relative;
            overflow: visible;
          }
          .th-icon-cancel {
            position: absolute;
            background-color: #fff;
            border-radius: 50%;
            right: -14rpx;
            top: -14rpx;
          }
          .weui-uploader__img {
            width: 130rpx;
            height: 130rpx;
          }
        }
      }
      .g-uploader-box {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 130rpx;
        height: 130rpx;
        line-height: 1;
        border: 2rpx dashed #ccc;
        border-radius: 14rpx;
        .iconfont {
          font-size: 42rpx;
          color: #ccc;
        }
        .name {
          margin-top: 20rpx;
          font-size: 20rpx;
          color: #999;
        }
      }
    }
  }

  .btn-submit {
    margin: 30rpx 30rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    color: #fff;
    line-height: 1;
    width: calc(100% - 60rpx);
    height: 70rpx;
    border-radius: 35rpx;
    background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
  }
}
</style>