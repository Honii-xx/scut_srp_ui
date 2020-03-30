<template>
  <div>
    <h2 id="subpage-title">我的活动</h2>
    <b-card-group deck>
      <b-card footer-bg-variant="success" style="max-width: 20rem;" title="太极拳体验和学习" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/u%3D4274129534%2C1683238899%26fm%3D26%26gp%3D0.jpg" img-alt="Image" img-top>
        <b-card-text>
          现场邀请孙式太极拳名家，孙式太极拳第三代传人，北京孙式太极拳研究会会长、北京形意拳研究会名誉会长，刘树春老师指导。
        </b-card-text>
        <template v-slot:footer>
          <small>3天后开始</small>
        </template>
      </b-card>

      <b-card class="text-muted" style="max-width: 20rem;" title="春季联谊 聚会华工" img-src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/u%3D2690387131%2C3828772643%26fm%3D26%26gp%3D0.jpg" img-alt="Card image" img-top>
        <b-card-text class="text-muted">
          春天，是充满希望的季节。我会组织校友进行联谊，通过参观、交流，互相取长补短，达到共同促进。
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">已结束</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#subpage-title {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>