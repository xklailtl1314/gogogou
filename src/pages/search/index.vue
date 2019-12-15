<template>
  <div class="search">
    <!-- 搜索 -->
    <Search
      :oText="oText"
      :oPlaceholder="oPlaceholder"></Search>
    <!-- 最近搜索 -->
    <div class="search-part">
      <div class="line">
        <span>最近搜索</span>
        <button><img src="/static/images/del.png"></button>
      </div>
      <div class="list">
        <navigator
          class="link"
          :url="'../searchList/main?name='+item"
          open-type="navigate"
          v-for="(item,idx) in historyList" :key="idx">{{item}}</navigator>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="search-part">
      <div class="line">
        <span>热门搜索</span>
      </div>
      <div class="list">
        <navigator
          open-type="navigate"
          class="link link_vip">精品会员专享7折起</navigator>
        <navigator
          class="link"
          :url="'../searchList/main?name='+item"
          open-type="navigate"
          v-for="(item,idx) in hotList" :key="idx">{{item}}</navigator>
      </div>
    </div>

  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  data () {
    return {
      oText: '', // 搜索组件传搜索值
      oPlaceholder: '搜索朋友圈的好货', // 搜索框placeholder
      historyList: ['牙膏', '洗发露', '被子', '笔', '象牙山的飒'],
      hotList: ['牙膏', '保暖内衣', '暖暖裤', '暖宫内裤', '枇杷', '荣耀手机', '保温杯']
    }
  },
  components: {
    Search
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .search {
    .search-part {
      .line {
        margin-top: 42rpx;
        padding: 0 30rpx;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 28rpx;
          line-height: 1;
        }
        button {
          display: none;
          margin: 0;
          line-height: 1;
          background-color: #fff;
          &::after {
            border: none;
          }
          img {
            width: 36rpx;
            height: 36rpx;
          }
        }
      }
      .list {
        margin-top: 20rpx;
        padding: 0 30rpx;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .link {
          display: flex;
          margin-bottom: 10rpx;
          padding: 10rpx 16rpx;
          font-size: 26rpx;
          color: #666;
          background-color: #eee;
          border-radius: 26rpx;
          box-sizing: border-box;
          &:not(:last-child) {
            margin-right: 12rpx;
          }
          &.link_vip {
            padding-left: 52rpx;
            background-position: 14rpx 14rpx;
            background-repeat: no-repeat;
            background-size: 10%;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAOLUlEQVR4Xu1bC5BU5ZX+zr13egYR5iED8jAGAvKqCuqq6BIRVMwGNlQ0mZhETGIYumdc2TzcTTZxq+xU3pVUtCAO9GNgEkk2ZlJLkBCiBhii8hARoxh5qSCZ4TGjLQiZme6+96S+azc1DP2a7pYx1pyqrnn0/f97/u+ex3fO/1/BgGREQAbwyYzAAEBZLGQAoAGACgsiAxY0YEHvEwuqq6sbHY/HJxqGMQXAPtM0d3R0dJxsbm62C1tiYaPfCy4mfr/fbG1tnQXgkyLyb6r6hIg0dnZ27n744YdPF7bEwkb3O0B+v99qb28vj8ViPgB1AKppQSLyeDQaXbJy5crDhS2xsNH9DlB9fX2l4zizHcdZICL/DsACcEJEXozH4z8WkWfC4fCxwpaZ/+h+BaimpsZTWVk5DsC9AGYD+FCPpRCUVQB+F4lEtjY3NzsANP+l5jeyXwGqra0dY5rmDFW9D8BlAEp7LKMLAN1rmWVZofb29s7+CNj9BpDf7zeOHDlyi6p+BgBd66Jez9gRkW5VXa2qvygrK9u6dOnSk/nZQf6j+gUgBua2trYKAMnAPByAJ80yXgLwhGVZD8Xj8UPBYDCW/3L7PrJfAEoE5psAfE5V5wEoAZBOl04AfxWR75imub2hoeFo35eZ/4jzDtDixYtLu7q6xovIfyYC84Qs6quqdojIahH5zciRIzf5/X4G7PMi5x2ge+65Z1Q0Gp0BwA+A4NB6skk3gDYRCViWFa6urj7h9/vj2QYV4/vzDtCiRYs+ZhjGHar60URgzqoDTUhEoiKylqm/u7t7c1NT01vFACDbHFmVyzZBrt+T81RXV4+IxWJfEJEvAhjTK63nMtU+Vd1oGMZSj8fzytKlS2lZ76qkBYhp+P777+eTKwY5k/r6+opYLDbTMAyC84k8V8UMtp/uGY/Hn16xYkVbnvP0HMZakJ/kOs9ab0qACE5bW1tZaWmpvWTJEpp2QSDV1NSYVVVV4xKE8AYAH8xzYdTjDRazhmGsCgQCf8hznjPDvF4vY2BJJBKJT506Nd47AZwDUAKcEays6QIi8rdYLLbDsqyjwWDw7/koVFdX90FV/YjjOPeKCBnzBfnMkxhDt2pV1Z87jvPzSy655Ijf74/2dT5m0+7u7jGqermIsMRhafNcMBh88Szz6j3xrFmzrIkTJ05V1UYRGa6qe1X1/zg4FosdPHjw4KmWlpZcM0iylTFHRG5Pw5j7urbk9Y+SYTuOs6mxsTGSa52WMIAhIjIawHWO43xcRP5FREhIVwYCgUcyApSYYCqAXwCYBIBP7LiItDiOs95xnM25KkTGfOjQoUqPx+NT1fpEKyOXtJ4VNBE5rKpPAvjOqFGjDuSS9pOhQ0RmJYD5CJOFqkJEdqpqOBQK/TojQGS0tbW1k0QkJCJXABgEgMTsVVX9i4hssW37GdM0d0cikVOZCsgkY060MsiYzQyMOSsovS5gMcuAvcS27ZbGxsYDmSagLvF4/FIA/yoi5GFXAfgAgDIApAxPqurKUCi0OhtAWLhw4XjTNH9KEwQwrMeALlV9DcA6AL83TfPAoEGD3nzggQdYDpwlTOvl5eUfMgzjvwCwW8i2RrGFrvUnAL+KRCJ/aG5uZpbrmVDE6/Wyv1RumubkeDxOi/mMiFCXC5PKiAgD/3oR+WUgEPhjVoASQfV+VeXCemYcWhIDYgefnoisMQxjU0NDw4u9M53X6+XToULfTDDmnq2MYgHFWMinH7Qsa3l7e/ux5ubmMwGbLt7R0TE8Ho/PU1V2Dq4FUJWwGqOHEsdV9beq2hwOh1uyAsQ+jYh8VUTIdhmPeoutqm8bhvECgGdEZJvjODui0ejxpqam7pqaGqO8vPyjhmF8VkQ+pqq9WxnFAojz8KH9SUR+raprg8FgB4E5evRolapOoxeoKl2KmwEkp6nkqIisVNU1wWBwe1aAvF7vSABfUtX5InJNltWQrO1ipjNN8y8M6I7j0K+/BGBRMQNzBj2owzbbtn8kIodIIxK7I/MBzAWQqZ3CaVtFZKlt2+vD4TAf+hlJSRTvuuuuao/H80lV/XSi4s6EEf3+FIAjAJ4C8LyIVCfcky7GGPBulzTUoRXAb0TkmKpWiMgcVR0LoDJLO4VrI6g/sCxrQ0NDw1nBPqXijPiqyhvcqars9mUTBkbGg4MA/gZgCADyDFri+RKSWNZqp0WEmfcyVR0sIlkfjoi8atv2/1qW9efly5cT6MwWtHjx4qGdnZ3TRaRWRGhF73dhwvmKZVnbH3rooTeyAuT1elkKkCTeA+Cu9zs6APYYhlHrOM6u3uVUumLVc/DgwVElJSVfE5HF73OAuLW9W1W/uH///t29y6iUALH6rqysJJH6HwBfB9CTM+SFl2maGDx4MEpKSkjr3Tmi0Si6uroQi8VAup9KeK1lWbjwwgvBOSi8trOz0/2kG9cHJcnIdzHrBoPBPb3HpQtgQi5TVVX1zUSLgjsOBYE0dOhQXHfddRg+fDjKysgCgNdeew179uzB8ePHXbBSCcEZNmwYZs6cifLychcQXvvSSy9h9+7d7u8FghTh7i2AxYFAgKXLWZIxwnu93q8mLIhEr6Ais6KiArNnz8b48ePdBVNef/11d6E7d+7E22+/nRIgXjthwgTMmjULnMO2bZw8eRJPP/00tm7d6v5dCECqyl73k6ZpfmvZsmWv9hUgL4AvJ+qodx57njJkyBBcffXVuPLKK90FU958803s27cPa9euRUcHq5dzZdKkSbjqqqtwxRVXuG7W3d2NtrY2bN682QWoCELes9G27e83NjaSD+VuQT6fb4GqcnPv8p7FXT5KMfbQvWhF119/vTsF4w+taNWqVTh2LPX5BLrlDTfcgFGjRqG0tBSnTp3Crl278Oyzz7ruWQTZDYBtnCXhcJgcLneAvF4ve8dM8zMBcCc0bzEMAx6PBzfeeKP7ueCCd5qKjD+PPvooXnnlFZw4ceLM/Omub29vx7p163DgwAHXAosgO0SEzbfGYDDIaiB3gHw+H9n0ZwF8vFfbI2+9elsE48n27dtdqyBISaHFMf7cdNNNfbK4PBT7Myt50zQfWb58+fE+AbRo0SI2l24DsAAA+9QFS++YQjdjNnvqqadct0kK4820adPcuDV58mT337nErL4qqKqPqeqvSktL1/Vm0ZwrYxbz+XzTHMeZKyL/kait+nr/c66nVUycOBHz5s3DRRdddCYrPf7449i4ceOZ6ysrK3HzzTdjypQpbvyhMKAz42XKenko+DsRaUq3GZkRoERn8UYA3wLAdmXBQl4zevRoLFiwwP2ZJH+PPfYY1q9f72YpCgP6bbfdhnHjxrnZy3EcbNmyBS0tLRl5U18VTLRpgtFodOeKFSvO4RrZeBCrcbYsflislimZMa1o/vz5brqnpVBoFXQzuht5zaWXXorbb78dF198sfv96dOnsWHDBtfKMjHvvgLEw6KO4/xMRPal2tbKCBCr+mg0erWqNiROgPX1/imvJ6u+5pprXG5D4kghMM8//7xrJbQYuhZdjADSqlpbW13us23btqLo0GOSnzmO89NBgwa1pdrKzmZBJY7jfNgwjKZEy7KgciOpFPnMmDFj3PJh+vTpbm0WiUSwf/9+rFmzxrUa/n/q1Klu/fYucJ8z+IjITyzL+mG6EyPZmkni8/kmc79IRC5XVTaiChYCQk50yy23YM6cOe7vjDGHDx9GU1MTxo4d65YWI0eOdL8jy169erXLfd56q6iHOtjP/l4kEvluih0Rd53ZAILP55vgOM6DIjI9xTnCgsCaMWOGCwQtJgkESSPjD12QZJLxhsA1Nze7JQb/LpKwzfF3Vf1BKBRijE3ZTsgKUG1t7VjDML4NgIcOuJVTNCG/Ic8h32HcYSB+4YUXMGLECDd7UWg9e/fuddnzG2+c1ewrVI+YqraLyI+DweCD6SbLCtDdd999iW3b93JfCcA7jK1IUl1d7XKiuXPnupyIbsYeD6kA4xSFcem5557Djh070lb8earDPhB76A8Gg8FA3gBxC0hVF4kIyw1u1xZN2BdisL711lvdn8k+Uc8bMGsxezGLJTlSMRRgc98wjBdt214WDod5DiGlZLWgurq64Y7jsHH/qYSbFUO/M3PQcsiqaUnJPhG/JBdivCHD5qcIjbHeerMy3koeFAgEfps3QAsXLqyyLIs7rGx9cBOuqJKqT8QbEBBW+ps2bXKbY4U0xdIozE7iE47jPBwKhX6fN0Aki7FYjOdoFgKoKSo6PKFVWuqWHOz5XHstt87fEXIfEkcWsC+//HKxb8v53KPFAB4JBAIb8gbozjvvHFxWVjbFMIy72fkvtqZJTsQmGtN+UtgGYfwh92EPqNgiIjyQvspxnNWhUGhL3gAlj6oBYH+aVX3RhSDR1Zjqk8JeM62IgTkez/VAW59U4zG+5Y7jrGtsbOSuRkrJGqS5BTRs2LChtm1zC+i/cyGXfVKz/y4+TA7EA6GptnuSamUFiIBwC6iiouI+EblPVUty2e/uv3XnfGdyIH/idNo5zfq+AMRreVLrawC+kTgtwRMb/+xyQFXvTbxmlTbI5WJBLhA+n4/vk35FVdk4K2gL6L2ArIjstW27zuPxPNvQ0MDjO/nFoOQor9dbIyKfV9XLEsdL3gvrdHXgqxyqauRw0qWnzjzR8WVV/Wumd9BytqD6+vqJtm1/mM17VU338lt/gVZiGEaJquZ6ipaVO0/C/X84HOZORto3CXIG6I477hg6ePBg7o1dICJFaZwVC00CYxiGFY/Hc9LLMAy+g9LV3d39alNTE4vWtJIzQMVazD/bPAMAZXliAwANAFSYUw9Y0IAFDVhQYQhkGf0Phm08o23NyRAAAAAASUVORK5CYII=');
          }
        }
      }
    }
  }
</style>