    <template>
      <div class="my-goods-comment">
        <div class="top">
          <div class="top-wrap">
            <img class="goods-img" src="/static/tmp/b005.jpg">
            <span class="tit">米其林汽车轮胎配大众朗逸宝来迈腾</span>
          </div>
          <div class="tip-wrap">
            <span class="tip">快递有点慢</span>
            <span class="tip">快递有点慢</span>
            <span class="tip">快递有点慢</span>
            <span class="tip">快递有点慢</span>
            <span class="tip">快递有点慢</span>
          </div>
        </div>
        <div class="text-wrap">
          <textarea class="my-comment-t" placeholder="告诉我们宝贝美中不足的地方吧，我们一定努力改进"></textarea>
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
        <div class="btn-submit">提交</div>
      </div>
    </template>

<script>
export default {
  data () {
    return {
      files: [],
      filesOnline: []
    }
  },
  methods: {
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

.my-goods-comment {
  .top {
    padding: 0 30rpx;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .top-wrap {
      display: flex;
      .goods-img {
        width: 130rpx;
        height: 130rpx;
        border-radius: 10rpx;
      }
      .tit {
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #333;
      }
    }
    .tip-wrap {
      margin-top: 40rpx;
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      .tip {
        margin: 0 20rpx 20rpx 0;
        padding: 6rpx 23rpx;
        display: flex;
        font-size: 28rpx;
        line-height: 1;
        color: #666;
        border: 1rpx solid #d1d1d1;
        border-radius: 30rpx;
      }
    }
  }
  .text-wrap {
    padding: 20rpx 30rpx;
    border-top: 4rpx solid #f5f5f5;
    .my-comment-t {
      width: 100%;
      min-height: 150rpx;
      font-size: 28rpx;
    }
  }
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
  .btn-submit {
    position: fixed;
    bottom: 70rpx;
    left: 0;
    margin: 0 30rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    color: #fff;
    line-height: 1;
    width: calc(100% - 60rpx);
    height: 70rpx;
    border-radius: 35rpx;
    background-color: #999;
  }
}

</style>