<template>
  <div>
    <div class="mt-4">

      <h2>活动资讯</h2>
      <b-card title="太极拳体验和学习" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/u%3D4274129534%2C1683238899%26fm%3D26%26gp%3D0.jpg" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          现场邀请孙式太极拳名家，孙式太极拳第三代传人，北京孙式太极拳研究会会长、北京形意拳研究会名誉会长，刘树春老师指导。
        </b-card-text>
        <b-card-text>地址：广州市华南理工大学田径场</b-card-text>
        <b-card-text>时间：2020-5-9</b-card-text>
        <b-card-text>人数：30</b-card-text>
        <b-button @click="dialogVisible = true" variant="primary">我要报名</b-button>
      </b-card>

      <b-card title="春季联谊 聚会华工" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/u%3D2690387131%2C3828772643%26fm%3D26%26gp%3D0.jpg" img-alt="Card image" img-right class="mb-3">
        <b-card-text>
          春天，是充满希望的季节。我会组织校友进行联谊，通过参观、交流，互相取长补短，达到共同促进。
        </b-card-text>
        <b-card-text>地址：大学城中心湖</b-card-text>
        <b-card-text>时间：2020-4-25</b-card-text>
        <b-card-text>人数：50</b-card-text>
        <b-button @click="dialogVisible = true" variant="primary">我要报名</b-button>
      </b-card>

      <b-card title="重走唐诗之路 寻访古村古镇" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/dsafsafsfa.jfif" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          “山阴道上行,如在镜中游”,从相传黄帝铸镜于此而得名的“镜湖”到“连峯数十里,修竹带平津”的天姥山古道的“唐诗之路”,古村林立,土地灵异,山水奇特,风光旖旎！特别是近年来,在习总书记“青山绿水”就是“金山银山”的方针指引下,绍兴的南部山区,山更青了,水更绿了,更成了摄影爱好者的仰慕之路,沿线采风,“摄影与美同行”！
        </b-card-text>
        <b-card-text>地址：新昌著名的古村落—斑竹村</b-card-text>
                <b-card-text>时间：2020-4-2</b-card-text>
        <b-card-text>人数：50</b-card-text>
        <b-button @click="dialogVisible = true" variant="primary">我要报名</b-button>
      </b-card>

    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>报名后请合理安排个人时间，准时参加活动哦~ </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认报名？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
</style>