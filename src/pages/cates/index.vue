<template>
  <!-- 商品分类 -->
  <div class="cates">
    <!-- 搜索 -->
    <navigator url="../search/main" class="search" hover-class="none">
      <i class="iconfont icon-search1"></i>
      <span>进口零食</span>
    </navigator>
    <!-- 左右布局 -->
    <div class="cates-wrap">
      <scroll-view scroll-y class="left-menu">
        <span @click="cur=idx" :class="[{active: cur==idx}]" v-for="(item, idx) in leftMenu" :key="idx">{{item}}</span>
      </scroll-view>
      <scroll-view scroll-y class="right-container">
        <div v-show="cur==idx" v-for="(item, idx) in rightContent" :key="idx">
          <div v-for="(item1, i) in item" :key="i">
            <span class="child-title">{{item1.title}}</span>
            <div class="child-cont">
              <div v-for="(item2, i2) in item1.info" :key="i2" class="child-item">
                <img src="/static/tmp/b005.jpg">
                <span>{{item2.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>

  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
export default {
  data () {
    return {
      cur: 0, // tab切换初始值
      allCates: [
        {
          'oTitle': '生活美食',
          'message': [
            {
              'title': '进口食品',
              'info': [
                {'img_src': '@image(130x130)', 'name': '糖果/巧克力'},
                {'img_src': '@image(130x130)', 'name': '休闲零食'},
                {'img_src': '@image(130x130)', 'name': '饼干蛋糕'},
                {'img_src': '@image(130x130)', 'name': '水'},
                {'img_src': '@image(130x130)', 'name': '饮料'},
                {'img_src': '@image(130x130)', 'name': '咖啡豆/咖啡'},
                {'img_src': '@image(130x130)', 'name': '方便食品'},
                {'img_src': '@image(130x130)', 'name': '米面调味'},
                {'img_src': '@image(130x130)', 'name': '油'},
                {'img_src': '@image(130x130)', 'name': '冲调品'},
                {'img_src': '@image(130x130)', 'name': '牛奶'}
              ]
            },
            {
              'title': '休闲食品',
              'info': [
                {'img_src': '@image(130x130)', 'name': '膨化食品'},
                {'img_src': '@image(130x130)', 'name': '休闲零食'},
                {'img_src': '@image(130x130)', 'name': '坚果炒货'},
                {'img_src': '@image(130x130)', 'name': '水'},
                {'img_src': '@image(130x130)', 'name': '饮料'},
                {'img_src': '@image(130x130)', 'name': '咖啡豆/咖啡'},
                {'img_src': '@image(130x130)', 'name': '方便食品'},
                {'img_src': '@image(130x130)', 'name': '米面调味'},
                {'img_src': '@image(130x130)', 'name': '油'},
                {'img_src': '@image(130x130)', 'name': '冲调品'}
              ]
            }
          ]
        },
        {
          'oTitle': '手机数码',
          'message': [
            {
              'title': '大牌手机',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '热销推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '家用电器',
          'message': [
            {
              'title': '热销品牌',
              'info': [
                {'img_src': '@image(130x130)', 'name': '美的'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '海尔'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': '戴森'},
                {'img_src': '@image(130x130)', 'name': '康佳'},
                {'img_src': '@image(130x130)', 'name': '长虹'}
              ]
            },
            {
              'title': '热销推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': '空调'},
                {'img_src': '@image(130x130)', 'name': '冰箱'},
                {'img_src': '@image(130x130)', 'name': '洗衣机'},
                {'img_src': '@image(130x130)', 'name': '微波炉'},
                {'img_src': '@image(130x130)', 'name': '电饭煲'},
                {'img_src': '@image(130x130)', 'name': '洗碗机'},
                {'img_src': '@image(130x130)', 'name': '电磁炉'},
                {'img_src': '@image(130x130)', 'name': '饮水机'}
              ]
            }
          ]
        },
        {
          'oTitle': '电脑办公',
          'message': [
            {
              'title': '热门商品',
              'info': [
                {'img_src': '@image(130x130)', 'name': '移动电源'},
                {'img_src': '@image(130x130)', 'name': 'U盘'},
                {'img_src': '@image(130x130)', 'name': '内存卡'}
              ]
            },
            {
              'title': '电脑整机',
              'info': [
                {'img_src': '@image(130x130)', 'name': '笔记本'},
                {'img_src': '@image(130x130)', 'name': '超极本'},
                {'img_src': '@image(130x130)', 'name': '游戏币'},
                {'img_src': '@image(130x130)', 'name': '平板电脑'},
                {'img_src': '@image(130x130)', 'name': '台式机'},
                {'img_src': '@image(130x130)', 'name': '一体机'},
                {'img_src': '@image(130x130)', 'name': '工作站'},
                {'img_src': '@image(130x130)', 'name': '电脑配件'}
              ]
            }
          ]
        },
        {
          'oTitle': '生鲜果蔬',
          'message': [
            {
              'title': '新鲜水果',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '海鲜水产',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '酒水饮料',
          'message': [
            {
              'title': '酒馆区',
              'info': [
                {'img_src': '@image(130x130)', 'name': '酒馆区'},
                {'img_src': '@image(130x130)', 'name': '酒馆频道'},
                {'img_src': '@image(130x130)', 'name': '海外直采'}
              ]
            },
            {
              'title': '探酒圈',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '美妆护肤',
          'message': [
            {
              'title': '当季主推',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '个护清洁',
          'message': [
            {
              'title': '畅销推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '明星品牌',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '女装内衣',
          'message': [
            {
              'title': '热销品牌',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '裙子',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '男装内衣',
          'message': [
            {
              'title': '休闲裤',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '男士外套',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '鞋靴箱包',
          'message': [
            {
              'title': '热门品牌',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '运动户外',
          'message': [
            {
              'title': '当季主推',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '生活充值',
          'message': [
            {
              'title': '当季主推',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '汽车生活',
          'message': [
            {
              'title': '当季主推',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '母婴童装',
          'message': [
            {
              'title': '当季主推',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        },
        {
          'oTitle': '玩具乐器',
          'message': [
            {
              'title': '当季主推',
              'info': [
                {'img_src': '@image(130x130)', 'name': '华为'},
                {'img_src': '@image(130x130)', 'name': '诺基亚'},
                {'img_src': '@image(130x130)', 'name': 'HTC'},
                {'img_src': '@image(130x130)', 'name': '中兴'},
                {'img_src': '@image(130x130)', 'name': '小米'},
                {'img_src': '@image(130x130)', 'name': '格力'},
                {'img_src': '@image(130x130)', 'name': '联想'},
                {'img_src': '@image(130x130)', 'name': 'OPPO'},
                {'img_src': '@image(130x130)', 'name': 'VIVO'},
                {'img_src': '@image(130x130)', 'name': '荣耀'},
                {'img_src': '@image(130x130)', 'name': '老人机'}
              ]
            },
            {
              'title': '拔草推荐',
              'info': [
                {'img_src': '@image(130x130)', 'name': 'iphone11'},
                {'img_src': '@image(130x130)', 'name': '华为mate30'},
                {'img_src': '@image(130x130)', 'name': '荣耀20青春版'},
                {'img_src': '@image(130x130)', 'name': '三星Note10+'},
                {'img_src': '@image(130x130)', 'name': '一加T7'},
                {'img_src': '@image(130x130)', 'name': '小米9pro'},
                {'img_src': '@image(130x130)', 'name': '荣耀V30'},
                {'img_src': '@image(130x130)', 'name': 'RenoAce'}
              ]
            }
          ]
        }
      ], // 所有对象
      leftMenu: [], // 左侧列表
      rightContent: [] // 右侧内容
    }
  },
  components: {},
  methods: {
    getCates () { // 获取所有对象
      util.request(api.Cates).then(res => {
        if (res.status == 200) {
          this.allCates = res.cates // 获取所有数据
          this.leftMenu = this.allCates.map(item => item.oTitle) // 获取左侧列表
          this.rightContent = this.allCates.map(itemA => itemA.message) // 获取右侧数据
        }
      })
    }
  },
  created () {
    this.getCates()
    this.leftMenu = this.allCates.map(item => item.oTitle) // 获取左侧列表--临时数据
    this.rightContent = this.allCates.map(itemA => itemA.message) // 获取右侧数据--临时数据
  }
}
</script>

<style lang="scss">
  page {
    height: 100%;
  }
  .cates {
    height: 100%;
    .search {
      position: relative;
      margin: 0 30rpx;
      display: flex;
      align-items: center;
      height: 72rpx;
      border-radius: 36rpx;
      border-top: 1rpx solid #eee;
      background-color: #eee;
      .icon-search1 {
        position: absolute;
        top: 50%;
        left: 30rpx;
        transform: translateY(-50%);
        font-size: 22rpx;
        line-height: 1;
        color: #999;
      }
      span {
        padding: 0 0 0 74rpx;
        font-size: 24rpx;
        color: #999;
      }
    }
    .cates-wrap {
      margin-top: 20rpx;
      display: flex;
      height: calc(100vh - 112rpx);
      border-top: 1rpx solid #eee;
      .left-menu {
        display: flex;
        width: 150rpx;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100rpx;
          font-size: 24rpx;
          color: #333;
          background-color: #eee;
          &.active {
            font-weight: 600;
            color: #b51c66;
            background-color: #fff;
          }
        }
      }
      .right-container {
        padding: 44rpx;
        display: flex;
        width: calc(100vw - 150rpx);
        background-color: #fff;
        box-sizing: border-box;
        .child-title {
          font-size: 27rpx;
          color: #010101;
        }
        .child-cont {
          margin-top: 20rpx;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          .child-item {
            margin-bottom: 20rpx;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            flex: 0 0 33.33%;
            img {
              width: 130rpx;
              height: 130rpx;
            }
            span {
              margin-top: 20rpx;
              font-size: 24rpx;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>