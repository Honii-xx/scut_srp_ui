<template>
  <div>
    <el-carousel :interval="2500" arrow="always" height="380px">
      <el-carousel-item>
        <img src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/ea2c1e11-5b40-425a-b1b6-62a70d528080.jpg" height="100%" width="100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/ee3fb1b6-e0ba-40e6-92c7-5552f886fb19.jpg" height="100%" width="100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://g-to.oss-cn-hangzhou.aliyuncs.com/srp/mainpic.png" height="100%" width="100%" />
      </el-carousel-item>
    </el-carousel>
    <h3 class="news-title">校园新闻 News</h3>
    <b-row>
      <b-col>
        <b-list-group class="news">
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">【战疫华工人⑰】吹响“集结号”　复工复产“建”行动</h5>
              <small>2020-03-29</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">【一线党旗飘⑦】待风雨后，看美丽如你</h5>
              <small>2020-03-28</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">校领导检查指导五山校区门岗执勤工作并慰问执勤人员</h5>
              <small>2020-03-28</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">华南理工参加广东省2020届毕业生就业视频会</h5>
              <small>2020-03-26</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">华南理工27个项目（个人）获2019年度广东省科学技术奖</h5>
              <small>2020-03-25</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">凝心聚力　经世济用　华工社科贡献战“疫”力量</h5>
              <small>2020-03-25</small>
            </div>
          </b-list-group-item>

        </b-list-group>
      </b-col>
      <b-col>
        <b-list-group class="news">
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">【战疫华工人⑰】吹响“集结号”　复工复产“建”行动</h5>
              <small>2020-03-29</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">【一线党旗飘⑦】待风雨后，看美丽如你</h5>
              <small>2020-03-28</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">校领导检查指导五山校区门岗执勤工作并慰问执勤人员</h5>
              <small>2020-03-28</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">华南理工参加广东省2020届毕业生就业视频会</h5>
              <small>2020-03-26</small>
            </div>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">华南理工27个项目（个人）获2019年度广东省科学技术奖</h5>
              <small>2020-03-25</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">凝心聚力　经世济用　华工社科贡献战“疫”力量</h5>
              <small>2020-03-25</small>
            </div>
          </b-list-group-item>

        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.news {
  margin-top: 10px;
}
.news-title {
  margin-top: 20px;
}
</style>