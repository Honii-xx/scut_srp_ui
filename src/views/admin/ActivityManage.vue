<template>
  <div>
    <h3 class="margin-c" id="subpage-title">活动管理</h3>
    <p class="text-muted" v-if="items.length === 0">你还没有发布任何活动哦~</p>
    <b-card-group deck>
      <b-card v-for="item in items" :key="item.activity_id" :class="item.expired_date? 'text-muted': ''" style="max-width: 20rem;" :title="item.title" :img-src="baseURL + item.url" img-alt="Image" img-top>
        <b-card-text>
          {{ item.description }}
        </b-card-text>
        <template v-slot:footer>
          <b-row aligh-h="between">
            <b-col cols="6">
              <small>{{ item.datetime }}</small>
            </b-col>
            <b-col cols="6">
              <b-button @click="showJoinedList(item.activity_id)" size="sm" variant="primary">查看已报名名单</b-button>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-card-group>
    <h3 class="margin-c">活动发布</h3>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="title-input">活动标题:</label>
      </b-col>
      <b-col cols="6">
        <b-form-input id="title-input" v-model="title" placeholder="在此输入活动标题"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">活动描述：</label>
      </b-col>
      <b-col cols="6">
        <b-form-textarea id="textarea-rows" placeholder="在此输入活动描述" rows="6" v-model="content"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">活动时间：</label>
      </b-col>
      <b-col cols="6">
        <b-form-input id="time-input" v-model="datetime" placeholder="在此输入活动时间"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">活动地址：</label>
      </b-col>
      <b-col cols="6">
        <b-form-input id="address-input" v-model="address" placeholder="在此输入活动地址"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">活动封面图片：</label>
      </b-col>
      <b-col cols="6">
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="拖拽文件至此或点击选择..." drop-placeholder="松手确认..." browse-text="浏览文件"></b-form-file>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start" style="text-align:right">
      <b-col cols="2">
      </b-col>
      <b-col cols="6">
        <b-button size="md" variant="primary" @click="onPublishClicked">发布</b-button>
      </b-col>
    </b-row>
    <el-dialog :title="toastTitle" :visible.sync="toastVisible" width="30%">
      <div v-html="toastContent"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toastVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import http from '../../common/http'

export default {
  data() {
    return {
      toastContent: '',
      toastTitle: '',
      toastVisible: false,
      title: '',
      content: '',
      datetime: '',
      address: '',
      file: null,
      items: [],
      baseURL: http.defaults.baseURL
    }
  },
  methods: {
    onPublishClicked() {
      if (this.title != '' && this.content != '' && this.file != null) {
        var data = new FormData()
        data.append('myFile', this.file)
        var that = this
        http
          .post('/common/upload', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            if (res.data.status === 0) {
              http
                .post('/admin/post_activity', {
                  url: res.data.data.url,
                  title: that.title,
                  description: that.content,
                  address: that.address,
                  datetime: that.datetime
                })
                .then(res => {
                  if (res.data.status === 0) {
                    that.title = ''
                    that.content = ''
                    that.file = null
                    that.address = ''
                    that.datetime = ''
                    that.makeToast('发布成功')
                  }
                })
                .catch(err => {
                  that.makeToast('网络错误')
                })
            }
          })
          .catch(err => {
            that.makeToast('网络错误')
          })
      }
    },
    makeToast(content, title='提示') {
      this.toastVisible = true
      this.toastContent = content
      this.toastTitle = title
    },
    showJoinedList(id) {
      var that = this
      http.get('/admin/activity_joined_list/' + String(id)).then(res => {
        if (res.data.status === 0) {
          var str = ''
          for (var i in res.data.data) {
            str += '<p>' + res.data.data[i] + '</p>'
          }
          that.makeToast(str, '已报名校友学号')
        }
      })
    }
  },
  mounted() {
    var that = this
    http.get('/users/activity/list').then(res => {
      if (res.data.status === 0) {
        that.items = res.data.data
      }
    })
  }
}
</script>

<style scoped>
.margin-c {
  margin: 18px 5px;
}
</style>