<template>
  <div>
    <div class="goodsinfo-container">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <Swiper :swipers="lunBoTu" ></Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../../utils/index.js'
import api from '../../../config/api.js'
import Swiper from '../../components/Swiper.vue' // 轮播
export default {
  data () {
    return {
      id: '',
      lunBoTu: []
    }
  },
  components: {
    Swiper
  },
  onLoad (opt) {
    // 获取商品列表id
    this.id = opt.id
  },
  mounted () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      util.request(api.GoodsShow + this.id).then(res => {
        if (res.status === 0) {
          res.message.map(item => {
            this.lunBoTu.push(item.src)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>