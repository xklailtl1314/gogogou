<template>
  <div>

    <!-- <open-data type="userAvatarUrl"></open-data> -->
    <!-- <open-data type="userNickName"></open-data> -->


    <img v-if="isShow" :src="userInfo.avatarUrl">
    <Button v-else open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户数据</Button>
    <p>hello {{userInfo.nickName}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      isShow: false
    }
  },
  beforeMount () {
    this.handleGetUserInfo()
  },
  methods: {
    handleGetUserInfo () {
      wx.getUserInfo({
        success: (res) => {
          console.log(res.userInfo.avatarUrl)
          this.userInfo = res.userInfo
        },
        fail: function () {
          console.log('获取失败')
        }
      })
    },
    getUserInfo (res) {
      if (res.mp.detail.rawData) {
        this.handleGetUserInfo()
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="scss">

</style>