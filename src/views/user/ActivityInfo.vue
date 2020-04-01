<template>
  <div>
    <div class="mt-4">

      <h2>活动资讯</h2>
      <b-card v-for="item in items" :key="item.activity_id" :title="item.title" :img-src="baseURL + item.url" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          {{ item.description }}
        </b-card-text>
        <b-card-text>地址：{{ item.address }}</b-card-text>
        <b-card-text>时间：{{ item.datetime }}</b-card-text>
        <b-card-text>已报名：{{ item.number }}</b-card-text>
        <b-button @click="join(item.activity_id)" variant="primary" :disabled="item.joined">{{ item.joined ? '你已报名' : '我要报名' }}</b-button>
      </b-card>
      <!-- <b-card title="太极拳体验和学习" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/u%3D4274129534%2C1683238899%26fm%3D26%26gp%3D0.jpg" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          现场邀请孙式太极拳名家，孙式太极拳第三代传人，北京孙式太极拳研究会会长、北京形意拳研究会名誉会长，刘树春老师指导。
        </b-card-text>
        <b-card-text>地址：广州市华南理工大学田径场</b-card-text>
        <b-card-text>时间：2020-5-9</b-card-text>
        <b-card-text>已报名：30</b-card-text>
        <b-button @click="dialogVisible = true" variant="primary">我要报名</b-button>
      </b-card>

      <b-card title="春季联谊 聚会华工" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/u%3D2690387131%2C3828772643%26fm%3D26%26gp%3D0.jpg" img-alt="Card image" img-right class="mb-3">
        <b-card-text>
          春天，是充满希望的季节。我会组织校友进行联谊，通过参观、交流，互相取长补短，达到共同促进。
        </b-card-text>
        <b-card-text>地址：大学城中心湖</b-card-text>
        <b-card-text>时间：2020-4-25</b-card-text>
        <b-card-text>已报名：50</b-card-text>
        <b-button @click="dialogVisible = true" variant="primary">我要报名</b-button>
      </b-card>

      <b-card title="重走唐诗之路 寻访古村古镇" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/dsafsafsfa.jfif" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          “山阴道上行,如在镜中游”,从相传黄帝铸镜于此而得名的“镜湖”到“连峯数十里,修竹带平津”的天姥山古道的“唐诗之路”,古村林立,土地灵异,山水奇特,风光旖旎！特别是近年来,在习总书记“青山绿水”就是“金山银山”的方针指引下,绍兴的南部山区,山更青了,水更绿了,更成了摄影爱好者的仰慕之路,沿线采风,“摄影与美同行”！
        </b-card-text>
        <b-card-text>地址：新昌著名的古村落—斑竹村</b-card-text>
        <b-card-text>时间：2020-4-2</b-card-text>
        <b-card-text>已报名：50</b-card-text>
        <b-button @click="dialogVisible = true" variant="primary">我要报名</b-button>
      </b-card> -->

    </div>

    <el-dialog title="提示" :visible.sync="toastVisible" width="30%">
      <span>报名成功 </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onConfirmed">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import http from '../../common/http'

export default {
  data() {
    return {
      dialogVisible: false,
      toastVisible: false,
      baseURL: http.defaults.baseURL,
      items: []
    }
  },
  methods: {
    join(id) {
      var that = this
      http.get('/users/activity/' + id).then(res => {
        if (res.data.status === 0) {
          that.toastVisible = true
        }
      })
    },
    onConfirmed() {
      this.toastVisible = false
      this.$router.go(0)
    }
  },
  mounted() {
    var that = this
    http.get('/users/activity/list').then(res => {
      if (res.data.status === 0) {
        that.items = res.data.data
        http
          .get('/users/activity/my')
          .then(myres => {
            if (myres.data.status === 0) {
              for (var i in that.items) {
                for (var j in myres.data.data) {
                  if (
                    that.items[i].activity_id === myres.data.data[j].activity_id
                  ) {
                    that.items[i].joined = true
                    break
                  }
                }
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  }
}
</script>

<style scoped>
</style>